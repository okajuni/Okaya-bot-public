module.exports = {
    name: 'hack',
    description: 'hacker une personne (pour de faux)',
    execute(message) {
      const Discord = require('discord.js');
      const args = message.content.trim().split(/ +/g);
      const {discordprofile, logogif, github} = require("./adp/profile.json")
      function wait(ms){
        let start = new Date().getTime();
        let end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
    }
    const victimuser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return message.channel.send('Pour hacker une personne il faut ping une personne après la commande !');
     
    message.channel.send(`{Hacking  ${victimuser}... Status: 0% (NE PAS SUPPRIMER CE MESSAGE)}`)
    .then(msg => {
        wait(93);
        msg.edit(`{Hacking  ${victimuser}... Status: 1% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(100);
        msg.edit(`{Hacking  ${victimuser}... Status: 9% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(20)
        msg.edit(`{Hacking  ${victimuser}... Status: 15% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(90);
        msg.edit(`{Hacking  ${victimuser}... Status: 17% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(60);
        msg.edit(`{Hacking  ${victimuser}... Status: 19% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(60);
        msg.edit(`{Hacking  ${victimuser}... Status: 21% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(40);
        msg.edit(`{Hacking  ${victimuser}... Status: 23% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(10);
        msg.edit(`{Hacking  ${victimuser}... Status: 27% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(12);
        msg.edit(`{Hacking  ${victimuser}... Status: 31% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(13);
        msg.edit(`{Hacking  ${victimuser}... Status: 33% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(80);
        msg.edit(`{Hacking  ${victimuser}... Status: 35% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(80);
        msg.edit(`{Hacking  ${victimuser}... Status: 36% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(80);
        msg.edit(`{Hacking  ${victimuser}... Status: 38% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(40);
        msg.edit(`{Hacking  ${victimuser}... Status: 41% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(60);
        msg.edit(`{Hacking  ${victimuser}... Status: 47% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(50);
        msg.edit(`{Hacking  ${victimuser}... Status: 53% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(35);
        msg.edit(`{Hacking  ${victimuser}... Status: 58% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(80);
        msg.edit(`{Hacking  ${victimuser}... Status: 66% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(60);
        msg.edit(`{Hacking  ${victimuser}... Status: 74% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(20);
        msg.edit(`{Hacking  ${victimuser}... Status: 79% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(83);
        msg.edit(`{Hacking  ${victimuser}... Status: 80% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(50);
        msg.edit(`{Hacking  ${victimuser}... Status: 85% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(14);
        msg.edit(`{Hacking  ${victimuser}... Status: 93% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(70);
        msg.edit(`{Hacking  ${victimuser}... Status: 97% (NE PAS SUPPRIMER CE MESSAGE)}`);
        wait(90);
        msg.edit('Status: 100% terminé (`https://tryhackme.com/jr/blue`)').then(msg => {
            msg.delete({timeout: 3.5})
            const clearmessagehacking = new Discord.MessageEmbed()
                .setAuthor('OKΛYA x BC')
                .addField(`**Le hack de {${victimuser}} est fin ! ${message.author.tag}.**`, "*** je vais t'envoyer en DM : sont IP, Sont Mdp (mot de passe) et un Exploit pour contrôler sont téléphone/Pc***")
                .setTimestamp()
                .setImage('https://thumbs.gfycat.com/CoordinatedWelcomeBrownbear-size_restricted.gif')
                .setFooter(`${discordprofile}`,'https://media.discordapp.net/attachments/614504741665374218/784512912370171944/test.gif')
                .setColor('RED')
                message.channel.send({embed: clearmessagehacking}).then(embedMessage => {
                  embedMessage.react("👨‍💻");
                 });
            })
      })
    }
}