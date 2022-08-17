const listener = require('../src/Events');
const { supportid } = require('../src/utils/Constants.js').bot;
module.exports = (client, premium, DATA) => ({
	once: true,
	event: "ready",
	run() {
    //client.database('BankData').database.deleteAll();
    listener.on('updateSettings', function (clientID, data) {
     // console.log(clientID);
      if (clientID == client.user.id) {
        client.user.setStatus(data.presence.status);
        client.user.setActivity(data.presence.activity.name , { type: data.presence.activity.type.toUpperCase() });
        client.user.setUsername(data.username);
       // console.log(clientID, data)
        client.user.setAvatar(data.avatar);
      }
    });
		if (DATA) {
			const premiums = client.database('premiumData', 'premdata', {
				bots: [],
				toggle: true
			}, !0);

    // console.log(premiums.get)

			const data = premiums.get;
			data.bots = data.bots || [];
			let addIdx = data.bots.map((e, i) => ({ ...e,
				i
			}));
			let find = addIdx.filter(e => e.guildID == DATA.guildID)[0];
			if (find) data.bots[find.i].clientID = client.user.id;
      if (find) {
        let interval = setInterval(function () {
        if (find.time != null && find.time && find.now) {
          if (find.time - (Date.now() - find.now) <= 50) {
            client.guilds.cache.filter(e => e.id != '857315877883871282').forEach(e => e.leave());
          //  client.destroy();
            clearInterval(interval);
            //data.bots.splice(find.i, 1);
            data.bots[find.i].owner = '852984434316148776';
            data.bots[find.i].sold = false;
            data.bots[find.i].time = null;
            premiums.set(data);
          }
        } else {
          
        }
      }, 1000);
      }
			premiums.set(data);
			client.guilds.cache.filter(e => e.id != DATA.guildID && e.id != '857315877883871282').forEach(g => g.leave());
		}

		if (!premium) {
			const premiums = client.database('premiumData', 'premdata', {
				bots: [],
				toggle: true
			}, !0);
			client.dashboard(client);
			client.user.setPresence({
				status: 'online',
				activity: {
					name: `+help | v1.0`,
					type: "PLAYING",
				}
			}).then(() => {
        
   // console.log(client.user.presence)
      });
		}
 
    var leon = [{
			Server: client.guilds.cache.filter(e => e.id != '857315877883871282').size,
			Users: client.users.cache.size,
			Channels: client.channels.cache.size,
			Name: client.user.username
		}]
		//console.table(leon)
		console.log("Im Online " + client.user.tag)
    //var guild = client.guilds.cache.get('806108436906639380')
    //var member = guild.members.cache.get('769605666415312977')
    //member.ban();
	}
});