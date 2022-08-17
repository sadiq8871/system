const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const Discord = require('discord.js');
const { Websocket, clientUser, checkAuth, formatIcon, Permissions } = require('../utils/Constants').Website;
const { devs, blacklistUsers, support } = require('../utils/Constants').bot;
const FormData = require("form-data");
const session = require('express-session');
const listener = require('../Events');

module.exports = function(client) {
  

  router.get('/', (req, res) => {
 const AdminsData = client.database('AdminsData', 'Admins', {
        Admins: [devs],
        Blacklist: []
      }, !0);
  if(req.session.user && AdminsData.get.Blacklist.includes(req.session.user.id)) return res.redirect('/blacklist');
const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);
    var premium = true;
    if(!req.session.user) premium = false; 
    if(premium) {
    var bot = premiums.get.bots.filter(e => e.owner == req.session.user.id)[0];
    if(!bot) premium = false;
    if(bot) premium = true
    }
    res.render('index.ejs', { client, user: req.session.user,premium });
  
  });
  
  router.get('/blacklist', (req, res) => {
  if (!req.session.user) return res.redirect('/');
 const AdminsData = client.database('AdminsData', 'Admins', {
        Admins: [devs],
        Blacklist: []
      }, !0);
  if(req.session.user && !AdminsData.get.Blacklist.includes(req.session.user.id)) return res.redirect('/blacklist');
    res.render('blacklist.ejs',{ client, user: req.session.user });
  
  });

  router.get("/login", (req, res) => {
    if (req.session.user) return res.redirect("/");
    const authorizeUrl = `https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&redirect_uri=${encodeURIComponent(Websocket.redirectURI + '/auth')}&response_type=code&scope=${clientUser.scopes.join("%20")}`;
    res.redirect(authorizeUrl);
  });

  router.get("/auth", async (req, res) => {
    const accessCode = req.query.code;
    if (!accessCode) return res.redirect("/login");

    const formData = new FormData();
    formData.append("client_id", client.user.id);
    formData.append("client_secret", clientUser.secret);
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", Websocket.redirectURI + '/auth');
    formData.append("scope", clientUser.scopes.join(" "));
    formData.append("code", accessCode);
    
    const response = await fetch('https://discordapp.com/api/oauth2/token', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    //console.log(data);
    if (data.error) {
      return res.redirect('/login');
    }
    
    const userResponse = await fetch("https://discordapp.com/api/users/@me", {
      method: "GET",
      headers: {
        authorization: `Bearer ${data.access_token}`
      }
    });
    
    const user = await userResponse.json();
    req.session.user = user;
    req.session.user.avatarURL = client.rest.cdn.Avatar(user.id.toString(), user.avatar, "png", 2048, true);
    
    const guildsResponse = await fetch("https://discordapp.com/api/users/@me/guilds", {
      method: "GET",
      headers: {
        authorization: `Bearer ${data.access_token}`
      }
    });
    
    const guilds = await guildsResponse.json();
    req.session.user.guilds = guilds.filter(guild => guild.owner || Permissions(parseInt(guild.permissions)));
  
 const AdminsData = client.database('AdminsData', 'Admins', {
        Admins: [devs],
        Blacklist: []
      }, !0);
  if(req.session.user && AdminsData.get.Blacklist.includes(req.session.user.id)) 
    return res.redirect('/blacklist');
    res.redirect('/');
  });
  
  router.get("/dashboard", checkAuth, (req, res) => {
    if (!req.session.user) return res.redirect("/login");
    if(blacklistUsers.includes(req.session.user.id)) return res.redirect('/blacklist');

    let embed = new Discord.MessageEmbed()
    .setAuthor(req.session.user.username, client.user.avatarURL())
    .setDescription(`**${req.session.user.username} Has Open dashboard**`)
    .setThumbnail(client.user.avatarURL())
    .setFooter(client.user.username, client.user.avatarURL());
    
    // client.channels.cache.get("881529876300062761").send(embed);

    res.render("dashboard.ejs", {
      client,
      formatIcon: (...args) => formatIcon(...args, client),
      user: req.session.user
    });
  });
  



  router.get("/logout", (req, res) => {
    if (!req.session.user) return res.redirect('/');
    
    req.session.destroy();
    
    return res.redirect('/');
  });

 
 router.get("/invite", (req, res) => {
    if (req.query && req.query.guild_id) {
      return res.redirect(
        `https://discord.com/oauth2/authorize?scope=bot&response_type=code&redirect_uri=${encodeURIComponent(Websocket.redirectURI + '/auth')}&permissions=2147483647&client_id=${client.user.id}&guild_id=${
          req.query.guild_id
        }`
      );
    }
    return res.redirect(
      `https://discord.com/oauth2/authorize?scope=bot&response_type=code&redirect_uri=${encodeURIComponent(Websocket.redirectURI + '/auth')}&permissions=2147483647&client_id=${client.user.id}`
    );
  });
 
  router.get("/support", (req, res) => {
    res.redirect(support);
  });
 




  router.get("/premium", checkAuth, async (req, res) => {
    if (!req.session.user) return res.redirect("/");
 const AdminsData = client.database('AdminsData', 'Admins', {
        Admins: [devs],
        Blacklist: []
      }, !0);
    if(req.session.user && AdminsData.get.Blacklist.includes(req.session.user.id)) return res.redirect('/blacklist');

    const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);    
    var user = req.session.user,
    premium = true;
    premium = premiums.get.bots.filter(e => e.owner == req.session.user.id)[0];
   if (!premium) premium = false;
    var bot;
    if(premium) bot = client.users.cache.get(premium.clientID); 
    if(!premium) bot = user; 

    var devs = ["852984434316148776","713207310121435187"];
    var admins = false;
    if(devs.includes(req.session.user.id)) admins = true;
    res.render("server/premium/premium.ejs", {
      user: user,
      client: client,
      //premium: Boolean(premium),
      premium,
      admins,
      bot,
     formatIcon: (...args) => formatIcon(...args, client)
    });
  });
  
  router.post("/premium", async (req, res) => {
    if (!req.session.user) return res.redirect("/");
    if(req.body.openticket) {
    var channel = client.channels.cache.get('886366764512989206')
    
    channel.send(`**The ticket Has Open By: <@${req.session.user.id}>**`)


    }
    console.log(req.body);
    var { server, status, activitytype, activitytext, username, avatar } = req.body;
    let data = {};
   const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);    
   
   const data1 = premiums.get;
   data1.bots = data1.bots || [];

   let Bots = data1.bots.map((x, i) => ({...x,i}));
    var premium = Bots.filter(e => e.owner == req.session.user.id)[0];

    if(server) {
data1.bots[premium.i].guildID = server;
    premiums.set(data1);
return;
    }


    data.presence = {
      status: status,
      activity: {
        type: activitytype,
        name: activitytext
      }
    };

    data.username = username;
    data.avatar = avatar;

    listener.emit('updateSettings', req.body.premiumID, data);
  });

  
  
  return router;
}