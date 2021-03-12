module.exports = {
    name: 'kiss',
    description: 'kiss une personne owo',
    execute(message) {
      const Discord = require('discord.js');
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      const client = new Discord.Client();
      const userkissed = message.mentions.users.first();
      const kissmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC','https://upload.wikimedia.org/wikipedia/commons/2/2f/Beating_Heart.gif','https://okaya.herokuapp.com/')
        .setTitle('kiss')
        .setDescription(`hooooo~~ ${userkissed}, ${message.author.username} t'a embrassé :D`)
        .setImage('https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#ff00cc')
          message.channel.send({embed: kissmsg}).then(embedMessage => {
          embedMessage.react("💋");
         });
      }
    }