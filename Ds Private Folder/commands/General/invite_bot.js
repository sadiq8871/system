const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons');
const { MessageButton, MessageActionRow } = require("discord-buttons")
require('discord-reply');
const { prefix, support, Dashboard, invite, devs} = require("../../src/utils/Constants.js").bot;


module.exports.run = async(message, args, client, locale) => {
  let embed = new MessageEmbed()
  .setTitle("Boop Beep")
  .setColor("WHITE")
  .setTimestamp()
  message.lineReplyNoMention(embed).then(msg => {

      var embed1 = new MessageEmbed()
			.setColor("#07c5ad")
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
      .addField(locale.reply, [
        locale.reply1
      ])
      .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
      

let button = new MessageButton()
.setEmoji("885213759642140752")
.setStyle ('url')
.setLabel('Dashboard')
.setURL(Dashboard);
let button2 = new MessageButton()
.setEmoji('884502040879955978')
.setStyle ('url')
.setLabel('Support')
.setURL(support);
let button3 = new MessageButton()
.setEmoji('884136333247938602')
.setStyle ('url')
.setLabel('Invite')   
.setURL(invite)
let buttonRow = new MessageActionRow()
    .addComponent(button)
    .addComponent(button2)
    .addComponent(button3)
    //.addComponent(button4);

 msg.edit(embed1, { 
        component: buttonRow,
         })
  
  })
        
}

module.exports.help = {
  name: 'invite',
  description: 'Link Bot',
  cooldown: 10
}
module.exports.options = {};