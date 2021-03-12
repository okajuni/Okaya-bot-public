module.exports = {
	     name: 'mem',
	     description: 'Les membres Bros Corps et Okaya',
	     execute(message) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const {discordprofile, logogif, github} = require("./adp/profile.json")
    const memberYEAHBOI = new Discord.MessageEmbed()
    .setAuthor('OKΛYA x BC','https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif','https://okaya.herokuapp.com/')
    .addFields(
      { name: '[BC] izaya [Pablo]', value: 'Fondateur de la Bros Corps un Gameur approuvé qui aime la salade et le gaming' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Okajuni', value: 'Fondateur de la sous partie de la Bros Corps (OKΛYA) premier membre de la Bros Corps Dévellopeur web et gameur', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: 'Lukagi64', value: 'Dark Sasuke il peut vous tuer en seulement 20 jours pour seulement 50k € UNE AFFAIRE EN OR', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '𝑩𝒂𝒓𝒆𝒕𝒔𝒌𝒚', value: 'El baron de la mafia bon joueur cs-go', inline: true },
      { name: '\u200B', value: '\u200B' },
      )
    .setURL('https://okaya.herokuapp.com/')
    .addField('OKΛYA [BOT]', "Tout premier bot fait par Okajuni une grande histoire celui là (he c'est moi :^) )", true)
    .setDescription('Pour être Recruté Bros Corps ils faut avant tout passer OKΛYA en premier les plus appréciers ou les gens les plus actifs et sympa seront pris dans la Bros Corps')
    .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
    .setColor('#ff1100')
    .setTitle('Membres de la Okaya Corps/ Bros Corps')
    .setImage('https://media.discordapp.net/attachments/579419210023960576/757273573403394225/unknown.png')
    .setThumbnail('https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
    .setTimestamp()
    message.channel.send(memberYEAHBOI);
  }
}