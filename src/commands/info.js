module.exports = {
	name: 'info',
	description: 'Les info sur La team Okaya et Bros Corps!',
	execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const {discordprofile, logogif, github} = require("./adp/profile.json")
        const infobros = new Discord.MessageEmbed()
    .setAuthor('OKΛYA x BC')
    .setColor('#ff1100')
    .setDescription('La Team Okaya à été fondée par Okajuni cette team est une sous partie de la Bros Corps [BC] cette sous team vise à rassembler les membres moins actifs et moins "tryhard" que la Bros Corps nous ne sommes pas des Tryharder mais des gens chill dev compris')
    .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
    .setTitle('Site Web')
    .setURL('https://okaya.herokuapp.com/')
    .setTimestamp()
    .setImage('https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
    message.channel.send(infobros);
    } 
}