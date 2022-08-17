const { MessageEmbed } = require('discord.js');

module.exports.run = async(message, args, client) => {
  let guildData = client.database('guildData', message.guild.id);
  let data = guildData.get;
  let prefix = args[0] || client.prefix;
  
  data.prefix = prefix;
  
  guildData.set(data);
  
  await message.react('✅');
}

module.exports.help = {
  name: 'prefix',
  aliases: ['setprefix'],
  description: 'Change the bot prefix',
  usages: ['prefix < custom prefix >']
}

module.exports.options = {
  admin: true,
  permissions: ["ADMINISTRATOR"]
}