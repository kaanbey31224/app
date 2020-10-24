const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("» CAPTAN v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:dizzy:769624534658580607> » CAPTAN'in yardım menüsüne hoşgeldin! <a:dizzy:7769624534658580607>")
 .setTimestamp()
.setDescription("<a:confetti_ball:769626435165749268> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:eyes:769625661241294928> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:baby:769625459901071443> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:low_brightness:769624735235440650> **-logo** = __Logo komutlarını görüntülersiniz.__")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}