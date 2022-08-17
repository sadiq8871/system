const Discord = require('discord.js');
const bot = require("../src/utils/Constants.js").bot;

const leave = new Discord.WebhookClient(
  "851542750083940412",
  "ERV-S3Cjrm8Dfvlb72Kr6iVbzhAwBbCFUz0MeTOkFzjwT2f2s-E3c75TOtlKnJtoVf71"
);

module.exports = (client, premium, DATA) => ({
  once: true,
  event: 'guildDelete',
  run(guild) {

 var l_bot = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL())
    .setTitle(`${client.user.username} Leave Server`)
    .addField("Bot Name", `**${client.user.tag}**`)
    .addField("Guild Name", `**${guild.name}**`)
    .addField("Guild ID", `**${guild.id}**`)
    .addField("Guild Owner", `**<@${guild.ownerID}>**`)
    .addField("Owner ID", `**${guild.ownerID}**`)
    .addField("Guild Member Count", `**${guild.memberCount}**`)
    .addField("The Number Of All Servers", `**${client.guilds.cache.size}**`);
  leave.send(l_bot).catch(console.error);

  }

})