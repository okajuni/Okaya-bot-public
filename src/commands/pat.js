module.exports = {
    name: 'pat',
    description: 'pat une personne demandé',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
      const userpated = message.mentions.users.first();
      const patmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC','https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif','https://okaya.herokuapp.com/')
        .setTitle('Pat')
        .setDescription(`hey ${userpated}, ${message.author.username} t'a fait une petite caresse sur ta petite tête`)
        .setImage('https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410')
        .setColor('#ff00fb')
        .setTimestamp()
        .setURL('https://www.youtube.com/watch?v=gjIHwil0cqk')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/614535751421394945/793226224116695050/48c.gif')
        message.channel.send({embed: patmsg}).then(embedMessage => {
          embedMessage.react("🦔");
         });
      }
    }