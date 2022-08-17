const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const inlinereply = require('discord-reply');

module.exports.run = async (message, args, client, locale) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return;

    if (user.id === message.member.id) return message.lineReplyNoMention(locale.reply)
    if (message.member.roles.highest.position <= user.roles.highest.position) return message.lineReplyNoMention(locale.reply1)
    user.kick()
    message.lineReplyNoMention(locale.reply2.replace("{user.user.tag}", user.user.tag)).catch(err => {
        console.log(err)
    })
}

module.exports.help = {
  name: "kick",
  description: "Kick User Form Your Server",
    args: true,
    cooldown: 15,
  Examples: [
    "kick (user)",
    "kick (userid)",
    "kick (user) Share",
    "kick (userid) Share",
  ]
}

module.exports.options = {
    admin: true,
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"]
};



