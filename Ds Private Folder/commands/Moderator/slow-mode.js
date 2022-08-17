const { MessageEmbed } = require('discord.js');
const { bot } = require("../../src/utils/Constants.js");
require('discord-reply');

var slowmode = true;

module.exports.run = async(message, args, client, locale) => {
      const amount = parseInt(args[0]);
     let embed = new MessageEmbed()
        
      if (isNaN(amount))
        return message.lineReplyNoMention(locale.reply);
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.lineReplyNoMention(locale.reply1.replace('{amount}', amount));
        return;
      } else {
        message.lineReplyNoMention(locale.reply2.replace('{amount}', amount));
        return;
      }
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.lineReplyNoMention(locale.reply3.replace('{amount}', amount));
        return;
      } else {
        message.lineReplyNoMention(locale.reply4.replace('{amount}', amount));

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.lineReplyNoMention(locale.reply5.replace('{amount}', amount));
        return;
      } else {
        message.lineReplyNoMention(locale.reply6.replace('{amount}', amount));
        return;
      }
    } else {
     message.lineReplyNoMention(locale.reply7);
    }
   
}

module.exports.help = {
  name: 'slowmode',
  description: 'Add Slomode in the channel'
}

module.exports.options = {
  admin: true,
  permissions: ['MANAGE_CHANNELS']
}