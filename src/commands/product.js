module.exports = {
	name: 'product',
	description: "pour l'appli Okaya",
	execute(message) {
		const Discord = require('discord.js');
		const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
		const client = new Discord.Client();
		const productmsg = new Discord.MessageEmbed()
		.setAuthor('OKΛYA x BC',"https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif","https://okaya.herokuapp.com/") 
		.setColor('2C2F33')  
		.setImage('https://ironpowertga.github.io/image/itchio.png')
		.setTitle("lien d'installation de l'app (pas encore disponible)")
		.setURL('https://okajuni.itch.io/okaya-app')
		.setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
		message.channel.send(productmsg);
 }
}