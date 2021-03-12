module.exports = {
    name: 'feed',
    description: 'nourrit des gens',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      const userfeeded = message.mentions.users.first();
      const feedmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setTitle('Feeding')
        .setDescription(`hey ${userfeeded}, ${message.author.username} t'a nourrit :D`)
        .setImage('https://media1.tenor.com/images/5634d502409f8ec76923481ee01d37e2/tenor.gif?itemid=15144611')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#03e3fc')
        message.channel.send({embed: feedmsg}).then(embedMessage => {
          embedMessage.react("🍝");
         });
      }
    }