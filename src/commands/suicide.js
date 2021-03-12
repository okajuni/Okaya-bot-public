module.exports = {
    name: 'suicide',
    description: 'pour se buter',
    execute(message) {
      const Discord = require('discord.js');
      const client = new Discord.Client();
      const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
      const scdmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a4eead6-0e48-4762-88e7-651d0156e595/dcxb2ey-72d7aecb-7584-4332-b81f-a02f7e185856.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWE0ZWVhZDYtMGU0OC00NzYyLTg4ZTctNjUxZDAxNTZlNTk1XC9kY3hiMmV5LTcyZDdhZWNiLTc1ODQtNDMzMi1iODFmLWEwMmY3ZTE4NTg1Ni5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VI-WK0WJ9jwLmvSjoXW2E2YDXWaXJtJmFGGsw7GTQyc','https://okaya.herokuapp.com/')
        .setTitle('Suicide.')
        .setDescription(`Paix à l'âme de ${message.author.username}`)
        .setImage('https://media1.tenor.com/images/b9ebfbf0e8060ab57071dea8e537b05c/tenor.gif?itemid=5922988')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('DARK_NAVY')
        message.channel.send({embed: scdmsg}).then(embedMessage => {
          embedMessage.react("😭");
         });
      }
    }