const Discord = require("discord.js")

exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send("Yanlış yazdın dostum Doğru kullanım : **-kanal-id #genel-sohbet**")
message.channel.send(kanal.id)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kanal-id',
  description: 'Discord Code Share filan işte',
  usage: 'kanal-id <kanal>'
}; 