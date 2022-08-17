const { MessageEmbed } = require('discord.js');
module.exports.run = async(message, args, client, locale) => {
  const welcData = client.database('welcomeData', message.guild.id, { guildID: message.guild.id, welcomeChannel: null,
    AutoRoles: [], toggle: 'off', log: { channel: null, toggle: 'off' } });
  const data = welcData.get;

  if (args[0].toLowerCase() == 'channel') {
    let channel = message.guild.channels.cache.get((args[1] || '').toChId());
    
    if (!channel) return message.channel.send(locale.reply);
    
    if (channel.id == data.welcomeChannel) return message.channel.send(locale.reply1);
    
    data.welcomeChannel = channel.id;
  } else if (args[0].toLowerCase() == 'toggle') {
    if (!args[1] || !['on', 'off'].includes(args[1].toLowerCase())) return message.channel.send(locale.reply2);
     data.toggle = args[1].toLowerCase();
  
}
    welcData.set(data);
    message.channel.send(locale.reply3);
}

module.exports.help = {
  name: 'welcome',
  description: 'Change the welcome settings',
}

module.exports.options = {
  admin: true,
  permissions: ['ADMINISTRATOR']
}