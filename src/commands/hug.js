module.exports = {
    name: 'hug',
    description: 'hug une personne owo',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      const userhugged = message.mentions.users.first();
      const hugmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC','https://upload.wikimedia.org/wikipedia/commons/2/2f/Beating_Heart.gif','https://okaya.herokuapp.com/')
        .setTitle('Hug !')
        .setDescription(`aww ${userhugged}, ${message.author.username} t'a fait un câlin :D`)
        .setImage('https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#ff00cc')
          message.channel.send({embed: hugmsg}).then(embedMessage => {
          embedMessage.react("🤗");
         });
      }
    }