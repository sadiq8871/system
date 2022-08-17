const { MessageEmbed } = require('discord.js');
require('discord-reply');
var AVATAR = true;

module.exports.run = async(message, args, client) => {
 
 /*let help = new MessageEmbed()
 if(!AVATAR) return message.lineReplyNoMention(help.setDescription("**<a:DOLAH:857616788602880040> | الأمر خاضُع لصيانه .**"));*/
    if(args[0] === "server") {
    if(message.guild.iconURL() === null) return;
        const guild = message.guild;
        let embed = new MessageEmbed()
        .setTitle(`Avatar ${guild.name}`)
        .setColor('RANDOM')
        .setURL(guild.iconURL({ dynamic : true }))
        .setAuthor(guild.name , guild.iconURL({ dynamic: true }))
        .setImage(guild.iconURL({ dynamic : true, size: 4096 }))
        .setFooter(`By: ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true }))
            
        
        return message.lineReplyNoMention(embed)

    }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const avatar = member.user.displayAvatarURL({ dynamic: true, size: 4096 })
        let embed = new MessageEmbed()
            .setTitle(`Avatar ${member.user.tag}`)
            .setURL(avatar)
            .setAuthor(member.user.username, avatar)
            .setImage(avatar)
            .setColor("RANDOM")
            .setFooter(`- Requested By: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
        message.lineReplyNoMention(embed)
        
}


module.exports.help = {
  name: 'avatar',
  description: 'Show Avatar User/Server',
  usage: ['avatar server','avatar','avatar (user)']
}

module.exports.options = {};