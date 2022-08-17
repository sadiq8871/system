const { MessageEmbed } = require('discord.js');

require('discord-reply');
const { done, err } = require("../../src/utils/Constants.js").bot.emojis;
const premium = require("../../src/utils/Constants.js").bot.log;

module.exports.run = async(message, args, client) => {
var log = client.channels.cache.get(premium);
  let number = args[0];
  const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);

  const data = premiums.get;
  data.bots = data.bots || [];

if(args[0] === 'all') {

if(!premiums) return message.lineReplyNoMention(`**${err} - Premium bots have not been added**`);

premiums.delete();
return message.lineReplyNoMention(`**${done} - The Premium bots has been successfully deleted**`);
  
let embed1 = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Adding Premium DolahBot : ${client.user.username}`)
		.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Premium Bot : __${number}__`)
if(log) log.send(embed1);

  process.exit(1);
  console.log(data);

}



if(args[0] !== 'all') {

let Bots = data.bots.map((x, i) => ({...x,i}));
let find = Bots.filter(e => e.number == number)[0];
if(!find) return message.lineReplyNoMention(`**${err} - I can't find the bot.**`);
if(find.sold === true) { 
var msg = await message.lineReplyNoMention('**؛هل انت متآكد من حذف البوت وهو مستخدم ؟ \n yes / no [y,n]**');


  message.channel.awaitMessages(c => c.author.id === message.author.id, {
    time: 25000,
    errors: ['time'],
    max: 1
  }).then(collector => {
    var Message = collector.first();
    var c = Message.content.toLowerCase().trim();
    
    if (c === 'y' || c === 'yes'){
      Message.delete();
       let formatter = {
      free: null,
      '5m': 1000 * 60 * 5,
      '1w': 1000 * 60 * 60 * 24 * 7,
      '1mo': 1000 * 60 * 60 * 24 * 30
    }
       
       data.bots.splice(find.i, 1);
      
      premiums.set(data);
let embed1 = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Adding Premium DolahBot : ${client.user.username}`)
		.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Premium Bot : __${number}__`)
if(log) log.send(embed1);


       msg.edit(`**${done} - The bot has been successfully deleted**`);
     process.exit(1);
    } else {
      msg.delete();
    }
  }).catch(() => {
    msg.delete();
  });
return;
}


}



}

module.exports.help = {
  name: 'delete-bot',
  description: "Delete Premium Bots",
  usages: ["delete-bot Number","delete-bot all"],
  args: true
};


module.exports.options = {
  owner: true
};