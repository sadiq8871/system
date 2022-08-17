const Discord = require('discord.js');

module.exports.bot = {
supportid: '781144276914012211',
  emojis: {
    "err": "🙄",
    "done": "✅",
    "ping":"<:DolahBotnetwork:885209222051143740>",
    "other":"<:DolahBotOther:884132163665133609>",
    "bank": "",
    "cash": "<:wallet:887982626550464514>",
    "total": "",
    "Ministry": "",
    "user": "",// العضو
    "admin": "",//الي حول له
    "open": "",//رقم العمليه
    "pay": "<:transferDolahBot:887982591779676200>",//تحويل
    "info": "",//نوع العمليه
    "log": ""//لوق
  },
  logs: {
  premium: "885775461324574760"
  },
  support: "https://discord.gg/rdHVty98rJ",
  Dashboard: "https://dolah.xyz",
  invite: "https://discord.com/api/oauth2/authorize?client_id=851585030164840468&permissions=8&redirect_uri=https%3A%2F%2Fdolah.xyz%2Fauth&scope=bot",
  devs:["467394732042092544", "744956545170669569", "852984434316148776","450648270159609856", "713207310121435187","744037953717797025"],
  token: "ODUxNTg1MDMwMTY0ODQwNDY4.YL6aXA.o0QaVfMSfTB1IHcQeU-IPxvs_2w",
  prefix: '+',
  defaultLanguage: 'en',
  blacklistUsers: ['713207310121435187','467394732042092544']
}

exports.Website = {
  clientUser: {
    secret: "u35_UFvEJKUcnOn8tHb0z3-GUAuBC6dF",
    scopes: ["guilds", "identify"]
  },
  Websocket: {
    port: process.env.PORT || 3000,
    redirectURI: 'https://dolah.xyz'
  },
  toggle: true,
  checkAuth(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    return next();
  },
  formatIcon(id, icon, client) {
    if (!icon) return 'https://cdn.discordapp.com/emojis/853049496618139670.gif?v=1';
    let rest = client.rest;
    try {
      return rest.cdn.Icon(id, icon, {}, 2048, true)
    } catch {
      return 'https://cdn.discordapp.com/icons/' + id + '/' + icon + '.png?size=2048';
    }
  },
  Permissions(bitfield) {
    return new Discord.Permissions(bitfield).has("ADMINISTRATOR");
  }
}

module.exports.checkPremium = function checkPremium(client, premium, message) {
  if (premium) return true;

  const premiums = client.database('premiumData', 'premdata', {
    bots: [],
    toggle: true
  }, !0);
  
  const data = premiums.get;
  data.bots = data.bots || [];
  let find = data.bots.filter(e => e.guildID == message.guild.id)[0];
  let guild = message.guild;
  if (!find) return true;
 
  return !guild.members.cache.get(find.clientID);
  
}