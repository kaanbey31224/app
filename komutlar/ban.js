const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = message.mentions.users.first()
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let kanal = '776784024558895114'

if(!member) return message.channel.send("Banlıyacağım üyeyi etiketlemen lazım.")



if(!sebep) return message.channel.send("Neden Banlıyacaksın bi sebep yaz...")


guild.members.ban(member)

const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Banlanan Kullanıcı`,member)
.addField(`Yetkili`,message.author)
.addField(`Sebep`,sebep)
client.channels.cache.get(kanal).send(ban)


};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [''], 
  permLevel: 0 
};
exports.help = {
  name: 'ban', 
  description: 'Kullanıcıya Ban Atar', 
  usage: '!ban @user <sebep>'
};