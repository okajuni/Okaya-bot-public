module.exports = {
    name: 'clear',
    description: 'clear les messages',
    execute(message) {
    const Discord = require("discord.js");
    const {discordprofile, logogif} = require("./adp/profile.json")
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
     //vérifie si la personne qui à tappé la commande peut supprimer des commandes 
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('pas assez de perm');
    let deleteAmount;
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Nombre uniqument sont accepté') }
    //on ne peut pas supprimer plus de 100 message à la fois sinon l'api discord nous met un message d'erreur
    if (parseInt(args[0]) > 100) {
        return message.reply('tu ne peut supprimer que 99 message')
    } else {
        deleteAmount = parseInt(args[0]);
    }
    //message une fois les messages supprimées de conformation
    message.channel.bulkDelete(deleteAmount + 1, true);
    const clearmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC')
        .addField(`**J'ai réussi à supprimer** *${deleteAmount}* **Messages.**`, "**suppression du message dans *3,5* secondes**")
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        .setColor('#00ff08')
        message.channel.send(clearmsg)
        .then(msg => {
        msg.delete({ timeout: 3500 })
        console.log(`${deleteAmount} ons été supprimés du serveur ${message.guild.name}     id du serveur : ${message.guild.id}    id de l'Autheur du serveur : ${message.author.id}`)
          })
  }
}