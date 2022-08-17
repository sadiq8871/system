const { MessageEmbed } = require('discord.js');
const { version } = require("../../package.json")
const emojis = require("../../src/utils/Constants.js").bot.emojis;
const { prefix,defaultLanguage, support, Dashboard, invite, devs } = require("../../src/utils/Constants.js").bot;
const moment = require("moment");
require('moment-duration-format');
require('discord-reply');
var bot = true;


module.exports.run = async(message, args, client, locale) => {  
  let guildData = client.database('guildData', message.guild.id, {
    prefix: prefix,
    guildId: message.guild.id,
    language: defaultLanguage
  }).get;
  
    const status = {
      online: '<:online:887018609321340978>',
      offline: '<:offline:887018610873237504>',
      dnd: '<:dnd:887018607668777061>',
      idle: '<:idle:887018606062370886>'
    }
    
    let embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true}))
      .setTitle(locale.reply.replace('{bot}', client.user.username).replace('{ver}', version))
      .setColor("#07c5ad")
			.setThumbnail(client.user.avatarURL({ dynamic: true }))
			.addField(locale.reply1.replace('{info}', client.user.username), [
      locale.reply2.replace('{name}', client.user.tag),
      locale.reply3.replace('{id}', client.user.id),
      locale.reply4.replace('{created}', `\`${moment(client.user.createdTimestamp).format('DD/MM/YYYY')}\n ${moment(client.user.createdTimestamp).fromNow()}\``),
      locale.reply5.replace('{prefix}', guildData.prefix),
      locale.reply6.replace('{servers}', client.guilds.cache.size),
      locale.reply7.replace('{users}', client.users.cache.size),
      locale.reply8.replace('{online}', moment.duration(client.uptime).format('D [days], H[hrs], m[mins], s[secs]')),
      locale.reply9.replace('{status}', "`" + client.user.presence.status + "`" + " " + status[client.user.presence.status]),
      ])
    //${emojis.other}
      .addField(locale.reply10, [
        `**- [Dashboard](${Dashboard})\n- [Support](${support})\n- [Invite](${invite})**`
      ])

    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		
message.lineReplyNoMention(embed);

}

module.exports.help = {
  name: 'bot',
  description: 'Show bot info',
}

module.exports.options = {};


// اصبر بخلص مابقا شئ