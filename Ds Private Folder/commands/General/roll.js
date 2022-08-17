const Discord = require("discord.js");
require("discord-reply");
const {MessageEmbed} = require("discord.js");
module.exports.run = async(message, args, client, locale) => {
  let roll = Math.floor(Math.random() * 99) + 1
  message.lineReplyNoMention(locale.reply.replace('{roll}', roll))
  
}

module.exports.help = {
  name: 'roll',
  description: 'Throwing Dicr'
}

module.exports.options = {}