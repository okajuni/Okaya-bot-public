module.exports = {
    name: 'website',
    description: 'montrer le lien du site',
    execute(message) {
    const Discord = require('discord.js')
    const websiteurl = require("./adp/website.json")
    const {github, discordprofile, logogif} = require("./adp/profile.json")
    const websitemsg = new Discord.MessageEmbed()
    .setAuthor('OKΛYA x BC','https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif',`${websiteurl}`)
    .setColor("RANDOM")
    .setURL(`${websiteurl}`)
    .setTimestamp()
    .setFooter(`${discordprofile}`, `${logogif}`)
    .setThumbnail("https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg")
    .setImage(`${logogif}`)
    .setTitle("Information sur le site")
    .setDescription(`Le site à été dévellopé par Okajuni Comme pour tout projets le code est gratuit sur le github : ${github} (ou directement sur le site en lui même : http://okaya.herokuapp.com/#about )`)
    message.channel.send({embed: websitemsg}).then(embedMessage => {
        embedMessage.react("🌐");
        console.log(`${message.author.id} à voulu les informations sur le site avec la commande website`)
       });
   }
}