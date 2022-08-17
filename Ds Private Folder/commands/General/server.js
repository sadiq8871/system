const { MessageEmbed } = require('discord.js');
require('discord-reply');
const moment = require('moment');
var server = true;
module.exports.run = async(message, args, client, locale) => {
  
  
  if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention("I don't Have a Permission")
  
     moment.locale(locale.lan);       
     message.channel.startTyping();
     message.channel.stopTyping();
  
       const region = message.guild.region
            .replace(`russia`, `Russia 🇷🇺`)
            .replace(`brazil`, `Brazil 🇧🇷`)
            .replace(`europe`, `Europe 🇪🇺`)
            .replace(`hongkong`, `HongKong 🇭🇰`)
            .replace(`india`, `India :flag_in:`)
            .replace(`japan`, `Japan :flag_jp:`)
            .replace(`singapore`, `Singapore :flag_sg:`)
            .replace(`southafrica`, `South Africa :flag_za:`)
            .replace(`us-central`, `United Stats - Central :flag_us:`)
            .replace(`us-east`, `United Stats - East :flag_us:`)
            .replace(`us-south`, `United Stats - South :flag_us:`)
            .replace(`us-west`, `United Stats - West :flag_us:`)
       //locale.reply.replace
      let embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setColor(message.member.displayHexColor || "#07c5ad")
			  .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`- Requested By: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
        .addField(locale.reply, [
          locale.reply1.replace('{name}', message.guild.name),
          locale.reply2.replace('{id}', message.guild.id),
          locale.reply3.replace('{owner}', message.guild.owner),
          locale.reply4.replace('{region}', region),
          locale.reply5.replace('{ceated}', `\`${moment(message.guild.createdTimestamp).format('LL')} \n${moment(message.guild.createdTimestamp).fromNow()}\``)])
        .addField(locale.reply6, [
          locale.reply7.replace('{total}', message.guild.memberCount),
          locale.reply8.replace('{online}', message.guild.members.cache.filter(c => c.presence.status !== "offline").size),
          locale.reply9.replace('{bots}', message.guild.members.cache.filter(member => member.user.bot).size),
          locale.reply10.replace('{afk}', message.guild.afkChannel || "Nothing"),
          locale.reply11.replace('{roles}', message.guild.roles.cache.size),
          locale.reply12.replace('{channels}', message.guild.channels.cache.size),
          locale.reply13.replace('{text}', message.guild.channels.cache.filter(m => m.type === "text").size),
          locale.reply14.replace('{voice}', message.guild.channels.cache.filter(m => m.type === "voice").size),
          locale.reply15.replace('{category}',message.guild.channels.cache.filter(m => m.type === "category").size),
          locale.reply16.replace('{verificationLevel}',message.guild.verificationLevel.replace(`NONE`, `Nothing`)),
          locale.reply17.replace('{Boosts}',message.guild.premiumSubscriptionCount)])
      message.lineReplyNoMention(embed);
  
}



module.exports.help = {
  name: 'server',
  description: 'Server info',
  cooldown: 15
}

module.exports.options = {};