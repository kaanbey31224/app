const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embedCrewCode = new Discord.MessageEmbed()
      .setDescription("```⚠ Malesef bu komut kullanmaya yetkin yetmiyor! ⚠ ```")
      .setColor("BLACK");
 
    message.channel.send(embedCrewCode);
    return;
  }
 
  let c = message.mentions.users.first();
  if (!c) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Sunucudan atacağım üyeyi etiketlemelisin!")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embedCrewCode = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`${c} Bu kişinin sunucudan atılmasını onaylıyormusun?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embedCrewCode).then(async function(crewembed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await crewembed.react(emojiArray[0]).catch(function() {});
    var reactions = crewembed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => crewembed.edit("Başarılı bir şekilde İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem Tamamlandı! ${c} adlı kişi sunucudan atıldı!`
        );
 
        message.guild.member(c).kick();
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
  name: "kick",
  description: "kick",
  usage: "kick"
};