const Discord = require('discord.js');
require('discord-reply');
const humanizeDuration1 = require('humanize-duration');
const premium = require("../../src/utils/Constants.js").bot.logs;

module.exports.run = async(message, args, client, locale) => {
 const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);
  const data = premiums.get;
  data.bots = data.bots || [];
 let find = data.bots.filter(e => e.clientID == client.user.id)[0];
 if(find.sold === false) return message.lineReplyNoMention(locale.reply);
 let guild = client.guilds.cache.filter(e => e.id != '857315877883871282').get(find.guildID);
 let owner = client.users.cache.get(find.owner);
 if(!owner) owner = "None"
 if(guild) guild = guild.name;
 if(!guild) guild = "None";

if(find.time === null) find.time = "None"

if(find.time > 0) find.time = humanizeDuration1(find.time - (Date.now() - find.now),{ units: ['mo','d','h','m','s'], round: true })

message.lineReplyNoMention(locale.reply1.replace('{time}', find.time).replace('{client.user.username}', client.user.tag).replace('{find.clientID}', find.clientID).replace('{guild.name}', guild).replace('{owner}', owner.tag))
  
}

module.exports.help = {
  name: 'vip',
  description: "Info Premium Bot.",
  premium: true
}
module.exports.options = {
  admin: true,
  permissions: ['ADMINISTRATOR']
}