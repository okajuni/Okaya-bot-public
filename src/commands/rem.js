module.exports = {
    name: 'rem',
    description: 'afficher Rem',
    execute(message) {
        const Discord = require('discord.js');
        const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
        const client = new Discord.Client();
        const leembed = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setColor('#ff1100')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setImage('https://i.pinimg.com/originals/e1/46/46/e14646104e4d71e57345331533bac10c.png')
        .setTimestamp()
        .setDescription("Rem")   
        .setTitle('Rem')
        .setURL('https://www.youtube.com/watch?v=j90gzx4PwmE')
        message.channel.send(leembed)  
    }
}