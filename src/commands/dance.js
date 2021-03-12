module.exports = {
    name: 'dance',
    description: 'danser ^^',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      const boiyeeeeeeeee = new Discord.MessageEmbed()
      .setAuthor('OKΛYA x BC')
      .setColor('RANDOM')
      .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
      .setTimestamp()
      .setImage('https://img1.picmix.com/output/stamp/normal/3/0/5/5/1385503_6f527.gif')
      .setTitle('DANCE TIME')
      .setURL('https://www.youtube.com/watch?v=Lyhf-hSxutw')
      .setDescription('DANCE TILL YOU DIE')
      message.channel.send(boiyeeeeeeeee);
      }
    }