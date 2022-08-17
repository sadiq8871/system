const Discord = require('discord.js');
require('discord-reply');
const premium = require("../../src/utils/Constants.js").bot.logs;

module.exports.run = async(message, args, client, locale) => {

 const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);

  const data = premiums.get;
  data.bots = data.bots || [];
 let Bots = data.bots.map((x, i) => ({...x,i}));
 let find = Bots.filter(e => e.clientID == client.user.id)[0];
 if(find.sold === false) return message.lineReplyNoMention(locale.reply);
 let owner = find.owner;


if(!find) return message.lineReplyNoMention(locale.reply1);


if(owner !== message.author.id) return message.lineReplyNoMention(locale.reply2);
  
   client.user.setActivity(args.join(" "), { type: "STREAMING", url: "https://www.twitch.tv/iLeon_1" })
  
    message.react('✅').catch(err => {
    console.log(err)
    })
  
}

module.exports.help = {
  name: 'set-streaming',
  premium: true
}
module.exports.options = {
  admin: true,
  permissions: ['ADMINISTRATOR']
}