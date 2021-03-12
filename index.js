const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const {github, discordprofile, logogif, youtube, instagram} = require("./src/commands/adp/profile.json")
const {prefix, token, website} = require('./src/sc/private.json');
client.commands = new Discord.Collection();
//status du bot
client.on('ready', () => {
    console.log(`----Bot Code By OKΛYA [BC] Team----`);
    console.log(`|-------------------`);
    console.log(`| Okaya Bot Public Version v1.0`);
    console.log(`|-------------------`);
    console.log(`| Username : ${client.user.tag}`);
    console.log(`| Prefix : ${prefix}`);
    console.log(`| Token : ${token}`);
    console.log(`| Website : ${website}`);
    console.log(`| Servers : ${client.guilds.cache.size}`);
    console.log(`| Users : ${client.users.cache.size}`);
    console.log(`| Channels : ${client.channels.cache.size}`);
    console.log(`|-------------------`);
    console.log(`| Github : ${github}`);
    console.log(`| Discord : ${discordprofile}`);
    console.log(`| Youtube : ${youtube}`);
    console.log(`| Instagram : ${instagram}`);
    console.log(`----Lisence ISC----`);
    //question de ne pas perdre de temps mais si on met ${prefix} il mettera le prefix qu'il faut sans devoir le changer manuellement dans le status directement
  client.user.setActivity(`${client.guilds.cache.size} serveurs  |  ${prefix}help  |  ${website}`)
})
//charge et affiche quand les commandes sont chargées (pour les fichiers json c'est juste pour voir si certains ne sont pas chargés)
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`);
    console.log("   /. Commande chargé  : " + file);
	client.commands.set(command.name, command);
}
const jsonfolder = fs.readdirSync('./src/commands/adp/').filter(jsonfiles => jsonfiles.endsWith('.json'));
for (const jsonfiles of jsonfolder) {
    const jsonfolderr = require(`./src/commands/adp/${jsonfiles}`);
    console.log(" /. Nouveau fichier json chargé : "+ jsonfiles);
}
//reconnaître ce qui est une commande et un message (compare juste le prefix et recherche avec le nom après)
client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase();
    //commande pour voir le ping du bot 
    if(command ==='ping'){
        // le temps est logique calculé en millisecondes
        const pingbot = Date.now() - message.createdTimestamp;
        let jours = Math.floor(client.uptime / 86400000) % 360;
        let heures = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let secondes = Math.floor(client.uptime / 1000) % 60;
        const pingmsg = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('OKΛYA x BC', 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',`${website}`)
        .addField("Ping du Bot",`🏓 Ping du bot : ${pingbot} ms.`)
        .addField("Ping de l'Api", `Ping de l'Api discord : ${Math.round(message.client.ws.ping)}ms`)
        .addField("Je suis en ligne depuis :", `${jours} jours   ${heures} heures   ${minutes} minutes   ${secondes} secondes`)
        .setImage('https://cdn.dribbble.com/users/729829/screenshots/4272534/galshir-pingpong-slow-motion.gif')
        .setTimestamp()
        .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
        message.channel.send({embed: pingmsg}).then(embedMessage => {
            embedMessage.react("🤖");
            console.log(`Le ping du bot : ${pingbot}ms    ping de l'APi discord : ${Math.round(message.client.ws.ping)}      le test à été fait par l'utilisateur : ${message.author.tag}        uptime : ${jours} jours     ${heures} heures    ${minutes} minutes    ${secondes} secondes`);
           });
    } 
    //afficher une photo de rem (demandé par un pote durant une "soirée")
    else if (command == 'rem'){
        client.commands.get('rem').execute(message, args);
    }
    //afficher une photo de ram (demandé par un pote durant une "soirée")
    else if (command == 'ram'){
        client.commands.get('ram').execute(message, args);
    }
    //commande faire pour faire une petite pub en vers ce serveur que je trouve bien (venez ils sont gentils ici)
    else if (command == 'pub'){
        client.commands.get('pub').execute(message, args);
    }
    //commande pour afficher un bon cookie
    else if (command == 'cookie'){
        client.commands.get('cookie').execute(message, args);
    }
    //commande pour dancer :D 
    else if (command == 'dance'){
        client.commands.get('dance').execute(message, args);
    }
    //afficher une photo de emilia (demandé par un pote durant une "soirée")
    else if (command == 'emilia'){
        client.commands.get('emilia').execute(message, args);
    }
    //la commande help qui affiche toutes les commande (oui je me fait chier à écrire chaques commande ici alors que je l'est fait dans cette commande...)
    else if (command == 'help'){
        const helpgeneral = new Discord.MessageEmbed()
       .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png",`${website}`)
       .setColor('RANDOM')
       .setDescription("Le Bot est invitable de partout pour le lien d'invitation il faut demander au créateur ou à un membre Bros Corps ou Okaya ou utiliser une future commande faite pour")
       .addField(`${prefix}help-fun`,"Affiche les commande fun !")
       .addField(`${prefix}help-info`,"Affiche les commandes d'info !")
       .addField(`${prefix}help-love`,"Affiche les commandes de Love~~")
       .addField(`${prefix}help-admin`,"Pour afficher les commandes Disponible uniquement pour les admins !")
       .setTimestamp()
       .setThumbnail('https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif')
       .setImage('https://cdn.discordapp.com/attachments/630461844968046633/787769126033686598/logo2.png')
       .setFooter(`${discordprofile} | `,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
       console.log("la commande 'help' à été utilisé par l'utilisateur :", `${message.author.id}`," | dans le serveur", `"${message.channel.guild}", id du serveur : ${message.guild.id}`)
       message.channel.send({embed: helpgeneral}).then(embedMessage => {
        embedMessage.react("👾");
       });
    }
    //commande pour les info de la team Bros Corps / Okaya
    else if (command == 'info'){
        client.commands.get('info').execute(message, args);
    }
    //donne les info de comment nous rejoindre dans la bros Corps (ou Okaya) Venez on recrute beaucoup  
    else if (command == 'join'){
        client.commands.get('join').execute(message, args);
    }
    //commande pour kick des gens (je l'utilise surtout pour kick mes potes)
    else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    //commande pour afficher le logo de la Okaya
    else if (command == 'logo'){
        client.commands.get('logo').execute(message, args);
    }
    //commande pour afficher ses infos 
    else if (command == 'me'){
        client.commands.get('me').execute(message, args);
    }
    //commande pour afficher les membres de la Bros Corps / Okaya (et tu peut nous rejoindre)
    else if (command == 'mem'){
        client.commands.get('mem').execute(message, args);
    }
    //pour notre Future app ;) 
    else if (command == 'product'){
        client.commands.get('product').execute(message, args);
    }
    //afficher une photo de umaru (demandé par un pote durant une "soirée")
    else if (command == 'umaru'){
        client.commands.get('umaru').execute(message, args);
    }
    //commande pour clear des channels 
    else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    //commande de ban des gens ping
    else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    //commande pour feed des gens 
    else if (command == 'feed'){
        client.commands.get('feed').execute(message, args);
    }
    //ma petite pub :D 
    else if (command == 'okajuni'){
        client.commands.get('okajuni').execute(message, args);
    }
    //commande pour kiss une personne 
    else if (command == 'kiss'){
        client.commands.get('kiss').execute(message, args);
    }
     //commande pour hug une personne 
     else if (command == 'hug'){
        client.commands.get('hug').execute(message, args);
    }
    //commande ajouter le bot !
    else if (command == 'add'){
        client.commands.get('add').execute(message, args);
    }
     //commande pour se suicider avec les pieds
     else if (command == 'suicide'){
        client.commands.get('suicide').execute(message, args);
    }
    //commande pour pat des gens
    else if (command == 'pat'){
       client.commands.get('pat').execute(message, args);
   }
   //commande pour afficher les commande de love~~~ 
   else if (command == 'help-love'){
    const helplove1 = new Discord.MessageEmbed()
      .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png",`${website}`)
     .setColor('RANDOM')
     .setDescription("Le Bot est invitable de partout pour le lien d'invitation il faut demander au créateur ou à un membre Bros Corps ou Okaya ou utiliser une future commande faite pour")
     .addField(`${prefix}feed <Mention>`,"Pour nourrire une personne ;D")
     .addField(`${prefix}pat <Mention>`,"Pour pat une personne ;D")
     .addField(`${prefix}kiss <Mention>`,"Pour embrasser une personne ;D")
     .addField(`${prefix}hug <Mention>`,"Pour faire un câlin une personne ;D")
     .setTimestamp()
     .setThumbnail('https://i.pinimg.com/originals/a2/7e/5e/a27e5e9898c51a6c9f920702cfe87d06.gif')
     .setImage('https://cdn.discordapp.com/attachments/630461844968046633/787769126033686598/logo2.png')
     .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
     console.log("la commande 'help-love' à été utilisé par l'utilisateur :", `${message.author.id}`," | dans le serveur", `"${message.channel.guild}", id du serveur : ${message.guild.id}`)
     message.channel.send({embed: helplove1}).then(embedMessage => {
      embedMessage.react("💟");
     });
   }
   //commande pour afficher les commandes fun
   else if (command == 'help-fun'){
    const helpfun = new Discord.MessageEmbed()
      .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png",`${website}`)
     .setColor('RANDOM')
     .setDescription("Le Bot est invitable de partout pour le lien d'invitation il faut demander au créateur ou à un membre Bros Corps ou Okaya ou utiliser une future commande faite pour")
     .addField(`${prefix}rem`,"Pour afficher Rem")
     .addField(`${prefix}ram`,"Pour afficher Ram")
     .addField(`${prefix}umaru`,"Pour afficher Umaru")
     .addField(`${prefix}hack <Mention>`,"Pour hacker ses amis (pour de faux)")
     .addField(`${prefix}dance`,"Commande pour dancer !")
     .addField(`${prefix}suicide`,"Pour se suicider avec les pieds :D")
     .addField(`${prefix}cookie`,"Envoi un cookie")
     .addField(`${prefix}cry`,"Pour pleurer TwT")
     .addField(`${prefix}pout`, "pour Bouder")
     .addField(`${prefix}hello <Mention>`,"Pour dire Bonjour à une personne ! :D")
     .setTimestamp()
     .setThumbnail('https://media.giphy.com/media/3oFzmkCSEpeDJFi5IA/giphy.gif')
     .setImage('https://cdn.discordapp.com/attachments/630461844968046633/787769126033686598/logo2.png')
     .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
     console.log("la commande 'help-fun' à été utilisé par l'utilisateur :", `${message.author.id}`," | dans le serveur", `"${message.channel.guild}", id du serveur : ${message.guild.id}`)
     message.channel.send({embed: helpfun}).then(embedMessage => {
      embedMessage.react("🍾");
     });
   }
   //commande pour afficher les commades d'info
   else if (command == 'help-info'){
    const helpinfo1 = new Discord.MessageEmbed()
      .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png",`${website}`)
     .setColor('RANDOM')
     .setDescription("Le Bot est invitable de partout pour le lien d'invitation il faut demander au créateur ou à un membre Bros Corps ou Okaya ou utiliser une future commande faite pour")
     .addField(`${prefix}mem`,"Les listes des Membres de la Bros Corps et Okaya (on recrute toujours)")
     .addField(`${prefix}product`,"Donne le lien de téléchargement pour l'application (pas fini)")
     .addField(`${prefix}website`,`Donne les informations sur le site (${website})`)
     .addField(`${prefix}info`,"Les info et explications de pourquoi et quesque la Team Okaya et Bros Corps et leurs fonctionnements")
     .addField(`${prefix}logo`,"Pour le ou les logos si on en à plusieurs")
     .addField(`${prefix}me`,"Montre les infos de votre profil")
     .addField(`${prefix}code`,"Donne le lien vers le code du site")
     .addField(`${prefix}don`,"Donne un petit message d'info pour les dons")
     .addField(`${prefix}join`,"Donne un message d'aide au personne voulant join la Okaya")
     .addField(`${prefix}pub`,"Pub de différents serveurs (qui demande ou que je trouve qui doivent monter)")
     .addField(`${prefix}add`,"Commande pour ajouter le bot dans sont serveur !")
     .addField(`${prefix}ping`,"Commande pour afficher le ping du bot !")
     .setTimestamp()
     .setThumbnail('https://i.pinimg.com/originals/6b/6e/6a/6b6e6ad625caf5cfe546a67a2f545231.gif')
     .setImage('https://cdn.discordapp.com/attachments/630461844968046633/787769126033686598/logo2.png')
     .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
     console.log("la commande 'help-info' à été utilisé par l'utilisateur :", `${message.author.id}`," | dans le serveur", `"${message.channel.guild}", id du serveur : ${message.guild.id}`)
     message.channel.send({embed: helpinfo1}).then(embedMessage => {
      embedMessage.react("🌀");
     });
   }
   //commande pour afficher les commandes admins
   else if (command == 'help-admin'){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Tu ne peut pas Afficher les commandes Admin ! (`il faut que ton rôle ai les permissions administrateur ;)` )')
    const helpadmin1 = new Discord.MessageEmbed()
   .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png",`${website}`)
   .setColor('RANDOM')
   .setDescription("Le Bot est invitable de partout pour le lien d'invitation il faut demander au créateur ou à un membre Bros Corps ou Okaya ou utiliser une future commande faite pour")
   .addField(`${prefix}kick <Mention>`,"Pour kick des gens")
   .addField(`${prefix}clear <Nombre>`,"supprime un nombre décidé de messages")
   .addField(`${prefix}ban <Mention>`,"Pour ban des gens")
   .setTimestamp()
   .setThumbnail('https://thumbs.gfycat.com/EveryUnrulyBabirusa-size_restricted.gif')
   .setImage('https://cdn.discordapp.com/attachments/630461844968046633/787769126033686598/logo2.png')
   .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
   console.log("la commande 'help-admin' à été utilisé par l'utilisateur :", `${message.author.id}`," | dans le serveur", `"${message.channel.guild}", id du serveur : ${message.guild.id}`)
   message.channel.send({embed: helpadmin1}).then(embedMessage => {
    embedMessage.react("🌀");
   });
   }
   //commande pour hacker ses potes ou des gens (pour de faux)
   else if (command == 'hack'){
    client.commands.get('hack').execute(message, args);
   }
   //commande test 
   else if (command == 'test'){
    client.commands.get('test').execute(message, args); 
   }
   //commande pour pleurer
   else if (command == 'cry'){
    client.commands.get('cry').execute(message, args);
   }
   //commande pour dire Bonjour
   else if (command == 'hello'){
    client.commands.get('hello').execute(message, args);
   }
    //commande pour faire un petit don 
    else if (command == 'don'){
      const donmsg = new Discord.MessageEmbed()
      .setAuthor('OKΛYA x BC',"https://cdn.discordapp.com/attachments/630461844968046633/787769144724422676/58fc3c13d622c45ddc19488e5b39fb1a.png",`${website}`)
      .setTitle('Lien cliquable de don')
      .setColor('YELLOW')
      .setURL('https://www.paypal.com/paypalme/okajuni')
      .setDescription(`Commande de don pour le Dévellopeur De Okaya et du site !`)
      .addField(`Pourquoi Faire un don ?`,`Car Okajuni fait depuis longtemps BEAUCOUP trop de code gratuit Certe il est mineur donc il n'a pas vraiment plus boins de cette argent que PCS ou autre Dev Mais pour les gens très gentils ils peuvent !`)
      .addField(`Je peut avoir une chose grâce à se don ?`, `Après la première donnation une commande sera faîte pour tous les remerciers bien évidement et aurons peut être d'autres avantages à avoir avec Okajuni (il faut mettre sont tag discord ou ajouter Okajuni sur discord pour ça)`)
      .addField(`À quoi l'argent vas servir ?`, `L'argent récolté grâce au Bot sera suivant le nombre sera sois pour augmenter la qualité de ses services sois sera reversées dans d'autres projets qui seront encore et pour toujouer open source (sauf si je les garde pour moi)`)
      .addField(`Remerciments`, `Toute la Team Bros Corps et Okaya vous remerci rien que d'utiliser le bot cela nous fait chaud au coeur de servir un minimum à des gens ❤️`)
      .setImage('https://genhq.com/wp-content/uploads/2018/02/CharitibleGiving.gif')
      .setTimestamp()
      .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
      message.channel.send({embed: donmsg}).then(embedMessage => {
          embedMessage.react("💵");
         });
      console.log(`une personne utilise la commande don dans le serveur :${message.channel.guild}`, `id de l'utilisateur : ${message.author.id}`); 
   }
       //commande pour bouder les gens
    else if (command == "pout"){
     client.commands.get('pout').execute(message, args);
    }
       //commande pour info sur le site     
    else if (command == "website"){
     client.commands.get('website').execute(message, args);
    }
});
client.login(token); 
// si vous utilisez heroku et que vous avez mis une variable "token" utilisez la avec    process.env.token 