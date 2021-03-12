module.exports = {
    name: 'add',
    description: 'ajouter le bot à sont serveur',
    execute(message) {
      const Discord = require('discord.js');
      const websiteurl = require("./adp/website.json")
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      const addmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png", `${websiteurl}`)
        .setTitle('Ajouter le bot !')
        .setURL('https://discord.com/oauth2/authorize?client_id=662634282451206154&scope=bot&permissions=2146958591')
        .setDescription(`Bonjour/Bonsoir ${message.author.tag} Pour inviter le bot c'est très simple ! clique sur le lien du titre sois "Ajouter le bot !" ou cliquer sur ce lien : https://discord.com/oauth2/authorize?client_id=662634282451206154&scope=bot&permissions=2146958591`)
        .addField(`Pourquoi l'ajouter à sont serveur ?`,`**Ce** bot est simple d'instalation est ne vous demandera pas de longes minutes d'installations (comme MEE6 ou autre)`)
        .addField(`Est t'il vraiment indispensable ?`, `Bien Sûr que non le bot n'est pas indispensable pour un serveur mais pour ne pas se prendre la tête dans un ban manuel ou autre sanction et ou pour chercher un gif de dance par exemple il est plutôt bon`)
        .addField(`Je peut le personnaliser ?`, `Bien sûr le code du bot est open source (Bientôt) sur le github suivant : ${github}    Le bot en lui même ne demande pas de channel spécial et ne prend pas d'informations spéciales sur le serveur (il envoi juste aux log le nom et les id de certains utilisateurs pendant certaines commandes)`)
        .setImage('https://i.pinimg.com/originals/98/41/27/9841275d5372f3d0036c584ad9c9f977.gif')
        .setTimestamp()
        .setFooter(`${discordprofile}`,`${logogif}`)
        .setColor('RED')
        message.channel.send(addmsg);
        console.log(`une personne utilise la commande add dans le serveur :${message.channel.guild}`, `id de l'utilisateur : ${message.author.id}`); 
      }
    }