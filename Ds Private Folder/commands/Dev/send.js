const { MessageEmbed } = require('discord.js');
require('discord-reply');
const premium = require("../../src/utils/Constants.js").bot.log;
const supportid = require("../../src/utils/Constants.js").bot;
module.exports.run = async(message, args, client) => {
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
if(!user) return message.lineReply('User !');
if(!args[1]) return message.lineReply('Message !');

message.channel.send(`Done Send To ${user} The Message : \n \`${args[1].join(' ')}\``)
//user.send(args[1].join(''))
}

module.exports.help = {
  name: 'send'
};

module.exports.options = {
  owner: true
};