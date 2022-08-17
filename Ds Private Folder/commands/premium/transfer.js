const { MessageEmbed } = require('discord.js');
require('discord-reply');
const premium = require("../../src/utils/Constants.js").bot.logs;

module.exports.run = async(message, args, client, locale) => {
var log = client.channels.cache.get(premium);
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
   
 const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);

  const data = premiums.get;
  data.bots = data.bots || [];
 let Bots = data.bots.map((x, i) => ({...x,i}));
 let find = Bots.filter(e => e.clientID == client.user.id)[0];
 let owner = find.owner;
 if(owner !== message.author.id) return message.lineReplyNoMention(locale.reply);

 if(!user) return message.lineReplyNoMention(locale.reply1);

 if(owner !== message.author.id) return message.lineReplyNoMention(locale.reply);
var msg = await message.lineReplyNoMention('**اذا كنت متأكد من نقل ملكية البوت يرجى كتابة : \`confirm\`**');


  message.channel.awaitMessages(c => c.author.id === message.author.id, {
    time: 25000,
    errors: ['time'],
    max: 1
  }).then(collector => {
    var Message = collector.first();
    var c = Message.content.toLowerCase().trim();
    
    if (c === 'confirm'){
      Message.delete();
      data.bots[find.i].owner = user.id;

     premiums.set(data);


 let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Transferred OwnerShip For ${client.user.username}`)
		.setAuthor(user.username, user.avatarURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Premium Bot : __${client.user.username}__
From : __${owner}__
to : __${user}__**`);
log.send(embed);

       msg.edit(locale.reply2);
    } else {
      msg.delete();
    }
  }).catch(() => {
    msg.delete();
  });
return;
  
}

module.exports.help = {
  name: 'transfer',
  description: "Restart Premium Bot.",
  premium: true
}
module.exports.options = {
  admin: true,
  permissions: ['ADMINISTRATOR']
}