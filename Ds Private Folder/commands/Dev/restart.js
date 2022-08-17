const { MessageEmbed } = require('discord.js');
require('discord-reply');

module.exports.run = async(message, args, client) => {
  
  await message.channel.send('Success!');
  
  process.exit(1);

}

module.exports.help = {
  name: 'restart',
  description: "Restart DolahBot",
}
module.exports.options = {
  owner: true
};