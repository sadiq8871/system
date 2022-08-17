const { MessageEmbed } = require('discord.js');
var lang = ['ar','en']
module.exports.run = async(message, args, client) => {
  let guildData = client.database('guildData', message.guild.id);
  let data = guildData.get;
  let language = args[0] || client.language;
  if(!lang.includes(args[0])) 
  return;
  data.language = language;
  
  guildData.set(data);
  
  await message.react('✅');
}

module.exports.help = {
  name: 'setlang',
  args: true,
  description: 'Change the bot language',
  usages: ['setlang ar/en']
}
module.exports.options = {
  admin: true,
  permissions: ["ADMINISTRATOR"]
}