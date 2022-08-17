const Discord = require('discord.js');
require('discord-reply');
const devs = require("../../src/utils/Constants.js").bot;

module.exports.run = async(message, args, client) => {
 var dev = ["467394732042092544", "852984434316148776","450648270159609856", "713207310121435187"]
if (!dev.includes(message.author.id)) return;

    if(!args.length) return message.lineReplyNoMention('حط اي رسالة !');

 client.user.setPresence({ 
    status: "online",
     activity: {
	         name:args.join(" "),
	         type: "PLAYING",
	    }
 })
  
  message.react('✅');
  
}

module.exports.help = {
  name: 'set-game'
}
module.exports.options = {
  owner: true
};