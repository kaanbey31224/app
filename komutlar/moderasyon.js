const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CAPTAN v12 sürümüyle sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826>» CAPTAN Moderasyon Komutları <a:maple_leaf:742698148329291826>")
.setDescription("1134407> **-çekiliş** = Çekiliş başlatırsınız. <a:confetti_ball:749525084586115153>")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-moderasyon'
}