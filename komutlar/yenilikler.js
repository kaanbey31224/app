const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const yenilikler = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Bota Yapılan Yenilikler:`)
    .addField(`1-rol al  \n`,`2-rol ver \n`)
    .addField(`3-exsra yardım  \n`, `4-anket  \n`)
    .addField(`4- rol oluştur \n`, `5-rol bilgi  \n`)
    message.channel.send(yenilikler) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni',],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota Yapılan Yenilikleri Gösterir.',
  usage: 'yenilikler'
};