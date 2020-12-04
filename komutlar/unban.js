const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = args[0]
let guild = message.guild;
let CrewCode = '776784024558895114'

if(!member) return message.channel.send("Banlanan kişinin ID sini girmelisin!")





guild.members.unban(member)

const crew = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Bağışlanan kullanıcı`,`<@${member}>`)
.addField(`Bağışlayan yetkili`,message.author)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı`)
client.channels.cache.get(CrewCode).send(crew)


};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3 
};
exports.help = {
  name: 'unban', 
  description: 'Kullanıcıya Ban Atar',
  usage: '-ban ' 
};