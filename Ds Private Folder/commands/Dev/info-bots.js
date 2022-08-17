const { MessageEmbed } = require('discord.js');
const humanizeDuration1 = require('humanize-duration');

require('discord-reply');
const { err } = require("../../src/utils/Constants.js").bot.emojis;
const premium = require("../../src/utils/Constants.js").bot.log;

module.exports.run = async(message, args, client, locale) => {
  const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);

  const data = premiums.get;
  data.bots = data.bots || [];
//if(r.time === null) r.time = "None"

//if(r.time > 0) humanizeDuration1(r.time - (Date.now() - r.now),{ units: ['mo','d','h','m','s'], round: true })
if(!args[0]) {
//let all = data.bots.sort((a,b) => b.number - a.number).map((r, i) => `#${i + 1} | **${r.number}** - <@${r.clientID}> - Sold : **${r.sold}**`).join("\n\n");
let all = data.bots.map((r, i) => `#${i + 1} | **${r.number}** - <@${r.clientID}> - Sold : **${r.sold}**`).join("\n\n");

 let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Info Premium Bots`)
		.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
    .setDescription(all || `**${err} - Premium bots have not been added**`);


message.lineReplyNoMention(embed)
}
if(args[0]) {

let Bots = data.bots.map((x, i) => ({...x,i}));
let find = Bots.filter(e => e.number == args[0])[0];
if(!find) return message.lineReplyNoMention(`**${err} - I can't find the bot.**`);

if(find.guildID === '857315877883871282') find.guildID = "None";

if(find.owner === '852984434316148776') find.owner = "None"

if(find.owner > 0) find.owner = `<@${find.owner}>`

if(find.time === null) find.time = "None";

if(find.time > 0) find.time = humanizeDuration1(find.time - (Date.now() - find.now),{ units: ['mo','d','h','m','s'], round: true })


 let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Info Premium Bots`)
		.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
    .setDescription(`**${find.number}** - <@${find.clientID}>
Sold : **${find.sold}**
Time : **${find.time}**
Owner : **${find.owner}**
Guild ID : **${find.guildID}**`);



message.lineReplyNoMention(embed)
}
}




module.exports.help = {
  name: 'info-bots',
  description: "Info Premium Bots",
}
module.exports.options = {
  owner: true
};