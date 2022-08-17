const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const Discord = require('discord.js');
const { Websocket, clientUser, checkAuth, formatIcon, Permissions } = require('../utils/Constants').Website;
const FormData = require("form-data");
const session = require('express-session');
const db = require("quick.db");
const listener = require('../Events');

module.exports = function(client) {
  router.get('/:guildID', checkAuth, async (req, res) => {
    var guilds = req.session.user.guilds.filter(g => g.id == req.params.guildID);
    if (!guilds.length) return res.redirect("/dashboard");
    const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    if (!client.guilds.cache.has(req.params.guildID))
      return res.redirect("/invite?guild_id=" + req.params.guildID);
    var guild = client.guilds.cache.get(req.params.guildID);
    var premium = false;

    var bot = premiums.get.bots.filter(e => e.guildID == guild.id)[0];
    if(bot) premium = true;  
    var owner = client.users.cache.get(guild.ownerID);
    let messages = await db.fetch(`messages_${req.params.guildID}`);
    var newmembers = await db.fetch(`newmembers_${req.params.guildID}`);
    var oldmembers = await db.fetch(`oldmembers_${req.params.guildID}`);

    const user = req.session.user;
  let embed = new Discord.MessageEmbed()
    .setAuthor(req.session.user.username, client.user.avatarURL())
    .setDescription(
      `**${req.session.user.username} Has Open Dashboard ${guild.name}**`
    )
  
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setFooter(client.user.username, client.user.avatarURL());
    client.channels.cache.get("881529876300062761").send(embed)
    //console.log(user.username + " Has Open Dashboard " + guild.name);
    if (!newmembers) newmembers = "0";
    if (!messages) messages = "0";
    if (!oldmembers) oldmembers = "0";

    res.render("server/overview.ejs", {
      guild,
      formatIcon: (...args) => formatIcon(...args, client),
      user,
      owner,
      client: client,
      messages,
      newmembers,
      oldmembers,
      premium: false
    });
  });

  router.get('/:guildID/settings', checkAuth, (req, res) => {
    var guilds = req.session.user.guilds.filter(g => g.id == req.params.guildID);
    if (!guilds.length) return res.redirect("/dashboard");
    if (!client.guilds.cache.has(req.params.guildID))
      return res.redirect("/invite?guild_id=" + req.params.guildID);

   const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    var guild = client.guilds.cache.get(req.params.guildID);
    var premium = false;

    var bot = premiums.get.bots.filter(e => e.guildID == guild.id)[0];
    if(bot) premium = true;  
    const user = req.session.user;
    let data = client.database('guildData', req.params.guildID).get;
    
    res.render("server/settings.ejs", {
      guild,
      formatIcon: (...args) => formatIcon(...args, client),
      user,
      prefix: data ? data.prefix : client.prefix,
      language: data ? data.language : client.language,
      client: client,
      premium
    });
  });
  
router.post('/:guildID/settings', checkAuth, async (req, res) => {
    if (!req.session.user || !client.guilds.cache.has(req.params.guildID)) return;
   
    let data = client.database('guildData', req.params.guildID, {
      guildId: req.params.guildID,
      ...req.body
    }, true);
  let data1 = client.database('BankData', req.params.guildID);
  let data2 = client.database('enableData', req.params.guildID);
  let data3 = client.database('welcomeData', req.params.guildID);
    if (req.body.deleteCache) {
      data.delete();
      data1.delete();
      data2.delete();
      data3.delete();
      return;
    }
    data.set(data.defaultData);
  
  res.json({
    status: 1
  });
  });
  
  client.on("guildMemberAdd", async member => {
    await db.add(`newmembers_${member.guild.id}`, 1);
  });
  client.on("guildMemberRemove", async member => {
    await db.add(`oldmembers_${member.guild.id}`, 1);
  });
  client.on("message", async message => {
   if(!message.guild) return;
    await db.add(`messages_${message.guild.id}`, 1);
  });
  client.on("ready", async () => {
    await client.guilds.cache.forEach(async g => {
      setInterval(async () => {
        await db.set(`messages_${g.id}`, 1);
        await db.set(`oldmembers_${g.id}`, 1);
        await db.set(`newmembers_${g.id}`, 1);
      }, 86400000);
    });
  });
  
  router.get("/:guildID/welcome", checkAuth, async (req, res) => {
    var guilds = req.session.user.guilds.filter(g => g.id == req.params.guildID);
    if (!guilds.length) return res.redirect("/dashboard");
    if (!client.guilds.cache.has(req.params.guildID)) return res.redirect("/invite?guild_id=" + req.params.guildID);
  
const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    var guild = client.guilds.cache.get(req.params.guildID);
    var premium = false;

    var bot = premiums.get.bots.filter(e => e.guildID == guild.id)[0];
    if(bot) premium = true;          
    var user = req.session.user,
        
    channels = guild.channels.cache.filter(e => e.type == 'text'),
        
    roles = guild.roles.cache.filter(e => e.name != '@everyone');
    res.render("server/welcome.ejs", {
      data: client.database('welcomeData', guild.id, { 
      guildID: guild.id,
      welcomeChannel: null,
      AutoRoles: [],
      toggle: 'off',
      log: { 
      channel: null,
      toggle: 'off'
      } 
      }).get,
      guild: guild,
      channels: channels,
      roles,
      user: user,
      client: client,
      formatIcon: (...args) => formatIcon(...args, client),
      premium
    });
    
  });

  router.post("/:guildID/welcome", checkAuth, (req, res) => {
    var { Welcome_roles, Welcome_channel, Welcome_log} = req.body;
    
    Welcome_log = Welcome_log ? 'on' : 'off';
    
    let data = client.database('welcomeData', req.params.guildID);
    
    let _data = data.get;
    
    if (Welcome_channel) _data.welcomeChannel = Welcome_channel;
    if (Welcome_log) _data.toggle = Welcome_log;

    if(Welcome_roles) _data.AutoRoles = Array.isArray(Welcome_roles) ? Welcome_roles : [Welcome_roles];
        
    
    data.set(_data);

    res.json({
      status: 1
    });
  });
 
  router.get("/:guildID/avatar", checkAuth, async (req, res) => {
    var guilds = req.session.user.guilds.filter(g => g.id == req.params.guildID);
    if (!guilds.length) return res.redirect("/dashboard");
    if (!client.guilds.cache.has(req.params.guildID)) return res.redirect("/invite?guild_id=" + req.params.guildID);
     
    const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    var guild = client.guilds.cache.get(req.params.guildID);
    var premium = false;

    var bot = premiums.get.bots.filter(e => e.guildID == guild.id)[0];
    if(bot) premium = true;  
    var user = req.session.user,
        
    channels = guild.channels.cache.filter(e => e.type == 'text'),
        
     roles = guild.roles.cache.filter(e => e.name != '@everyone');
    
    res.render("server/avatar.ejs", {
      data: client.database('AvatarData', guild.id, {
    guildID: guild.id,
    boys_gif: {
      toggle: 'off',
      channel: null
    },
    boys_png: {
      toggle: 'off',
      channel: null
    },
    girls_gif: {
      toggle: 'off',
      channel: null
    },
    girls_png: {
      toggle: 'off',
      channel: null
    },
    boys_wb: {
      toggle: 'off',
      channel: null
    },
    girls_wb: {
      toggle: 'off',
      channel: null
    }
  }, !0).get,
      guild: guild,
      channels: channels,
      roles,
      user: user,
      client: client,
      premium,
      formatIcon: (...args) => formatIcon(...args, client)
    });
  });

  router.post("/:guildID/avatar", checkAuth, (req, res) => {
    var { boys_gif, boys_gifon, boys_png, boys_pngon, girls_gif, girls_gifon, girls_png, girls_pngon } = req.body;
    
    let base = client.database('AvatarData', req.params.guildID);
    let data = base.get;
    data.boys_gif = {
      toggle: boys_gifon ? 'on' : 'off',
      channel: boys_gif
    }
    data.boys_png = {
      toggle: boys_pngon ? 'on' : 'off',
      channel: boys_png
    }
    data.girls_gif = {
      toggle: girls_gifon ? 'on' : 'off',
      channel: girls_gif
    }
    data.girls_png = {
      toggle: girls_pngon ? 'on' : 'off',
      channel: girls_png
    }
    
    base.set(data);
    res.json({
      status: 1
    });
  });

  router.get("/:guildID/blacklist", checkAuth, async (req, res) => {
    var guilds = req.session.user.guilds.filter(g => g.id == req.params.guildID);
    if (!guilds.length) return res.redirect("/dashboard");
    if (!client.guilds.cache.has(req.params.guildID)) return res.redirect("/invite?guild_id=" + req.params.guildID);
     
    const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    var guild = client.guilds.cache.get(req.params.guildID);
    var premium = false;

    var bot = premiums.get.bots.filter(e => e.guildID == guild.id)[0];
    if(bot) premium = true;  
    var user = req.session.user,
        
    channels = guild.channels.cache.filter(e => e.type == 'text'),
        
     roles = guild.roles.cache.filter(e => e.name != '@everyone');
    
    res.render("server/blacklist.ejs", {
      data: client.database('blacklistData', guild.id, {
        guildID: guild.id,
        blacklistRoles: [],
        message: `**عزيزي العضو : [user]
لقد تم سجنك في سيرفرنا : [server]
من قبل الأداري : [admin]**`,
        log: {
          toggle: 'off',
          channel: null
        }
      }, !0).get,
      guild: guild,
      channels: channels,
      roles,
      user: user,
      client: client,
      premium,
      formatIcon: (...args) => formatIcon(...args, client)
    });
  });

  router.post("/:guildID/blacklist", checkAuth, (req, res) => {
    var { blacklist_role, message_member, blacklist_log, log_blacklist } = req.body;
    
    let base = client.database('blacklistData', req.params.guildID);
    let data = base.get;
    blacklist_log = blacklist_log ? 'on' : 'off';

    data.blacklistRoles = Array.isArray(blacklist_role) ? blacklist_role : [blacklist_role];
    data.message = message_member;
    if (blacklist_log) data.log.toggle = blacklist_log;
    if (log_blacklist) data.log.channel = log_blacklist;
    
    base.set(data);
    res.json({
      status: 1
    });
  });

  router.get("/:guildID/bank", checkAuth, async (req, res) => {
    var guilds = req.session.user.guilds.filter(g => g.id == req.params.guildID);
    if (!guilds.length) return res.redirect("/dashboard");
    if (!client.guilds.cache.has(req.params.guildID)) return res.redirect("/invite?guild_id=" + req.params.guildID);
    const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    var premium = false;
    var guild = client.guilds.cache.get(req.params.guildID);

    var bot = premiums.get.bots.filter(e => e.guildID == guild.id)[0];
    if(bot) premium = true;

        
    var user = req.session.user,
        
    channels = guild.channels.cache.filter(e => e.type == 'text'),


    roles = guild.roles.cache.filter(e => e.name != '@everyone');
    
    res.render("server/bank.ejs", {
      data: client.database('BankData', guild.id, {
        guildID: guild.id,
        adminsBank: [],
        money: null,
        log: {
          toggle: 'off',
          channel: null
        }
      }, !0).get,
      guild: guild,
      channels: channels,
      roles,
      user: user,
      client: client,
      premium,
      formatIcon: (...args) => formatIcon(...args, client)
    });
  });

  router.post("/:guildID/bank", checkAuth, (req, res) => {
    var { admins_roles, bank_log, money, log_channel } = req.body;
    
    let bank = client.database('BankData', req.params.guildID);
    let data = bank.get;

    data.adminsBank = Array.isArray(admins_roles) ? admins_roles : [admins_roles];
    data.money = Number(money);
    data.log = {
      toggle: bank_log ? 'on' : 'off',
      channel: log_channel
    }
    
    bank.set(data);
    res.json({
      status: 1
    });
  });

  
  return router;
}