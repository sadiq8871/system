const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const inlinereply = require('discord-reply');

module.exports.run = async (message, args, client, locale) => {
    let getmember = true;
    const user = message.guild.members.cache.get((args[0] || '').toUserId());
    if(!user) getmember = false;
   if(!Number(args[0])) return message.lineReplyNoMention(`i'cant find \`${args[0]}\`.`);


    if(getmember) {
    if (user.id === message.member.id) return message.lineReplyNoMention(locale.reply);
    if(!user.manageable) return message.lineReplyNoMention(locale.reply1);
    if (message.member.roles.highest.position <= user.roles.highest.position) return message.lineReplyNoMention(locale.reply1);
      user.ban() 
     } 
    if(!getmember) {
    message.guild.members.ban(args[0]).then(member => {
    return message.lineReplyNoMention(locale.reply2.replace("{user.user.tag}", member.tag))
   }).catch(err => {
        message.lineReplyNoMention(`i'cant find \`${args[0]}\``),
        console.log(err)
    })
    return;
    }
    message.lineReplyNoMention(locale.reply2.replace("{user.user.tag}", user.user.tag)).catch(err => {
        message.lineReplyNoMention(`i'cant find \`${args[0]}\``),
        console.log(err)
    })
  
}


module.exports.help = {
  name: "ban",
    description: "Ban User Form Your Server",
    args: true,
    cooldown: 15,
    Examples: [
    "ban (user)",
    "ban (userid)",
    "ban (user) Share",
    "ban (userid) Share",
  ]
}

module.exports.options = {
    admin: true,
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"]
};
