module.exports = {
  name: 'pub',
  description: 'affiche la pub pour adotimide',
  execute(message) {
  const Discord = require('discord.js');
  const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
  const client = new Discord.Client();
        const adotimide = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC', '', 'https://okaya.herokuapp.com/')
        .setThumbnail('https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif')
        .setTitle('Pub !')
        .setColor('RANDOM')
        .setURL('https://discord.gg/8PfgeVu')
        .setImage('https://cdn.discordapp.com/icons/614499202319515668/0c55758d8100c85a7ed68fe15745b23d.webp?size=128')
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setTimestamp()
        message.channel.send(adotimide);
      }
    }