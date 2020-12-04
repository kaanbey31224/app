const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = message.mentions.users.first()
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let kanal = '776784024558895114'

if(!member) return message.channel.send("**Banlıyacağım üyeyi etiketlemelisin.**")



if(!sebep) return message.channel.send("**Neden banlayacagını acıklaman lazım...**")


guild.members.ban(member)

const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RED')
.addField(`Banlanan Kullanıcı`,member)
.addField(`:man_police_officer: Yetkili`,message.author)
.addField(`:lock: Sebep`,sebep)
client.channels.cache.get(kanal).send(ban)


};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [''], 
  permLevel: 4
};
exports.help = {
  name: 'ban', 
  description: 'Kullanıcıya Sunucudan Atar', 
  usage: 'ban'
};