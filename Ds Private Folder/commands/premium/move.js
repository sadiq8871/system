const { MessageEmbed } = require('discord.js');
require('discord-reply');
const premium = require("../../src/utils/Constants.js").bot.logs;

module.exports.run = async(message, args, client, locale) => {
var log = client.channels.cache.get(premium);
var guild = args[0]; 
 const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);

  const data = premiums.get;
  data.bots = data.bots || [];
 let Bots = data.bots.map((x, i) => ({...x,i}));
 let find = Bots.filter(e => e.clientID == client.user.id)[0];
 if(!find.sold) return message.lineReplyNoMention(locale.reply);
 let bot = message.guild.members.cache.get(find.clientID);
 let owner = find.owner;


if(!guild) return message.lineReplyNoMention(locale.reply2);

if(!find) return message.lineReplyNoMention(locale.reply3);


if(owner !== message.author.id) return message.lineReplyNoMention(locale.reply4);

data.bots[find.i].guildID = guild;

premiums.set(data);



 message.lineReplyNoMention(locale.reply5.replace('{botid}', bot.id).replace('{guild}', guild));

 let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Moved For : ${bot.username}`)
		.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Number : __${find.number}__
Premium Bot : __${bot.username}__
Owner Bot : __${owner}__**`);
if(log) log.send(embed);
  
}

module.exports.help = {
  name: 'move',
  description: "Moved Premium Bot.",
  args: true,
  premium: true
}
module.exports.options = {};