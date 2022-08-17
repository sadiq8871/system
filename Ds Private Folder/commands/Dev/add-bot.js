const { MessageEmbed } = require('discord.js');


require('discord-reply');
const { logs, emojis }= require("../../src/utils/Constants.js").bot;

module.exports.run = async(message, args, client, locale) => {
var log = client.channels.cache.get(logs.premium);
  let number = args[0],
      guild_id = '857315877883871282',
      bot_token = args[1],
      owner_id = '852984434316148776',
      bot_id = args[2],
      endtime = "None";
  const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);


  const data = premiums.get;
  data.bots = data.bots || [];

let Bots = data.bots.map((x, i) => ({...x,i}));
let find = Bots.filter(e => e.number == args[0] || e.token == args[1])[0];
if(find) return message.lineReplyNoMention(locale.reply);

  let formatter = {
      free: null,
      '5m': 1000 * 60 * 5,
      '1w': 1000 * 60 * 60 * 24 * 7,
      '1mo': 1000 * 60 * 60 * 24 * 30
    }
  
  data.bots.push({
    number: number,
    sold: false,
    owner: owner_id,
    token: bot_token,
    guildID: '857315877883871282',
    clientID: bot_id,
    time: null,
    now: Date.now()
  });
 
  premiums.set(data);
  

 let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Done Adding Premium Bot : ${client.user.username}`)
		.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Number : __${number}__
Bot: __<@${bot_id}>__
Token : __ ${bot_token}__
ID : __${bot_id}__
Guild ID : __${guild_id}__
Time : ${endtime}**`);

await message.lineReplyNoMention(`<@${bot_id}>`,embed);
  

let embed1 = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Adding Premium DolahBot : ${client.user.username}`)
		.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Number : __${number}__
Bot: __<@${bot_id}>__
Token : __${bot_token}__
ID : __${bot_id}__
Guild ID : __${guild_id}__
Time : ${endtime}**`);
if(log) log.send(`<@${bot_id}>`,embed1);

  
setTimeout(() => {
     process.exit(1);
  }, 5000);
  console.log(data);

}

module.exports.help = {
  name: 'add-bot',
  description: "Add Premium DolahBot",
  usages: ["add-bot Number / token / bot id"],
  args: true
};
module.exports.options = {
  owner: true
};