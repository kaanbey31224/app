const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("Captan İstek Sistemi")
.setColor('BLUE')
.setDescription(`**istek Kanalı** ${message.channel.name} \n **istek Bildirilen Sunucu** \`${message.guild.name}\` \n **İstek Bildiren Kullanıcı** <@${message.author.id}> \n **İstenen komut :** \`${istek}\``)
client.channels.cache.get('772082804204896266').send(embed)
  
message.channel.send("Bug bildiriminiz gönderildi. :confetti_ball:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'istek-kod',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}