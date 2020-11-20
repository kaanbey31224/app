const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
const istatistikler = new Discord.MessageEmbed()
.setTitle("Captan istatistik")
.setColor('RANDOM')
.setDescription(`<:manyaq: | Yapımcım` ,`<@754730560009797723>`,true)
  message.channel.send(istatistikler)
}//Manyak*#9999
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};
exports.help = {
  name: 'i',
  description: 'İstatistik Komutu',
  usage: 'i'
}; 