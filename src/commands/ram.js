module.exports = {
    name: 'ram',
    description: 'Afficher Ram',
    execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
        const leembed = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setColor('#ff000d')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setImage('https://i.pinimg.com/originals/6d/81/85/6d81855cbd2525af128a8fb32d1983e7.png')
        .setTimestamp()
        .setDescription("Ram")   
        .setTitle('Ram')
        .setURL('https://www.youtube.com/watch?v=3SgnKjBPFII')
        message.channel.send(leembed);
    }
}