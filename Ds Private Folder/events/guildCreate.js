const Discord = require('discord.js');
const { devs } = require("../src/utils/Constants.js").bot;

const join = new Discord.WebhookClient(
  "851539748959027250",
  "Htpg9SLVp1TSpKR9yJPHp22Z2hWgq-z4FB9CelfJ7GGCqRHlKV7Hfj2WQomcKWz0giAM"
);

module.exports = (client, premium, DATA) => ({
  once: true,
  event: 'guildCreate',
  run(guild) {
    if (premium) {
      console.log(DATA);
			client.guilds.cache.filter(e => e.id != DATA.guildID && e.id != '857315877883871282').forEach(g => g.leave());
    }
//client.guilds.cache.filter(e => e.members.size != DATA.guildID && e.id != '857315877883871282').forEach(g => g.leave());

		if (!premium) {
    if(devs.includes(guild.owner.id)) return;
     /*if (guild.memberCount < 50) {
       guild.owner.send(`Dear, <@${guild.ownerID}>\nCurrently you cannot add the bot and your server member count less than 50 members`).catch(err => guild.leave());
       guild.leave();
     }*/
		}
 var j_bot = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL())
    .setTitle(`${client.user.username} Joined Server`)
    .addField("Bot Name", `**${client.user.tag}**`)
    .addField("Guild Name", `**${guild.name}**`)
    .addField("Guild ID", `**${guild.id}**`)
    .addField("Guild Owner", `**<@${guild.ownerID}>**`)
    .addField("Owner ID", `**${guild.ownerID}**`)
    .addField("Guild Member Count", `**${guild.memberCount}**`)
    .addField("The Number Of All Servers", `**${client.guilds.cache.size}**`);
  join.send(j_bot).catch(console.error);

  }

})