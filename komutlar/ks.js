const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const kemalsunal = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Seviliyorsun")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780012966531301396/kemalsunan.gif`)
    return message.channel.send(kemalsunal);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ks',
  description: 'kemalsunal gifi atar.',
  usage: 'kemalsunal'
};