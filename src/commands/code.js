module.exports = {
    name: 'code',
    description: 'Lien vers le github du bot (pour sont code source)',
    execute(message){
     const discord = require('discord.js')
     const {discordprofile, logogif, github} = require("./adp/profile.json")
     const codemsg = new discord.MessageEmbed()
     .setAuthor('OKΛYA x BC', '', 'http://okaya-okajuni.000webhostapp.com')
     .setTitle('Code source du bot')
     .setImage('https://github.githubassets.com/images/modules/logos_page/Octocat.png')
     .setDescription("Le bot est comme le site open source vous pouvez installer le code puis le modifier comme vous voulez (sauf si vous comptez en faire un bot payent) Comme chaque choses codé par le créateur Okajuni tout est t'open source et disponible à tous")
     .setTimestamp()
     .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
     .setColor('#1900ff')
     .setURL('https://github.com/okajuni/Okaya-bot-public')
     message.channel.send(codemsg);
    }
}