const { Client } = require('discord.js');
const client = new Client();
const { MessageButton, MessageActionRow } = require("discord-buttons")
require("discord-buttons")(client);
const { bot } = require('./src/utils/Constants.js');
const DataBase = require("./src/managers/DataBaseCollector.js");

require("./src/managers/defineProperties");
const createCache = require('./src/utils/createCache');
const listener = require('./src/Events');
createCache(client, false);
const premiums = new DataBase('premiumData', 'premdata', {
  bots: [],
  toggle: true
}, !0).get;
setTimeout(() => {
if (premiums && premiums.bots) {
  premiums.bots.forEach(e => {
    let client_ = new Client();
    createCache(client_, true, e);
    client_.login(e.token)
  });
}
},1000);

client.on("message", message => {
  if(message.channel.id === "887392333186883674") {
  message.react("<:DolahBot:887392070619246613>")
}
})

/*client.on("message", message => {
  if(message.content === "1") {
  message.channel.send("https://media.discordapp.net/attachments/882721960436596737/884119560951857162/DolahBot_Rules.png?width=1440&height=274")
  message.channel.send(`>>> **Rules <:Rules:851980454193791007> 

1- Not to talk about political and religious matters inside the server
2 - No insult or slander
3 - Sarcasm, cursing and cursing are strictly prohibited
4 - Not mentioning the names of other robots
5 - Not to talk about sexual and pornographic matters
6- Do not send inappropriate photos
7 - It is forbidden to disturb officials with private messages
8 - It is forbidden to request administrative ranks or any second rank
8 - Your problems have absolutely nothing to do with us
10- Not mention the supervisors without reason
11 - If you have a problem or question about the bot, go to <#887390562297188352>  and mention
<@&881474453802987541> only once
12 - Respect for everyone is a duty**`)
  message.channel.send("https://media.discordapp.net/attachments/882721960436596737/884119622683615312/DolahBot_Line_.png?width=1440&height=67")
   message.channel.send(`>>> القوانين <:Rules:851980454193791007> 

1 - عدم التحدث بالأمور السياسية والدينية داخل السيرفر
2 - ممنوع السب والقذف
3 - ممنوع التلميح بالسب منعاً باتاً
4 - ممنوع ذكر اسماء بوتات اخرى
5 - عدم التحدث بالأمور الجنسية والإباحية
6- عدم إرسال صور مخلة للآداب
7 - ممنوع إزعاج الإداريين بالخاص
8 - ممنوع طلب رتب إدارية او اي رتبة ثانية
8 -مشاكلك الخاصة تكون خاصة السيرفر البوت والسبَورت مالهم علاقة
10 - ممنوع منشن الإدارة بدون سبب
11 - اذا كانت لديك مشكلة او إستفستار حول البوت توَجه لـ <#887390397402345532> ومنشن الـ <@&881474453802987541>  مره واحدة فقط
12 - الإحترام بين الجميع واجب`)
  message.channel.send("https://media.discordapp.net/attachments/882721960436596737/884119622683615312/DolahBot_Line_.png?width=1440&height=67")

}
})*/


client.on('message',message => {
  if(message.content === "MoHaToP") {
  message.delete();
  message.channel.send("https://media.discordapp.net/attachments/882721960436596737/884119622683615312/DolahBot_Line_.png?width=1440&height=67")
  message.channel.send('**<:DolahBot:887392070619246613> | ! جاري العمل على التحديث القادم**')
  message.channel.send("https://media.discordapp.net/attachments/882721960436596737/884119622683615312/DolahBot_Line_.png?width=1440&height=67")
  }
})

client.login(bot.token);