const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const ghostabone = message.guild.roles.find(r => r.id === "764184544160514098"); //buraya abone rolünüzün id'sini koyun.
  const ghostlog = message.guild.channels.find(c => c.id === "765909453760626688"); //buraya kayıt log id koyun
  if(!message.member.roles.array().filter(r => r.id === "764182572821381161")[0]) { //buraya abone rolü verecek sorumlunun  id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Abone Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(ghostabone)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Yapıldı")
    .addField(`Abone Rolü Alan Kişi`, `${c.user.tag}`)
    .addField(`Abone Rolü Veren\n`, `${message.author.tag}`)
    .setFooter("Melikşah Yıldız | Abone sistemi")
    .setColor("#000000")
    ghostlog.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["a"],
  permLevel: 0
};
exports.help = {
  name: "a",
  description: "a",
  usage: "a"
};