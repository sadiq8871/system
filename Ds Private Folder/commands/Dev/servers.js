const { MessageEmbed } = require('discord.js');
require('discord-reply');
const { emojis, devs, Dashboard, support, invite } = require("../../src/utils/Constants.js").bot;
module.exports.run = async(message, args, client) => {
    if (!devs.includes(message.author.id)) return;

  var ms = client.ws.ping;
  let embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${emojis.ping} | Servers: \`${client.guilds.cache.size}\`
${emojis.Other}| Other: [Dashboard](${Dashboard}) | [Support](${support}) | [Invite](${invite})
**`)
  var msg = await message.channel.send(embed);
  msg.react(emojis.ping);   
      
    }



module.exports.help = {
  name: 'servers',
  description: "Server Count Bot",
}
module.exports.options = {
  owner: true
};