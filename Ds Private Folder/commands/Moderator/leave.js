const Discord = require("discord.js");
require("discord-reply");
const {MessageEmbed} = require("discord.js");

module.exports.run = async(message, args, client, locale) => {
  
  var voice = message.member.voice.channel
    //if(!voice && voice.type === "text") return message.lineReplyNoMention(locale.reply.replace('', ''));
   if(!voice) return message.lineReplyNoMention(locale.reply);
   if(!voice) voice =  message.guild.me.voice.channel;
   voice.leave()
   message.react("✅").catch(err => {
     console.log(err)
   })
}

module.exports.help = {
  name: 'leave',
  description: 'leave Bot Form Voice Channel'
}

module.exports.options = {
  admin: true,
  permissions: ['ADMINISTRATOR']
}