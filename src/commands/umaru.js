module.exports = {
    name: 'umaru',
    description: 'Afficher Umaru',
    execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
        const umaruyeye = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setColor('#ff000d')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setImage('https://i.pinimg.com/originals/63/45/d9/6345d903217dccbe43cadfa64792aa2d.png')
        .setTimestamp()
        .setDescription("Umaru")   
        .setTitle('Umaru')
        .setURL('https://www.youtube.com/watch?v=cOVq3Nxr87c')
        message.channel.send(umaruyeye)  
    }
}