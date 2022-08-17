const { Client, Collection, MessageEmbed } = require('discord.js');
const { bot, checkPremium } = require('../src/utils/Constants.js');
const Locales = require('../src/Locales');
require('discord-reply');
var devs = bot.devs;
module.exports = (client, premium, DATA) => ({
  once: true,
  event: "message",
  run(message) {
    if (message.author.bot || !message.guild) return;
    if (!checkPremium(client, premium, message)) return;
    const premiums = client.database('premiumData', 'premdata', {
      bots: [],
      toggle: true
    }, !0);

    const data = premiums.get;
    data.bots = data.bots || [];
    data.bots = data.bots.map(e => e);
    
    let guildData = client.database('guildData', message.guild.id, {
      prefix: bot.prefix,
      guildId: message.guild.id,
      language: bot.defaultLanguage
    }).get;
    if (!message.content.startsWith(guildData.prefix)) return;
    
    const args = message.content.slice(guildData.prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return;
    if (command.help.premium && !premium) return message.channel.send("**هذا الأمر للبريميوم فقط.**");
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention("I don't Have a Permission");
   let enableData = client.database('enableData', message.guild.id, {
      guildID: message.guild.id,
      enableRoles: [],
      adminRoles: [],
      channel: null,
      log: {
        toggle: 'off',
        channel: null
      }
    }, !0).get; 
    //enableData.adminRoles = enableData.adminRoles.map(e => message.guild.roles.cache.get(e)).filter(e => e);
    if (command.options.admin && !message.member.hasPermission(command.options.permissions)) 
    return message.lineReplyNoMention("** You dont have permissions **");

   if (command.options.owner && !devs.includes(message.author.id)) return;
 

    const embed = new MessageEmbed()
    .setTitle("**Command: " + command.help.name + "**")
    .setDescription(`${command.help.description}`)
    .setFooter(`- Requested By: ${message.author.tag}`, message.author.avatarURL());
    
    const Locale = Locales[guildData.language.toLowerCase()];
    
    if (command.help.aliases) embed.addField(`**Aliases :**`, guildData.prefix + command.help.aliases.join("," + guildData.prefix));
    if (command.help.usages) embed.addField("**Usage :**", `${guildData.prefix + command.help.usages.join("\n" + guildData.prefix)}`);
    if (command.help.Examples) embed.addField("**Examples :**", guildData.prefix + command.help.Examples.join("\n" + guildData.prefix).replace(/\(user\)/g ,`${message.author}`).replace(/\(userid\)/g ,`${message.author.id}`));
    if (command.help.args && !args.length) return message.channel.send(embed);
    command.run(message, args, client, Locale[command.help.name.toLowerCase()], guildData.prefix);
  }
});