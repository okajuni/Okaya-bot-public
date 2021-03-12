module.exports = {
    name: 'me',
    description: 'Affiche les info de ton compte',
    execute(message) {
        const Discord = require('discord.js');
        const {discordprofile, logogif} = require("./adp/profile.json")
        const asasasasa = message.author.avatarURL()
        const azerty9616683 = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC',`${logogif}`,"https://okaya.herokuapp.com/")
        .setColor('#2C2F33')
        .setImage(asasasasa)
        .addField('Pseudo', `${message.author.username}`)
        .addField("Id", `${message.author.id}`)
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .addField("Date de création du compte",`${message.author.createdAt}`)
        message.channel.send(azerty9616683);
      }
    }