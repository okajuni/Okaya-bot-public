module.exports = {
    name: 'emilia',
    description: 'Afficher Emilia',
    execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const {discordprofile, logogif, github} = require("./adp/profile.json")
        const umaruyeye = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .setColor('#ff1100')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setImage('https://www.pngkit.com/png/full/164-1645640_download-emilia-image-re-zero-emilia-fan.png')
        .setTimestamp()
        .setDescription("Emilia elle à une cape comme batman")   
        .setTitle('elle contrôle la glace !')
        .setURL('https://www.youtube.com/watch?v=BsAcpmyGQwM')
        message.channel.send(umaruyeye);
    }
}