module.exports = {
    name: "ban",
    description: "Ban le membre ping",
    execute(message) {
        //const args car sinon un message s'affiche "ReferenceError: args is not defined"
        const args = message.content.trim().split(/ +/g);
        const Discord = require('discord.js');
        const {discordprofile, logogif} = require("./adp/profile.json")
        const websiteurl = require("./adp/website.json")
        const errmsg = new Discord.MessageEmbed()
        .setAuthor('OKΛYA x BC',"",`${websiteurl}`)
        .setColor('#ff0015')
        .setTitle('Impossible de Ban')
        .setFooter(`${discordprofile}`,`${logogif}`)
        .setImage(`${logogif}`)
        //premier test qui vérifie si le bot trouve que la personne est admin ou peut être ban 
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('tu ne peut pas ban tu n\'a pas les permissions de ban une personne dans un de tes rôles')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('je n\'ai pas les perm pour ban.')
        //trouver la personne ping avant de passer les test pour savoir si le bot peut ban
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        //quand le bot ne peut pas trouver l'utilisateur
        if(!args[0]) return message.channel.send('Ping un utilisateur');
         //quand la personne n'est pas sur le serv
        if(!member) return message.channel.send('je n\'arrive pas à le trouver');
        //si la personne est bannable
        if(!member.bannable) return message.channel.send(errmsg)
        let reason = args.slice(1).join(" ");
        if(!reason) reason = 'Okaya raison non spécifié';
          //log les erreurs
         member.ban({ days: 7, reason: `${member} à ban via Okaya`}).catch(err => { 
            message.channel.send('erreur')      
            console.log(Discord.DiscordAPIError);
        })
        //message une fois que l'utilisateur est ban
        const boombangetouttheway = new Discord.MessageEmbed()
        .setTitle('Ban')
        .setURL('https://discord.com/terms')
        .setColor('#ff1100')
        .addField('Utilisateur', member)
        .addField('Ban par', `**${message.author}**` )
        .setImage(`${logogif}`)
        .setFooter(`${discordprofile}`,`${logogif}`) 
        .setTimestamp()
        message.channel.send(boombangetouttheway);
        console.log(Discord.DiscordAPIError);
        console.log("la commande 'ban' à été utilisé par l'utilisateur :", `nom d'utilisateur : ${message.author.tag}/ id ${message.author.id}`," | dans le serveur", `"${message.channel.guild}", sont id du channel : ${message.guild.id}, membre kick ${member.tag}/ id ${member.id}`)
    }
  }
