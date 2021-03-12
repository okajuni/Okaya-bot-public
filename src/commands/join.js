module.exports = {
    name: 'join',
    description: 'info pour pouvoir join la Okaya ou Bros Corps',
    execute(message) {
        const Discord = require('discord.js');
        const {discordprofile, logogif, github} = require("./adp/profile.json")
        const embedjoinus = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC','https://media.discordapp.net/attachments/630461844968046633/787769126033686598/logo2.png' ,'https://okaya.herokuapp.com/')
        .setColor("#2C2F33")
        .setImage('https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setTimestamp()
        .setTitle('Join Us')
        .addField("Nous rejoindre!","il suffis d'envoyer un message privé à 🦦🌺Okajuni [BC]🌺🦦#1041 pour rejoindre la Bros Crops ou la Okaya (il vous donnera les condition en dm)")
        .setThumbnail('https://media.discordapp.net/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png')
        console.log(`${message.author.username} est intéréssé de nous rejoindre sont id : ${message.author.id}`)
        message.channel.send(embedjoinus);
      }
    }