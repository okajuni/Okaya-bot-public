module.exports = {
    name: 'cookie',
    description: 'Affiche un cookie',
    execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const {discordprofile, logogif, github} = require("./adp/profile.json")
        const userlolsqirgjsodrfig = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setTitle('Coooookiieeeeeeeeeeee')
        .setImage('https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F8c46ae8c-819b-4b8c-8515-7703c0b5e34a.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgTGF3dG9uL1N1Y3LDqSBzYWzDqSAvIEN1aXNpbmUgQWN0dWVsbGU%3D/cookies-geant.jpeg')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#03e3fc')
        .setURL('https://www.cuisineactuelle.fr/recettes/cookies-geant-224156')
        message.channel.send(userlolsqirgjsodrfig);
      }
    }