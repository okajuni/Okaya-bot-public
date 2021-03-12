module.exports = {
	name: 'logo',
	description: 'donne le logo Okaya',
	execute(message) {
    const Discord = require('discord.js');
    const {discordprofile, logogif, github} = require("./adp/profile.json")
    const img = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
    .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png","https://okaya.herokuapp.com/")
    .setColor('RANDOM')
    .setDescription('Le logo peut changer en fonction des envis de la Team')
    .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
    message.channel.send(img);
  }
}