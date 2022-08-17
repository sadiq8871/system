const { MessageEmbed } = require('discord.js');
require('discord-reply');
const premium = require("../../src/utils/Constants.js").bot.log;
const supportid = require("../../src/utils/Constants.js").bot;
module.exports.run = async(message, args, client) => {
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
var log = client.channels.cache.get(premium);
  let number = args[0],
      endtime = args[2];
  const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);
  
  const data = premiums.get;
  data.bots = data.bots || [];
let Bots = data.bots.map((x, i) => ({...x,i}));
let find = Bots.filter(e => e.number == args[0])[0];
if(!find) return message.lineReplyNoMention('يتم يتم العثور على رقم البوت !');
if(find.sold === true) { 
var msg = await message.lineReplyNoMention('**؛هل انت متآكد من نقل الملكيه البوت لشخص آخر ؟ \n yes / no [y,n]**');


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
data.bots[find.i].owner = user.id;
data.bots[find.i].sold = true;
data.bots[find.i].time = formatter[endtime];
premiums.set(data);

       msg.edit(`**✅ - تم نقل الملكية بنجاح !**`);
    } else {
      msg.delete();
    }
  }).catch(() => {
    msg.delete();
  });
return;
}
  let formatter = {
      free: null,
      '5m': 1000 * 60 * 5,
      '1w': 1000 * 60 * 60 * 24 * 7,
      '1mo': 1000 * 60 * 60 * 24 * 30
    }
data.bots[find.i].owner = user.id;
data.bots[find.i].sold = true;
data.bots[find.i].time = formatter[endtime];

premiums.set(data);


  

 let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`انشاء بوت بريموم لـ ${user}`)
		.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription();
await message.lineReplyNoMention(`**عزيزي العضو تم اعطائك بريموم رقم : ${number}
يمكنك اضافة خادمك في الموقع بالذهاب الي الاشتراكات واختيار خادمك .
منشن البوت : <@${data.bots[find.i].clientID}>** \n شكرا لأختيارك دوله بوت <a:emoji141:887313838746243092>.`);
  
message.channel.send(`Done \n https://discord.com/oauth2/authorize?scope=bot&permissions=2147483647&client_id=${data.bots[find.i].clientID}`)
let embed1 = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Create a Premium bot For ${user}`)
		.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setDescription(`**Number : __${number}__
Bot : __<@${find.clientID}>__
to : __${user}__**`);
if(log) log.send(embed1);

  
  console.log(data);

}

module.exports.help = {
  name: 'add-premium',
  description: "Add Premium DolahBot",
  aliases: ["add-Premium"],
  usages: ["add-premium Number / owner / (5m / 1w / 1mo)"],
  args: true
};

module.exports.options = {
  owner: true
};