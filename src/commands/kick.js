module.exports = {
	name: 'kick',
	description: 'kick les gens (que pour les modo hehe)',
	execute(message) {
    const Discord = require('discord.js');
    const {discordprofile, logogif, github} = require("./adp/profile.json")
    const client = new Discord.Client();
    const user = message.mentions.users.first();
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('tu ne peut pas ban ^^')
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .kick(`${member} à kick via Okaya Bot `)
        .then(() => {
          const embed  = new Discord.MessageEmbed()
          .setAuthor('OKΛYA x BC')
          .setColor('#ff0015')
          .setTitle('Kick')
          .setURL('https://discord.com/terms')
          .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
          .setImage('https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
          .setDescription(`L'utilisateur ${user.tag} à été kick`)
          message.channel.send(embed);
          console.log("la commande 'kick' à été utilisé par l'utilisateur :", `nom d'utilisateur : ${message.author.tag}/ id ${message.author.id}`," | dans le serveur", `"${message.channel.guild}", sont id du channel : ${message.guild.id}, membre kick ${user.tag}/ id ${user.id}`)
        })
        .catch(err => {
          const errmsg = new Discord.MessageEmbed()
          .setAuthor('OKΛYA x BC')
          .setColor('#ff0015')
          .setTitle('Impossible de Kick')
          .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
          .setImage('https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
          message.channel.send(errmsg);
          console.error(err);
        });
    } else {
      message.channel.send("Il n'est pas sur le serveur");
    }
  } else {
    message.channel.send("Vous n'avez pas mentionné une personne à kick");
  }
}
}