module.exports = {
    name: 'hello',
    description: 'Pour dire Bonjour',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      const hellouser = message.mentions.users.first();
      const hellomsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setTitle('Hello :D')
        .setImage('https://i.imgur.com/5yOHJUe.gif')
        .setTimestamp()
        .addField(`hey ${hellouser},  ${message.author.tag}`, "t'a dis Bonjour tu peut lui dire bonjour en retour :D")
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#b700ff')
        .setURL('https://okaya-web.herokuapp.com/#okaya')
        message.channel.send({embed: hellomsg}).then(embedMessage => {
          embedMessage.react("👋");
         });
      }
    }