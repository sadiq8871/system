 const { MessageEmbed } = require("discord.js");
const lineReplyNoMention = require('discord-reply');

module.exports.run = async (message, args, client) => {
  let error = new MessageEmbed()
	.setTitle('**<a:DOLAH:857616782960230460> | تنبية | <a:DOLAH:857616782960230460>**')
  .setColor('RANDOM')
  .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL({ dynamic: true }));

    let data = client.database(
    "blacklistData",
    message.guild.id,
    {
        guildID: message.guild.id,
        blacklistRoles: [],
        message: `**عزيزي العضو : [user]
لقد تم سجنك في سيرفر : [server]
تم سجنك من قبل : [admin]**`,
        log: {
          toggle: 'off',
          channel: null
        }
      }, !0).get;
  let admins = client.database(
    "enableData",
    message.guild.id,
    {
      guildID: message.guild.id,
      enableRoles: [],
      adminRoles: [],
      channel: null,
      log: {
        toggle: "off",
        channel: null
      }
    },
    !0
  ).get;


  var adminsRoles = admins.adminRoles.map(e => message.guild.roles.cache.get(e)).filter(e => e);
  if (!adminsRoles.length && message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("**الرتب غير صالحة!**");
  if (!adminsRoles.filter(e => message.member.roles.cache.has(e.id)).length && !message.member.hasPermission("MANAGE_ROLES")) 
  return message.channel.send('** You dont have permissions **')

    let [, ...name] = args;

  var user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!user)
    return message.lineReply(
      error.setDescription("**لم أتمكن من أيجاد هذا العضو!**")
    );
  if (user.id == message.author.id)
    return message.lineReply(
      error.setDescription("**لايمكنك سجن نفسك!**")
    );
  if (user.user.bot)
    return message.lineReply(error.setDescription("**لايمكنك سجن بوت!**"));
  var MemberRoles = data.blacklistRoles.map(e => message.guild.roles.cache.get(e)).filter(e => e);
  if (!MemberRoles.length)
    return message.lineReply(error.setDescription("**الرتب غير صالحة!**"));
  var isMember = true;
  var isadmin = true;
  MemberRoles.forEach(role => {
    if (user.roles.cache.has(role.id)) isMember = false;
  });
  if (!isMember)
    return message.lineReplyNoMention(
      error.setDescription("**تم سجنه سابقاً بلفعل!**")
    );

  adminsRoles.forEach(r => {
    if (user.roles.cache.has(r.id)) isadmin = false;
  });

  if (!isadmin)
    return message.lineReplyNoMention(
      error.setDescription("**العضو من طاقم الاداري !**")
    );

  if (message.guild.member(user).hasPermission("MANAGE_ROLES"))
    return message.lineReplyNoMention(
      error.setDescription("**العضو من طاقم الاداري !**")
    );

  if (!user.manageable)
    return message.lineReplyNoMention(
      error.setDescription("**ليس لدي صلاحيات كافية لاتمام السجن .**")
    );

  user.roles.set([]).then(r => {
    MemberRoles.forEach(role => {
      user.roles.add(role);
    });
  });
  message.lineReplyNoMention(
    new MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setDescription(`✽ - **تم سجنه بنجاح !.**`)
      .addField("**العضو**", `${user}`)
  );

  if (name) user.setNickname(name.join(" "));

  user.send(data.message
            .replace(/\[user\]/g, user)
            .replace(/\[server\]/g, message.guild.name)
            .replace(/\[admin\]/g, message.author.toString()));

  let sendlog = new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setTitle("تم سجن عضو !.")
    .addField("العضو:", "**" + user.user.tag + " | <@" + user.id + ">**")
    .addField("الاسم:", `**\`${name.join(" ") || "لم يتم اضافة للعضو اسم"}\`**`)
    .addField(
      "بواسطة:",
      "**<@" + message.author.id + ">**"
    )
    .setThumbnail(client.user.avatarURL())
    .setTimestamp();
 var channel = message.guild.channels.cache.get(data.log.channel);
 if (channel && data.log.toggle == "on") {
        channel.createWebhook( message.guild.member(client.user).nickname ? message.guild.member(client.user).nickname  : client.user.username, { avatar: client.user.avatarURL()}).then( async  hook=>{

       await hook.send(sendlog);
       await hook.delete();

});
  }
};

module.exports.help = {
  name: "blacklist",
  description: "سجن الأعضاء .",
  aliases: ["سجن"],
  usage: ["blacklist (user)", "blacklist (user) (nickname)"],
  cooldown: 10
};
module.exports.options = {
  checkRoles: true,
  admin: true,
  permissions: ["MANAGE_ROLES"]
};