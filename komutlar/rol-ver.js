const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const CrewCode = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",
        "`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(CrewCode);
  }
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply(
      "❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
    );
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user)
    return message
      .reply("**⚠ Rol verebilmek icin kullanıcının ismini ve verilecek rölü yazmalısın! ⚠ **")
      .catch(console.error);

  user.roles.add(rol);
  const CrewCode = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`
    )
    .setFooter("Captan Bot");
  message.channel.send(CrewCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 5
};
 //Crew Code
exports.help = {
  name: "rol-ver",
  description: "İstediğiniz kişiyi istediğiniz rolü verir.",
  usage: "rol-ver [kullanıcı] [@rol]"
};