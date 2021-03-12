module.exports = {
    name: 'cry',
    description: 'Pour pleurer',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const crymsg = new Discord.MessageEmbed()
      const {discordprofile, logogif, github} = require("./adp/profile.json")
        .setAuthor('OKΛYA x BC')
        .setTitle('Cry...')
        .setImage('https://data.whicdn.com/images/332172554/original.gif')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#1900ff')
        .setURL('http://okaya-okajuni.000webhostapp.com')
        message.channel.send(crymsg);
      }
    }