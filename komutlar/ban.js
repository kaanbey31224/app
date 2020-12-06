const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embedCrewCode = new Discord.MessageEmbed()
      .setDescription("```⚠ 😥 Bu komutu kullanmak için yeterince yetkin yok malesef 😥 ⚠ ```")
      .setColor("BLACK");
     if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    
    message.channel.send(embedCrewCode);
    return;
  }
 
  let c = message.mentions.users.first();
  if (!c) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("```Banlayacağım üyeyi etiketlemelisin!```")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
     
  const embedCrewCode = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${c} Bu kişiyi banlanmasını onaylıyormusunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embedCrewCode).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("Başarılı bir şekilde işlem iptal edildi!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem Tamamlandı! ${c} adlı kişi sunucudan Banlandı! 😁`
        );
 
        message.guild.member(c).ban();
      }
    });
  });
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "ban",
  description: "kick",
  usage: "kick"
};