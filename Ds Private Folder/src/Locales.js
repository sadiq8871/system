const { ping, bank, err, done} = require("../src/utils/Constants.js").bot.emojis;
const { MessageEmbed } = require('discord.js');
const humanizeDuration1 = require('humanize-duration');
let error = new MessageEmbed()

// سطور الترجمة جاهزة عشان مب كل شوي نكتبهم ونتعب سويتها جاهزه خلوها
/*money: {
    reply: ``,
    reply1: ``,
    reply2: ``,
    reply3: ``,
    reply4: ``,
    reply5: ``,
    reply6: ``,
    reply7: ``,
    reply8: ``,
    reply9: ``,
    reply10: ``,
    reply11: ``,
    reply12: ``,
    reply13: ``,
    reply14: ``,
    reply15: ``,
  }*/
  
module.exports.en = {
  vip: {
    reply: `**${err} The bot is Disabled.**`,
    reply1: `**Hey !
- Bot Name: \`{client.user.username}\`
- Bot ID : \`{find.clientID}\`
- Server Name: \`{guild.name}\`
- Bot Owner: \`{owner}\`
- Time: \`{time}\`**`,
  },
  transfer: {
    reply: `**${err} - You must be the owner of this bot.**`,
    reply1: `**${err} - You must mention the user.**`,
    reply2: `**${done} - Ownership Transferred Successfully !**`,
    reply3: `**${err} - If you are sure of transferring the ownership of the bot, please write : \`yes\` !**`
  },
  'add-bot': {
    reply: `**${err} The bot has already been added.**`,
    reply1: `**Number : __{number}__
Token : __ {bot_token}__
ID : __{bot_id}__
Guild ID : __{guild_id}__
Time : {endtime}**`,
    reply2: `**${done} Ownership Transferred Successfully !**`
  },
  move: {
    reply: `**${err} - The bot is Disabled.**`,
    reply2: `**${err} - Please write the server id.**`,
    reply3: `**${err} - I can't find the bot.**`,
    reply4: `**${err} - You must be the owner of this bot.**`,
    reply5: `Done \n https://discord.com/oauth2/authorize?scope=bot&permissions=2147483647&client_id={botid}&guild_id={guild}`
  },
 'set-avatar': {
    reply: `**${err} - The bot is Disabled.**`,
    reply1: `**${err} - I can't find the bot.**`,
    reply2: `**${err} - You must be the owner of this bot.**`
  },
'set-name': {
    reply: `**${err} - The bot is Disabled.**`,
    reply1: `**${err} - I can't find the bot.**`,
    reply2: `**${err} - You must be the owner of this bot.**`
  },
  roll: {
    reply: `The Number Is : {roll}`
  },
  join: {
    reply: `Please join the Voice channel first !`
  },
  leave: {
    reply: `Please join the Voice channel first !`
  },
  ban: {
    reply: "You Can't Ban Yourself Out !",
    reply1: "This Member's Role Is Higher Than Me",
    reply2: "`{user.user.tag}`, This User Has Been Banned"
  },
  kick: {
    reply: "You Can't Kick Yourself Out !",
    reply1: "This Member's Role Is Higher Than Me",
    reply2: "`{user.user.tag}`, This User Has Been Kicked"
  },
  enable: {
    reply: 'You can only use this command in {log}',
    reply1: 'This Member is not recognized !',
    reply2: 'You can\'t enable yourself !',
    reply3: 'You can\'t enable the bot !',
    reply4: 'invalid role !',
    reply5: 'invalid role !',
    reply6: 'Already enable !',
    reply7: 'You can\' enable a member in the administration !',
    reply8: 'You can\' enable a member in the administration !',
    reply9: 'Please check my permissions !',
    reply10: 'The Member has been successfully enable',
    reply11: 'Member :',
    reply12: '<@{user}>',
    reply13: 'Enable Member',
    reply14: 'Member :',
    reply15: '<@{user}>',
    reply16: 'Nick name :',
    reply17: '{name}',
    reply18: 'No nickname added',
    reply19: 'Enable By :',
    reply20: '<@{user}>',
    reply21: `**${bank} | Your bank balance**`,
    reply22: `\`{money}\`Rial`,
    reply23: `**You have been successfully activated**`,
    reply24: `**${bank} | Member bank balance**`
  },
  welcome: {
    reply: 'I did not find this channel here !',
    reply1: 'This channel is already selected !',
    reply2: 'I accept the following values `on` or `off` only!',
    reply3: `Welcome channel activated successfully ${done}`
  },
  slowmode: {
    reply: 'Enter a valid number !',
    reply1: 'This channel has been set to slow mode for `{amount}`s',
    reply2: 'This channel has been set to slow mode for `{amount}`s',
    reply3: 'This channel has been set to slow mode for `{amount}`m',
    reply4: 'This channel has been set to slow mode for `{amount}`m',
    reply5: 'This channel has been set to slow mode for `{amount}`h',
    reply6: 'This channel has been set to slow mode for `{amount}`h',
    reply7: 'Enter a valid number !'
  },
  addemoji: {
    reply: `${err} - I cant find this emoji`,
    reply1: `${err} - I cant find this emoji`,
    reply2: 'Animated emoji:',
    reply3: '{gif}',
    reply4: 'Still emoji:',
    reply5: '{still}',
    reply6: 'Added By:',
    reply7: '<@{by}>'
  },
  role: {
    reply: `**${err} -  Not Found Member**`,
    reply1: `**${err} - Type the name of the role !**`,
    reply2: `**${err} - I did not find this role [role].**`,
    reply3: `**${err} - I can\'t change this member role, check my permissions**`,
    reply4: `**${err} - This member is above your role [role]**`,
    reply5: `**${done} - Changed roles for [user] [type], [oop][role]**`,
    reply6: null,
    reply7: `⬆️ Added:`,
    reply8: `{pop}`,
    reply9: `⬇️ Removed:`,
    reply10: `{pop3}`,
    reply11: `🚫 Error:`,
    reply12: `{pop2}`,
    reply13: `🤔 NotFound:`,
    reply14: `{nf}`
  },
  user: {
    reply: '**<:DolahBotinfo:885209618505170945> Info {user}**',
    reply1: '**User Name: \`{tag}\`**',
    reply2: '**User ID: \`{id}\`**',
    reply3: '**Created At: {created}**',
    reply4: '**Joined At: {joined}**',
    reply5: '**Other Info**',
    reply6: '**Contact Status: {status}**',
    reply7: '**Device Used: \`{used}\`**',
    reply8: '**Custom Status: \`{custom}\`**',
    reply9: '**Nick Name: \`{nick}\`**',
    reply10: '**Permissions: \`{permission}\`**',
    reply11: 'Yes',
    reply12: 'No',
    reply13: '**The role that has permissions: \`{role_permission}\`**'
  },
  server: {
    lan: 'en',
    reply: '**Server Info**',
    reply1: '**Server Name: \`{name}\`**',
    reply2: '**Server ID: \`{id}\`**',
    reply3: '**Server Owner: {owner}**',
    reply4: '**Server Region: {region}**',
    reply5: '**Creadetd At: ceated**',
    reply6: '**Other Info**',
    reply7: '**Total Members: \`{total}\`**',
    reply8: '**Members Online: \`{online}\`**',
    reply9: '**Bots Count: \`{bots}\`**',
    reply10: '**AFK Channel \`{afk}\`**',
    reply11: '**Roles Count: \`[{roles}]\`**',
    reply12: '**Channels Count: \`[{channels}]\`**',
    reply13: '**Channel Text: \`[{text}]\`**',
    reply14: '**Channel Voice: \`[{voice}]\`**',
    reply15: '**Category: \`[{category}]\`**',
    reply16: '**Verification Level: \`[{verificationLevel}]\`**',
    reply17: '**Boosts Count: \`[{Boosts}]\`**'
  },
  ping: {
    reply: `Connection Speeds ${ping}`
  },
  invite: {
    reply: '**Link Bot**',
    reply1: '**Add a bot now what are you waiting for !**'
  },
  
  bot: {
    reply: '{bot} Version {ver}',
    reply1: '**Info {info}**',
    reply2: '**Name Bot: \`{name}\`**',
    reply3: '**ID Bot: \`{id}\`**',
    reply4: '**Creatad AT: {created}**',
    reply5: '**Prefix:\`{prefix}\`**',
    reply6: '**Servers: \`{servers}\`**',
    reply7: '**Users: \`{users}\`**',
    reply8: '**Online Since: \`{online}\`**',
    reply9: '**Bot Status: {status}**',
    reply10: '**Other**'
  },
  /*top: {
    reply: '**Top 10 Rich People**',
    reply1: 'Nothing'
  },
  money: {
    reply: `**${err} -  Not Found Member**`,
    reply1: `**${err} - Bots don't have money**`,
    reply2: `All the money you have`,
    reply3: `**<:wallet:887982626550464514> Cash : \`{wal}\`**`,
    reply4: `**<:cardDolahbot:887993011475218433> Card : \`{card}\`**`,
    reply5: `**<:cashDolahbot:887993039174373376> All : \`{all}\`**`,
    reply6: `**All the money he owns : \`{user}\`**`,
    reply7: `**<:wallet:887982626550464514> Cash : \`{wal1}\`**`,
    reply8: `**<:cardDolahbot:887993011475218433> Card : \`{card1}\`**`,
    reply9: `**<:cashDolahbot:887993039174373376> All : \`{all1}\`**`
  },
  
  'reset-money': {
    reply: `Are you sure to reset all member/server funds?, **yes / no [n,y]**`,
    reply1: `y`,
    reply2: `yes`,
    reply3: `All members' balance has been reset ✅`,
    reply4: `**${err} -  Not Found Member**`,
    reply5: `**${err} - Bots don't have money**`,
    reply6: `The balance of all members in this role has been reset ✅`,
    reply7: `This user's balance has been reset ✅`
  },
  
  pay: {
    reply: `**${err} -  Not Found Member**`,
    reply1: `**${err} - Bots don't have money**`,
    reply2: `**${err} - Please enter a valid number**`,
    reply3: `**${err} - Please enter a valid number**`,
    reply4: `**${err} - Dear you don't have {args}**`,
    reply5: `Please write the number shown in the picture in front of you, an amount will be transferred: \`{amount}\` to <@{user}>`,
    reply6: ``,
    reply7: ``,
    reply8: ``,
    reply9: ``,
    reply10: ``,
    reply11: ``,
    reply12: ``,
    reply13: ``,
    reply14: ``,
    reply15: ``,
  },
  'add-money': {
    reply: `**${err} -  Not Found Member**`,
    reply1: `**${err} - Please enter a valid number**`,
    reply2: `**${err} - You can't add money to bots**`,
    reply3: ``,
    reply4: ``,
    reply5: ``,
    reply6: ``,
    reply7: ``,
    reply8: ``,
    reply9: ``,
    reply11: ``,
    reply12: ``,
    reply13: ``
  }*/
} 


module.exports.ar = {
  vip: {
    reply: `**${err} - البوت معطل.**`,
    reply1: `**أهلا !
- اسم البوت: \`{client.user.username}\`
- ايدي البوت: \`{find.clientID}\`
- سيرفر البوت: \`{guild.name}\`
- مالك البوت: {owner}
- الوقت الباقي: \`{time}\`**`,
  },
  transfer: {
    reply: `**${err} - يجب أن تكون مالك هذا البوت.**`,
    reply1: `**${err} - يجب عليك منشنت العضو.**`,
    reply2: `**${done} - تم نقل الملكية بنجاح !**`,
    reply3: `**${err} - اذا كنت متأكد من نقل ملكية البوت يرجى كتابة : \`نعم\` !**`
  },
  move: {
    reply: `**${err} - البوت معطل.**`,
    reply2: `**${err} - الرجاء كتابة ايدي السيرفر.**`,
    reply3: `**${err} لم اتمكن من العثور على البوت.**`,
    reply4: `**${err} يجب أن تكون مالك هذا البوت.**`,
    reply5: `**${done} تم النقل بنجاح ! \n https://discord.com/oauth2/authorize?scope=bot&permissions=2147483647&client_id={botid}&guild_id={guild}**`
  },
  roll: {
    reply: `الرقم هو : {roll}`
  },
  join: {
    reply: `يرجى الدخول إلى القناة الصوتية اولاً !`
  },
  leave: {
    reply: `يرجى الدخول إلى القناة الصوتية اولاً !`
  },
 'info-bots': {
    reply: `**${err} - لم يتم اضافة بوتات بريموم لحد الأن.**`,
    reply1: `**${err} - لم اتمكن من العثور على البوت.**`,
    reply2: `**أهلا !
- اسم البوت: \`{client.user.username}\`
- ايدي البوت: \`{find.clientID}\`
- سيرفر البوت: \`{guild.name}\`
- مالك البوت: <@{owner}>
- الوقت الباقي: \`{time}\`**`,
  
  },
  ban: {
    reply: "لايمكنك حظر نفسك !",
    reply1: "هذا العضو اعلى منك !",
    reply2: "`{user.user.tag}`, تم حظر العضو"
  },
  kick: {
    reply: "لايمكنك طرد نفسك !",
    reply1: "هاذا العضو اعلى منك !",
    reply2: "`{user.user.tag}`, تم طرد العضو`"
  },
  'set-name': {
    reply: `**${err} البوت معطَل**`,
    reply1: `**${err} لا أستطيع العثور على البوت**`,
    reply2: `**${err} يجب ان تكون مالك هاذا البوت**`
  },
  'set-avatar': {
    reply: `**${err} البوت معطَل**`,
    reply1: `**${err} لا أستطيع العثور على البوت**`,
    reply2: `**${err} يجب ان تكون مالك هاذا البوت**`
  },
  enable: {
    reply: 'يمكنك إستخدام هاذا الأمر فقط في {log}',
    reply1: 'لم يتم التعرف على هاذا العضو !',
    reply2: 'لايمكنك تفعيل نفسك !',
    reply3: 'لايمكنك تفعيل بوت !',
    reply4: 'الرتب غير صالحة !',
    reply5: 'الرتب غير صالحة !',
    reply6: 'تم تفعيله مسبقاً !',
    reply7: 'لا يمكنك تفعيل عضو من الإدارة !',
    reply8: 'لا يمكنك تفعيل عضو من الإدارة !',
    reply9: 'يرجى التأكد من صلاحياتي !',
    reply10: 'تم تفعيل العضو بنجاح',
    reply11: 'العضو :',
    reply12: '<@{user}>',
    reply13: 'تفعيل عضو',
    reply14: 'العضو :',
    reply15: '<@{user}>',
    reply16: 'الإسم المستعار :',
    reply17: '{name}',
    reply18: 'لم يتم إضافة إسم مستعار',
    reply19: 'تم تفعيله بواسطة :',
    reply20: '<@{user}>',
    reply21: `${bank} | رصيدك البنكي`,
    reply22: '\`{money}\`ريال',
    reply23: '**لقد تم تفعيلك بنجاح**',
    reply24: `**${bank} | رصيد العضو**`

  },
  welcome: {
    reply: 'لم أعثر على هذه القناة هنا !',
    reply1: 'هاذه القناة محددة مسبقاً !',
    reply2: 'لا اقبل قيم غير `on` أو `off` فقط !',
    reply3: `تم تفعيل قناة الترحيب بنجاح ${done}`
  },
  slowmode: {
    reply: 'قم بوضع رقم صالح !',
    reply1: 'تم تعيين الوضع البطئ فيه هاذه القناة لمدة `{amount}`',
    reply2: 'تم تعيين الوضع البطئ فيه هاذه القناة لمدة `{amount}`',
    reply3: 'تم تعيين الوضع البطئ فيه هاذه القناة لمدة `{amount}`',
    reply4: 'تم تعيين الوضع البطئ فيه هاذه القناة لمدة `{amount}`',
    reply5: 'تم تعيين الوضع البطئ فيه هاذه القناة لمدة `{amount}`',
    reply6: 'تم تعيين الوضع البطئ فيه هاذه القناة لمدة `{amount}`',
    reply7: 'قم بوضع رقم صالح !'
  },
  addemoji: {
    reply: `${err} - لا يمكنني العثور على هذا الإيموجي`,
    reply1: `${err} - لا يمكنني العثور على هذا الإيموجي`,
    reply2: 'إيموجي متحرك:',
    reply3: '{gif}',
    reply4: 'إيموجي ثابت:',
    reply5: '{still}',
    reply6: 'تم إضافته بواسطة:',
    reply7: '<@{by}>'
  },
  role: {
    reply: `**${err} -  لم أعثر على هاذا العضو**`,
    reply1: `**${err} - يرجى كتاابة إسم الرول !**`,
    reply2: `**${err} - لم أجد هاذا الرول [role].**`,
    reply3: `**${err} - لا يمكنني تغيير الرتب لهاذا العضو, يرجى مراجعة صلاحياتي**`,
    reply4: `**${err} - هاذا العضو اعلى من رتبتك [role]**`,
    reply5: `**${done} - تم تغيير الرتب لـ [user] [type] , [oop][role]**`,
    reply6: null,
    reply7: `⬆️ إضافة:`,
    reply8: `{pop}`,
    reply9: `⬇️ إزالة:`,
    reply10: `{pop3}`,
    reply11: `🚫 خطأ:`,
    reply12: `{pop2}`,
    reply13: `🤔 لم اجد:`,
    reply14: `{nf}`
  },
  user: {
    reply: '**<:DolahBotinfo:885209618505170945> معلومات {user}**',
    reply1: '**إسم المستخدم: \`{tag}\`**',
    reply2: '**آيدي المستخدم: \`{id}\`**',
    reply3: '**تاريخ الإنشاء: {created}**',
    reply4: '**تاريخ الإنضمام: {joined}**',
    reply5: '**معلومات أخرى**',
    reply6: '**حالة الإتصال: {status}**',
    reply7: '**الجهاز المستخدم حالياً: \`{used}\`**',
    reply8: '**الحالة: \`{custom}\`**',
    reply9: '**الإسم المستعار: \`{nick}\`**',
    reply10: '**هل العضو يملك صلاحيات بهاذا الخادم: \`{permission}\`**',
    reply11: 'نعم',
    reply12: 'لا',
    reply13: '**الرتبة التي يوجد بها صلاحيات: \`{role_permission}\`**'
  },
  server: {
    lan: 'ar',
    reply: '**معلومات عن الخادم**',
    reply1: '**إسم الخادم: \`{name}\`**',
    reply2: '**آيدي الخادم: \`{id}\`**',
    reply3: '**مالك الخادم: {owner}**',
    reply4: '**منطقة الخادم: {region}**',
    reply5: '**تاريخ الإنشاء: {ceated}**',
    reply6: '**معلومات أخرى**',
    reply7: '**عدد الأعضاء: \`{total}\`**',
    reply8: '**الأعضاء المتصلين: \`{online}\`**',
    reply9: '**عدد البوتات: \`{bots}\`**',
    reply10: '**AFK \`{afk}\`**',
    reply11: '**عدد الرتب: \`[{roles}]\`**',
    reply12: '**عدد الشاتات: \`[{channels}]\`**',
    reply13: '**شاتات: \`[{text}]\`**',
    reply14: '**رومات: \`[{voice}]\`**',
    reply15: '**الكاتورجيات: \`[{category}]\`**',
    reply16: '**مستوى التحقق: \`[{verificationLevel}]\`**',
    reply17: '**عدد البوستات: \`[{Boosts}]\`**'
  },
  ping: {
    reply: `سرعات الإتصال ${ping}`
  },
  invite: {
    reply: '**رابط البوت**',
    reply1: '**قم بإضافة البوت الآن ماذا تنتظر !**'
  },
  bot: {
    reply: '{bot} إصدار {ver}',
    reply1: '**معلومات {info}**',
    reply2: '**إسم البوت: \`{name}\`**',
    reply3: '**آيدي البوت: \`{id}\`**',
    reply4: '**تاريخ الإنشاء: {created}**',
    reply5: '**البريفكس:\`{prefix}\`**',
    reply6: '**السيرفرات: \`{servers}\`**',
    reply7: '**المستخدمين: \`{users}\`**',
    reply8: '**متصل منذ: \`{online}\`**',
    reply9: '**حالة البوت: {status}**',
    reply10: '**أخرى**'
  },
  /*top: {
    reply: '**أعلى 10 اثرياء السيرفر**',
    reply1: '**المال:**',
    reply2: 'لايوجد'
  },
  money: {
    reply: `**${err} -  لم أجد هاذا العضو**`,
    reply1: `**${err} - البوتات لاتملك المال !**`,
    reply2: `جميع الأموال التبي تمتلكها`,
    reply3: `**<:wallet:887982626550464514> الكاش : \`{wal}\`**`,
    reply4: `**<:cardDolahbot:887993011475218433> البطاقة : \`{card}\`**`,
    reply5: `**<:cashDolahbot:887993039174373376> المجموع : \`{all}\`**`,
    reply6: `**جميع الأموال التبي يمتلكها : \`{user}\`**`,
    reply7: `**<:wallet:887982626550464514> الكاش : \`{wal1}\`**`,
    reply8: `**<:cardDolahbot:887993011475218433> البطاقة : \`{card1}\`**`,
    reply9: `**<:cashDolahbot:887993039174373376> المجموع : \`{all1}\`**`
  },
  
  'reset-money': {
    reply: `هل أنت متأكد من إعادة تعيين جميع اموال العضو / الخادم ؟, **نعم / لا**`,
    reply1: `نعم`,
    reply2: `نعم`,
    reply3: `تم إعادة رصيد جميع الأعضاء ✅`,
    reply4: `**${err} -  لم أجد هاذا العضو**`,
    reply5: `**${err} - البوتات لاتملك أرصدة**`,
    reply6: `تمت إعادة تعيين رصيد جميع الأعضاء الذين يملكون هاذه الرتبة ✅`,
    reply7: `تم إعادة تعيين رصيد هاذا العضو ✅`
  },
  pay: {
    reply: `**${err} -  لم أجد هاذا العضو**`,
    reply1: `**${err} - البوتات لاتملك أرصدة**`,
    reply2: `**${err} - يرجى وضع رقم صحيح**`,
    reply3: `**${err} - يرجى وضع رقم صحيح**`,
    reply4: `**${err} - عزيزي اأنت لاتملك \`{args}\`**`,
    reply5: ``,
    reply6: ``,
    reply7: ``,
    reply8: ``,
    reply9: ``,
    reply10: ``,
    reply11: ``,
    reply12: ``,
    reply13: ``,
    reply14: ``,
    reply15: ``,
  },
  'add-money': {
    reply: `**${err} -  لم أجد هاذا العضو**`,
    reply1: `**${err} - من فضلك ضع رقم صحيح**`,
    reply2: `**${err} - لا يمكنك إضافة المال إلى البوتات**`,
    reply3: ``,
    reply4: ``,
    reply5: ``,
    reply6: ``,
    reply7: ``,
    reply8: ``,
    reply9: ``,
    reply11: ``,
    reply12: ``,
    reply13: ``
  }*/
}
