
const { MessageEmbed } = require('discord.js');
const inlinereply = require('discord-reply');
var role = true;
module.exports.run = async(message, args, client, locale) => {
  let error = new MessageEmbed()
  let success = "✅",
      error1 = "❌",
      reply = locale.reply,
      reply1 = locale.reply1,
      reply2 = locale.reply2,
      reply3 = locale.reply3,
      reply4 = locale.reply4,
      reply5 = locale.reply5;
      //reply6 = error.setDescription(locale.reply6);
  
 let roles = message.guild.roles.cache.sort((a,b) => b.position - a.position);
    var type = "";
    if(args[0].toLowerCase() === "all" || args[0].toLowerCase() === "humans" || args[0].toLowerCase() === "bots") {
       if(!args[1]) return message.channel.send(reply);
       if(args[1].startsWith("+"))
      {
        type = "+";
        args[1] = args[1].replace("+","");
      }
      else if(args[1].startsWith("-"))
      {
        type = "-";
        args[1] = args[1].replace("-","");
      }else type = "";
      if (!args[1]) return message.channel.send(reply1);
      var name_role = roles.find(r => r.name.toLowerCase() === args[1].toLowerCase().trim());
      if(!name_role)
      {
       name_role = roles.find(r => r.name.toLowerCase().startsWith(args[1].toLowerCase().trim()));
      }
      if(!name_role)
      {
        name_role = roles.find(r => r.name.toLowerCase().includes(args[1].toLowerCase().trim()));
      }
      if(name_role)
      {
      if(name_role.name === "@everyone") return message.channel.send(reply2.replace(/\[role]/g,`${args.slice(1).join(' ')}`));
      let byrole = message.member.roles.highest.position;
          if (message.guild.owner.user.id === message.author.id)
          {
          byrole = name_role.position+parseInt(1);
          }
          let permission = message.guild.members.cache.get(client.user.id);
          if(name_role.position >= permission.roles.highest.position) return message.channel.send(reply3);
          if(name_role.position >= byrole) return message.channel.send(reply4.replace(/\[role]/g,`${name_role.name}`));
        if(args[0].toLowerCase() === "all")
        {
          if (type === "" || type === "+") 
          {
          let list = message.guild.members.cache.filter(u => !u.roles.cache.has(name_role.id))
          list.forEach(all => {
          all.roles.add(name_role);
          });
          message.channel.send(reply5.replace(/\[user]/g,`${list.size}`).replace(/\[type]/g, 'members').replace(/\[oop]/g, '+').replace(/\[role]/g, `${name_role.name}`));
            return;
          } else if(type === "-")
          {
          let list = message.guild.members.cache.filter(u => u.roles.cache.has(name_role.id))
          list.forEach(all => {
          all.roles.remove(name_role);
          });
          message.channel.send(reply5.replace(/\[user]/g,`${list.size}`).replace(/\[type]/g, 'members').replace(/\[oop]/g, '-').replace(/\[role]/g, `${name_role.name}`));
           return;
          }
        }
        else if(args[0].toLowerCase() === "humans")
        {
          if (type === "" || type === "+") 
          {
          let list = message.guild.members.cache.filter(u => !u.user.bot && !u.roles.cache.has(name_role.id))
          list.forEach(humans => {
          humans.roles.add(name_role);
          });
          message.channel.send(reply5.replace(/\[user]/g,`${list.size}`).replace(/\[type]/g, 'members').replace(/\[oop]/g, '+').replace(/\[role]/g, `${name_role.name}`));
            return;
          } else if(type === "-")
          {
          let list = message.guild.members.cache.filter(u => !u.user.bot && u.roles.cache.has(name_role.id))
          list.forEach(humans => {
          humans.roles.remove(name_role);
          });
          message.channel.send(reply5.replace(/\[user]/g,`${list.size}`).replace(/\[type]/g, 'members').replace(/\[oop]/g, '-').replace(/\[role]/g, `${name_role.name}`));
            return;
          }
        }
        else if(args[0].toLowerCase() === "bots")
        {
          if (type === "" || type === "+") 
          {
          let list = message.guild.members.cache.filter(u => u.user.bot && !u.roles.cache.has(name_role.id))
          list.forEach(bots => {
          bots.roles.add(name_role);
          });
          message.channel.send(reply5.replace(/\[user]/g,`${list.size}`).replace(/\[type]/g, 'bots').replace(/\[oop]/g, '+').replace(/\[role]/g, `${name_role.name}`));
            return;
          } else if(type === "-")
          {
          let list = message.guild.members.cache.filter(u => u.user.bot && u.roles.cache.has(name_role.id))
          list.forEach(bots => {
          bots.roles.remove(name_role);
          });
          message.channel.send(reply5.replace(/\[user]/g,`${list.size}`).replace(/\[type]/g, 'bots').replace(/\[oop]/g, '-').replace(/\[role]/g, `${name_role.name}`));
            return;
          }
        }
    }else return message.channel.send(reply2.replace(/\[role]/g, `${args.slice(1).join(' ')}`));
    }
    else {
    var user = client.users.cache.get(args[0].replace(/[/<@!>]/g, ''));
    if(!args[0] || !user) return message.channel.send(reply);
    if(!args[1]) return message.channel.send(reply1);
    var pop = [], pop3 = [], pop2 = [], notfound = [];
    let Roles = args.slice(1).join(" ").toString().toLowerCase().split(",");
    for(var role of Roles){
      if(role.startsWith("+"))
      {
        type = "+";
        role = role.replace("+","");
      }
      else if(role.startsWith("-"))
      {
        type = "-";
        role = role.replace("-","");
      }else type = "";
      var name_role = roles.find(r => r.name.toLowerCase() === role.toLowerCase().trim());
      if(!name_role)
      {
       name_role = roles.find(r => r.name.toLowerCase().startsWith(role.toLowerCase().trim()));
      }
      if(!name_role)
      {
        name_role = roles.find(r => r.name.toLowerCase().includes(role.toLowerCase().trim()));
      }
      if(name_role)
      {
      if(name_role.name === "@everyone"){
      name_role = name_role.toString().replace(/\@everyone/g,"").trim();
      continue;
      }
        let byrole = message.member.roles.highest.position;
        if (message.guild.owner.user.id === message.author.id)
        {
        byrole = name_role.position + parseInt(1);
        }
        let permission = message.guild.members.cache.get(client.user.id);
        if(name_role.position >= permission.roles.highest.position) {pop2.push(name_role.name);continue;}
        if(name_role.position >= byrole) {pop2.push(name_role.name);continue;}
    try{
        if(!message.guild.member(user).roles.cache.has(name_role.id) && type === "" || type === "+")
        {
          message.guild.member(user).roles.add(name_role);
          pop.push(name_role.name);
        }
        else if(message.guild.member(user).roles.cache.has(name_role.id) && type === "" || type === "-")
        {
          message.guild.member(user).roles.remove(name_role);
          pop3.push(name_role.name);
        }
      }catch(error) 
      {
        continue;
      }
      }else if(!name_role) {notfound.push(role);continue;}
    }
      var embed = new MessageEmbed()
      //.setTitle(`**${reply7.replace(/\[user]/g,`${user.username}`)}**`)
      .setAuthor(message.guild.name,message.guild.iconURL({ dynamic: true }))
      .setColor('RANDOM')
      .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
      if (pop.length) embed.addField(locale.reply7, locale.reply8.replace('{pop}', pop.join(",")))
      if (pop3.length) embed.addField(locale.reply9,locale.reply10.replace('{pop3}', pop3.join(",")))
      if (pop2.length) embed.addField(locale.reply11,locale.reply12.replace('{pop2}', pop2.join(",")))
      if (notfound.length) embed.addField(locale.reply13,locale.reply14.replace('{nf}', notfound.join(",")));
      message.lineReplyNoMention(embed);
    }
}

module.exports.help = {
  name: "role",
  description: "Give / Remove role",
  aliases: ["r"],
  args: true,
  usage: [
    "role (user) (+/-)[roles names]",
    "role (all / humans / bots) (+/-)[roles names]",
  ],
  Examples: [
    "role (user) admin",
    "role (userid) admin",
    "role all members",
    "role humans members",
    "role bots System",

  ],
  cooldown: 5
}


module.exports.options = {
  checkRoles: true,
  admin: true,
  permissions: ['MANAGE_ROLES']
};