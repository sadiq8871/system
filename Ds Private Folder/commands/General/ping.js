const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageButton, MessageActionRow } = require("discord-buttons")
require('discord-reply');
const { prefix, support, Dashboard, invite, devs} = require("../../src/utils/Constants.js").bot;

module.exports.run = async(message, args, client, locale) => {
  var ms = client.ws.ping;
  let embed = new MessageEmbed()
	.setDescription(`** Pong !! <@${message.author.id}>**`)
  .setColor("BLACK")
  .setTimestamp()
  
 let enableData = client.database('enableData', message.guild.id, {
      guildID: message.guild.id,
      enableRoles: [],
      adminRoles: [],
      channel: null,
      log: {
        toggle: 'off',
        channel: null
      }
    }, !0).get; 
 
  message.lineReplyNoMention(embed).then(resultMessage => {

        const api = resultMessage.createdTimestamp - message.createdTimestamp
          var embed1 = new MessageEmbed()
          
          .setAuthor(message.guild.name, message.guild.iconURL({ dynameic: true }))
          .addField(locale.reply, [
          `- **Ping Bot:** \`${ms}\``,
          `- **Discord API:** \`${api}\``])
          .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("#07c5ad")
 resultMessage.edit(embed1)
  
  })
  
  //////////////////////////////////////////////////////////////////////////////
      
}

module.exports.help = {
  name: 'ping',
  description: 'Connection Speeds',
}

module.exports.options = {};