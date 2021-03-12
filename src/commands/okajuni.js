module.exports = {
    name: 'okajuni',
    description: "info Okajuni",
    execute(message) {
        const Discord = require('discord.js');
        const websiteurl = require("./adp/website.json")
        const {discordprofile, github, logogif} = require("./adp/profile.json")
        const okajunimsg = new Discord.MessageEmbed() 
        .setAuthor('OKΛYA x BC', 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',`${websiteurl}`)
        .setColor('RANDOM')
        .setImage('https://media.riffsy.com/images/30930d6244791fe296619829f28233ed/raw')
        .setTitle('petites informations')
        .setDescription('pas tellement d\'informations sur moi mais bon on vas pas ce mentir j\'ai pas grand chose à dire')
        .setFooter(`${discordprofile}`,`${logogif}`)
        .addField('Mes Compétences',`Front End dev (dyslexique ça se voit dans mon écriture)`)
        .addField('Choses que j\'ai fait',`bah du coup ce bot, Le site (dispo en cliquant sur 'OKΛYA x BC') + une application qui arrive bientôt`)
        .addField('Pour qui je travail ?',`j'ai toujours travaillé sur des projets pour ma team gratuit et open source sur mon github et je doute que ça change jusqu'à que je sois dans un niveau "pro" dans une entreprise (si j'y arrive)`)
        .addField('Merci !',`${message.author.tag} merci d'avoir ajouté ou utilisé le bot, savoir que le travail que je fait est utilisé me rend vraiment content donc : MERCI !!`)
        .addField('Le bot est t\'il disponible pour tout le monde ?',`Bien sûr qu'il l'es ! vous pouvez l'ajouter à votre serveur avec la commande "owoadd" le code du bot est bientôt disponible sur le github ${github} ! (disponible sur le site et sur le serveur de support)`)
        message.channel.send({embed: okajunimsg}).then(embedMessage => {
          embedMessage.react("💗");
         });
        console.log(`info de Okajuni envoyée à l'utilisateur ${message.author.id}`)
      }
    }