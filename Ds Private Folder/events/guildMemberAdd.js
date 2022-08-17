const { MessageEmbed } = require('discord.js');

module.exports = (client, premium, DATA) => ({
  once: true,
  event: "guildMemberAdd",
  run(member) {

    const guild = member.guild;
    const welcData = client.database('welcomeData', guild.id, { guildID: guild.id, welcomeChannel: null, AutoRoles: [], toggle: 'off', log: { channel: null, toggle: 'off' } });
    const embed = new MessageEmbed()
    .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
    .setTitle(`**Member joined**`)
    .setDescription(`**Welcome To \`${guild.name}\`** \n**User: ${member}**\n**Member Count: \`#${guild.memberCount}\`**`)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .setColor("RANDOM");
    
    let data = welcData.get;
    let channel = guild.channels.cache.get(data.welcomeChannel);
    
    if (channel && data.toggle == 'on') channel.send(embed);
    
  // let logChannel = guild.channels.cache.get(data.log && data.log.channel);
    
 //   if (logChannel && data.log.toggle == 'on') channel.send(embed);
    
    let rolesAut = data.AutoRoles.map(e => guild.roles.cache.get(e));
    rolesAut.filter(e => e).forEach(x => member.roles.add(x));
    return !0;
}});