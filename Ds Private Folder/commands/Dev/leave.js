const { MessageEmbed } = require('discord.js');
const lineReplyNoMention = require('discord-reply');
const devs = require("../../src/utils/Constants.js").bot;

module.exports.run = async(message, args, client) => {
		if (!args[0])
			return message.channel.send(
				'**Ex: +leave <server name / server id>**'
			);
		let guild =
			client.guilds.cache.get(args[0]) ||
			client.guilds.cache.find(
				Guild =>
					Guild.name == args.slice(1).join(' ') ||
					Guild.name.startsWith(args.slice(1).join(' '))
			);
		if (!guild)
			return message.channel.send(
				`**No guild found with id/name \`${args.slice(1).join(' ')}\`**`
			);
		this.emojis = {
			yes: '✅',
			no: '❌'
		};
		message.channel
			.send(
				`**Are You sure you want me left this server:\nName: ${
					guild.name
				}\nMembers Count: ${guild.memberCount}\nOwnerShip: <@${
					guild.ownerID
				 || "None"}> (ID: ${guild.ownerID || "None"})**`
			)
			.then(async msg => {
				await msg.react(this.emojis.yes);
				await msg.react(this.emojis.no);
				let filter = (reaction, user) => {
					return user.id == message.author.id;
				};
				let collector = await msg.createReactionCollector(filter, {
					time: 1000 * 15
				});
				collector
					.on('collect', async r => {
						collector.stop();
						msg.delete().catch(err => undefined);
						switch (r.emoji.name) {
							case this.emojis.yes:
								message.channel
									.send('**Successfully left the server.**')
									.then(() => guild.leave())
									.catch(err => guild.leave());
								break;
							case this.emojis.no:
								message.channel.send('**Successfully cancelled.**');
								break;
						}
					})
					.on('end', () => {
						msg.delete();
						message.reply('**Time out.**');
					});
			});

}

module.exports.help = {
  name: 'leave-server',
  cooldown: 10
}
module.exports.options = {
  owner: true
};