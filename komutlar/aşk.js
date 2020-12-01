const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        let member = message.guild.member(message.mentions.users.array()[0] ||  message.guild.members.cache.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Aşk ölçmek için birini etiketlemen lazım `)
                        .setColor("RED")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        var crewanasonuc = Math.floor(Math.random() * 101)
        var crewkalp = ''
        var crewkalp = ''
        if(Math.floor(Math.round(crewanasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(crewanasonuc / 10)); i++) {
                        crewkalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        crewkalp += `🖤`
                }
        } else {
                var crewkalp = '🖤'
                var crewkalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var crewyorum = `Sizi evlendirelim <3`
        if(crewanasonuc < 80) {
                var crewyorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
        }
        if(crewanasonuc < 60) {
                var crewyorum = 'Eh biraz biraz bir şeyler var gibi.'
        }
        if(crewanasonuc < 40) {
                var crewyorum = 'c'
        }
        if(crewanasonuc < 20) {
                var crewyorum = 'Seni sevmiyormuş ağa beeeeee...'
        }
        const embed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`NE kadar seviyo bakalım : ${crewanasonuc}\n${crewkalp}${crewkalp}\n\n${crewyorum}`)
                .setColor("RED")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [''],
        permLevel: 0
}
 
exports.help = {
        name: 'aşkımı-ölç',
        description: 'Aşk ölcer.',
        usage: 'aşkımı-ölç'
}