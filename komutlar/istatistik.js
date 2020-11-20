const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:manyaq: | Yapımcım` ,`<@754730560009797723>`,true)
.addField(`:mortar_board: |   Developor` ,`<@642790531482648636>`,true)
 .addField(`:rocket: | Toplam Kullanıcı`, `${client.users.cache.size}`, true)
.addField(`:robot: |  Pingim` ,`${client.ws.ping}ms`,true)
 .addField(`:crystal_ball: | Toplam Sunucu`, `${client.guilds.cache.size}`, true)
  message.channel.send(istatistikler)
}//Manyak*#9999
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};
exports.help = {
  name: 'is',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'is'
}