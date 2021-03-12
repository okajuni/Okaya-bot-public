module.exports = {
    name: 'pout',
    description: 'Commande pour bouder',
    execute(message) {
      const Discord = require('discord.js');
      const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
      const client = new Discord.Client();
      const poutmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC', "https://media.tenor.com/images/d0ec17c2a83af604847276fdead3d786/tenor.gif", "https://okaya.herokuapp.com/")
        .setTitle('Pout')
        .setDescription(`Tiens ${message.author.tag} est en train de bouder`)
        .setImage('https://i.imgur.com/8kepkWf.gif')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('RED')
        .setURL('https://okaya.herokuapp.com/')
         message.channel.send(poutmsg);
      }
    }