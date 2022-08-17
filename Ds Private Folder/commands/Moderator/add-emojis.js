const { MessageEmbed } = require('discord.js');
const { emojis } = require("../../src/utils/Constants.js").bot;
const moment = require("moment");
require('discord-reply');

module.exports.run = async (message, args, client, locale) => {
  var emojiss = args.join(" ").split(" ");
let Number = Math.floor(Math.random() * 200) - 1;
if(!emojiss) return message.channel.send(locale.reply);
  var array = [];
  for (var emoji of emojiss) {
    emoji = emoji.toString();
    if (isNaN(emoji)) {
      emoji = emoji.replace(/\ /g, "").replace(/\>/g, "").replace(/\</g, "").replace(/[A-z]/g, "");
      let ch = emoji.split(":");
      emoji = ch[ch.length - 1];
    }
    var emojisArray = [];
    if (!isNaN(emoji) && emoji.length === 18) {
      array.push(emoji);
    }
  }
  for (let i = 0; i <= array.length - 1; i++) {
    try {
      var em = await message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${array[i].toString()}.gif`, `emoji${Number}`);
      emojisArray.push(em);
    } catch (err) {
      var e = await message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${array[i].toString()}.png`, `emoji${Number}`);
      emojisArray.push(e);
    }
  }
  if (emojisArray[0] === undefined) return message.channel.send(locale.reply1)
  var gif = emojisArray.filter(e => e.animated);
  var def = emojisArray.filter(e => !e.animated);
  var embed = new MessageEmbed()
    .setColor("#07c5ad")
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }));
  if (gif.length) embed.addField(locale.reply2, locale.reply3.replace('{gif}', gif.join(" ")));
  if (def.length) embed.addField(locale.reply4, locale.reply5.replace('{still}', def.join(" ")));
  embed.addField(locale.reply6, locale.reply7.replace('{by}', message.author.id))
  embed.setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL({ dynamic: true }));
  message.channel.send(embed);
};

module.exports.help = {
  name: "addemoji",
  aliases: ['addem','stealemoji'],
  description: "Add emoji in Your server !",
  usage: ["addemoji (emojis separated by space)"],
  args: true
};

module.exports.options = {
  admin: true,
  permissions: ['MANAGE_EMOJIS']
}