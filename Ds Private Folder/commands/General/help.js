const { MessageEmbed } = require('discord.js');
const { emojis, support, Dashboard, invite, devs} = require("../../src/utils/Constants.js").bot;
require('discord-reply');
/////////////////
var help = true;
module.exports.run = async(message, args, client, locale, prefix) => {
  let help1 = new MessageEmbed()
  if(!help) return;
 

 if (args.length) {
    var command = client.commands.get(args[0].toLowerCase()) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.lineReplyNoMention("Not Found");
    

    
    
    let embed = new MessageEmbed()
    .setTitle("**Command: " + command.help.name + "**")
    .setDescription(`${command.help.description || "None"}`)
    if (command.help.aliases) embed.addField(`**Command Shortcut :**`, prefix + command.help.aliases.join(', ' + prefix));
    if (command.help.usage) embed.addField('**Explained Command:**',prefix + command.help.usage.join("\n" + prefix) );
    if(command.help.Examples) embed.addField('**Examples of the command:**', prefix + command.help.Examples.join("\n" + prefix) )
    .setFooter(`By: ${message.author.tag}`,message.author.avatarURL())

 message.lineReplyNoMention(embed);
    return;
  }
  
  
     
  
  
  
//${prefix}blacklist | \`لسجن العضو\`		
    let embed = new MessageEmbed()
    .setColor("#07c5ad")
		.setTitle(`Welcome To Help List For ${client.user.username}`)
		.setAuthor(client.user.username, client.user.avatarURL())
    .setFooter(`- Requested By: ${message.author.username}`,message.author.avatarURL({ dynamic: true }))
		.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`My Prefix In **${message.guild.name}** Is \`${prefix}\``)
    .addField("**<:DolahMembers:884134166206246982> | General Commands**", [
      `> **${prefix}help <cmd> \`Information about bot commands\`**`,
      `> **${prefix}bot \`Complete information about the Bot\`**`,
      `> **${prefix}user \`Show your account information\`**`,
      `> **${prefix}avatar \`Show avatar usre\`**`,
      `> **${prefix}avatar-server \`Show avatar server\`**`,
      `> **${prefix}ping \`Show Ping Bot\`**`,
      `> **${prefix}server \`Server Information\`**`,
      `> **${prefix}invite \`Add bot in your server\`**`])
    /*
      `> **${prefix}roll \`Random Number\`**`,
      `> **${prefix}money \`Know your account balance\`**`,
      `> **${prefix}top \`Knowing high balances\`**`,
      `> **${prefix}pay \`Transfer credit to another account\`**`,
      `> **${prefix}deposit \`Deposit the balance to the card\`**`,
      `> **${prefix}withdrawal \`Withdrawing the balance from the card\`**`])*/

    .addField("**<:DolahBotsitting:885209205689176135> | Moderation**", [
      `> **${prefix}info \`Learn about the specific records and roles in the site\`**`,
      `> **${prefix}prefix \`Change The Prefix In Your Server\`**`,
      `> **${prefix}setlang \`Change The Language In Your Server\`**`,
      `> **${prefix}slowmode \`Set slowmode\`**`,
      `> **${prefix}join \`The Bot enters the voice channel\`**`,
      `> **${prefix}leave \`The Bot exits the voice channel\`**`,
      `> **${prefix}role \`Add \ remove a role from the user\`**`,
      `> **${prefix}nick \`Put a member alias on your server\`**`,
      `> **${prefix}blacklist \`Blacklist of members\`**`])
    /*
      `> **${prefix}reset-money \`Reset all balance from member \ role \ everyone\`**`,
      `> **${prefix}remove-money \`remove all balance from member \ role \ everyone\`**`,
      `> **${prefix}add-money \`Add money to the member / role / everyone\`**`])*/
    
    .addField(`**<:DolahBotOther:884134141229166663> Other**`, [
      `> **- [Dashboard](${Dashboard})**\n > **- [Support](${support})**\n > **- [Invite Bot](${invite})**`
    ])
    message.author.send(`<@${message.author.id}>`, embed)
    message.react("<:DolahBot:887392070619246613>")
    message.lineReplyNoMention(`Check Your **DM** \n<@${message.author.id}>`)

}

module.exports.help = {
  name: 'help',
  description: 'Show All Commands Bot',
  cooldown: 10
}
module.exports.options = {};
