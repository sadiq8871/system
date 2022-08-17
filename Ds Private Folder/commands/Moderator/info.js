const { MessageEmbed } = require('discord.js');
require('discord-reply');
var info = true;
module.exports.run = async(message, args, client) => {
  const guildData = client.database('guildData', message.guild.id);
  const data = guildData.get;

  const AvatarData = client.database('AvatarData', message.guild.id, {
    guildID: message.guild.id,
    boys_gif: {
      toggle: 'off',
      channel: null
    },
    boys_png: {
      toggle: 'off',
      channel: null
    },
    girls_gif: {
      toggle: 'off',
      channel: null
    },
    girls_png: {
      toggle: 'off',
      channel: null
    },
    boys_wb: {
      toggle: 'off',
      channel: null
    },
    girls_wb: {
      toggle: 'off',
      channel: null
    }
  }, !0);
  
  const welcomeData = client.database('welcomeData', message.guild.id, {
    guildID: message.guild.id,
    welcomeChannel: null,
    AutoRoles: [],
    toggle: 'off',
    log: {
      channel: null,
      toggle: 'off'
    }
  });

  const BankData = client.database('BankData', message.guild.id, {
        guildID: message.guild.id,
        adminsBank: [],
        money: null,
        log: {
          toggle: 'off',
          channel: null
        }
      }, !0);
  //BankData
  let { welcomeChannel, AutoRoles, toggle, log: log_welcome } = welcomeData.get;
  let { enableRoles, adminRoles, log_enable } = AvatarData.get;
  let { adminsBank, money, log_bank } = BankData.get;
  
  var embed = new MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .addField('**Language:**', data.language.toUpperCase())
  .addField('**Welcome Channel:**', `${welcomeChannel ? `<#${welcomeChannel}>` : 'Nothing'}`)
  .addField('**Auto Roles:**', AutoRoles.length ? AutoRoles.splice(0, 5).map((x,i) => `${i + 1} - <@&${x}>`).join('\n') : 'Nothing')
  .addField('**Admins Roles:**', adminRoles.length ? adminRoles.splice(0, 5).map((x,i) => `${i + 1} - <@&${x}>`).join('\n') : `Nothing`)
  .addField('**Members Roles:**', enableRoles.length ? enableRoles.splice(0, 5).map((x,i) => `${i + 1} - <@&${x}>`).join('\n') : `Nothing`)
  .addField('**Admins Bank:**', adminsBank.length ? adminsBank.splice(0, 5).map((x,i) => `${i + 1} - <@&${x}>`).join('\n') : `Nothing`)  
  .addField('**Auto Money:**', money || `Nothing`)
  
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL())
  
  message.lineReplyNoMention(embed);


}

module.exports.help = {
  name: 'info',
  description: 'Show The bot settings info In Your Server',
  usages: ['info']
}


module.exports.options = {
  admin: true,
  permissions: ['ADMINISTRATOR']
};