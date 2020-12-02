const Discord = require("discord.js")

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES"))
  return message.channel.send("Bu Komutu Kullanabilmen İçin Rolleri Yönet Yetkilisi Olman Lazım !")

let guild = message.guild;
let isim = args.slice(0).join(" ");
if (!isim)
 return message.channel.send("**Bir İsim Belirtiniz**")

guild.roles.create({
   name: isim
})
 .then(role => message.channel.send(`${role.name} Adlı Rol Oluşturuldu`))
 .catch(console.error)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rololuştur'],
  permLevel: 5
};

exports.help = {
  name: 'oluştur',
  description: "Rol Oluşturur",
  usage: 'oluştur',
  kategori: 'yetkili'
};