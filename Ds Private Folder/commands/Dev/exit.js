const { MessageEmbed } = require('discord.js');
require('discord-reply');

module.exports.run = async(message, args, client) => {
  var guilds = client.guilds.cache.filter(e => e.memberCount < 50).forEach(g => g.leave());  
  message.lineReply(`The ${client.user.username} Has Been Leave From **${guilds.size}**`)
}

module.exports.help = {
  name: 'exit',
  description: "exit Servers Tokens",
}
module.exports.options = {
  owner: true
};