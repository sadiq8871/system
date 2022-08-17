const { MessageEmbed } = require('discord.js');
require('discord-reply');
const moment = require('moment');
var userr = true;
module.exports.run = async(message, args, client, locale) => {
   const f = {
    HOUSE_BRAVERY: "<:bravery:867862515325468743>",
    HOUSE_BRILLIANCE: "<:brilliance:867862565450547223>",
    HOUSE_BALANCE: "<:balance:867862513882234900>",
  };
 moment.locale('en');
 let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author);
  
    const status = {
      online: '<:online:887018609321340978>',
      offline: '<:offline:887018610873237504>',
      dnd: '<:dnd:887018607668777061>',
      idle: '<:idle:887018606062370886>'
    }
  
     var dolah = user;
     let presence;
      if (dolah.presence.activities[0]) {
      if (dolah.presence.activities[0].type == "PLAYING")
        presence = `Playing ${dolah.presence.activities[0].name}`;
      else if (dolah.presence.activities[0].type == "STREAMING")
        presence = `Streaming ${dolah.presence.activities[0].name}`;
      else if (dolah.presence.activities[0].type == "WATCHING")
        presence = `Watching ${dolah.presence.activities[0].name}`;
      else if (dolah.presence.activities[0].type == "LISTENING")
        presence = `Listening ${dolah.presence.activities[0].name}`;
      else if (dolah.presence.activities[0].type == "CUSTOM_STATUS")
        presence = `${dolah.presence.activities[0].state}`;
    } else presence = "None";
    if (!presence) presence = client.user.presence.activities;

    const perRole = user.roles.cache.find(e => e.permissions.has('ADMINISTRATOR')) || { name: 'None' };

  //locale.reply.replace
      message.channel.stopTyping();
    let embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
			.setColor(message.member.displayHexColor || "#07c5ad")
			.setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
      .addField(locale.reply.replace('{user}',user.user.username), [
        locale.reply1.replace('{tag}', user.user.tag),
        locale.reply2.replace('{id}', user.id),
        locale.reply3.replace('{created}', `\`${moment(user.user.createdAt).format('DD/MM/YYYY')}\n${moment(user.user.createdAt).fromNow()}\``),
        locale.reply4.replace('{joined}', `\`${moment(user.joinedAt).format('DD/MM/YYYY')}\n${moment(user.joinedAt).fromNow()}\``)])
        .addField(locale.reply5, [
        locale.reply6.replace('{status}', "\`" + dolah.presence.status + "\` " + status[dolah.presence.status]),
        locale.reply7.replace('{used}', dolah.presence.clientStatus ? Object.keys(dolah.presence.clientStatus) : "Offline"),
        locale.reply8.replace('{custom}', presence || "Nothing"),
        locale.reply9.replace('{nick}', message.guild.member(user).nickname ? message.guild.member(user).nickname  :  "Nothing"),
        locale.reply10.replace('{permission}', message.guild.member(user).permissions.has("ADMINISTRATOR") ? locale.reply11 : locale.reply12),
        locale.reply13.replace('{role_permission}', perRole.name || "Nothing")
    ])

    message.lineReplyNoMention(embed);
      
}



module.exports.help = {
  name: 'user',
  description: 'User Info',
  usage: ['user (user)'],
  Examples: ['user','user <@746724568877629440>', 'user 746724568877629440'], 
  cooldown: 5
}

module.exports.options = {};