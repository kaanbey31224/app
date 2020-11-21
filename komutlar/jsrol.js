const Discord = require("discord.js");
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("Bota **Rolleri Yönet** Yetkisi Verirmisin.")
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Rolleri Yönet** Yetkisine İhtiyacın Var`)
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`Bir Rol Etiketlermisin.`)
  
  
  
  db.set(`jsrol.${message.guild.id}`, rol.id)
  message.channel.send(`JavaScript Rölü Başarıyla ${rol} Olarak Ayarlandı.!`)
}

exports.help = {
    name : "js-rol",//Komut ADI
    aliases : ['jsrol'],//Komutun alternatif kullanımları
    open : true,//Komut Kullanıma açık mı kapalı mı
    perm : "no",//Komutu kullanacak Perming adını yaz sunucu sahibi ise owner eğer yok ise "no"
    limit : "0"//saniye olarak komutun cooldown'unu yaz yok ise 0 yaz
   
}
exports.play = {
    usage : "js-rol",//Komutun kullanımı
    description : "js rölünü ayarlarsınız "//komutun açıklaması
}