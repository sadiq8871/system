const { Client, Collection, MessageEmbed } = require('discord.js');
const { bot } = require('../../src/utils/Constants.js');
const client = new Client();
const { readdirSync } = require('fs');
const Enmap = require('enmap');
const events = readdirSync('events');
const DataBaseCollector = require('../../src/managers/DataBaseCollector');
const Dashboard = require('../../src/Website/App');
require('../../src/utils/Util');
const DataBase1 = require("../../src/managers/DataBase.js");
require("../../src/managers/defineProperties");
module.exports = function createCache(client, premium, DATA) {
  client.database = (...args) => new DataBaseCollector(...args);
  client.commands = new Collection();
  client.prefix = bot.prefix;
  client.dashboard = Dashboard;
  client.dolah = {
    db: key => new DataBase1(new Enmap({ name: "Bank" }), key),
    dbb: key => new DataBase1(new Enmap({ name: "Store" }), key),
  };
  events.forEach(function(event) {
    let handler = require('../../events/' + event)(client, premium, DATA);
    if (handler.once == !0) client.on(handler.event, handler.run);
  });

  const commandsFolders = readdirSync('commands').filter(folder => !folder.includes('.'));

  for(let commandFolder of commandsFolders) {
    const commandsFiles = readdirSync('commands/' + commandFolder).filter(file => file.endsWith('.js'));
    for(let commandFile of commandsFiles) {
      let command = require(`../../commands/${commandFolder}/${commandFile}`);
      client.commands.set(command.help.name, command);
    }
  }
}
