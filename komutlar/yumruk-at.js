const Discord = require("discord.js");

exports.run = function(client, message) {
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Lütfen Yumruk Atmak İçin Birini Etiketleyin**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**${message.author.username}  Sana Yumruk Attı**`
    )
    .setImage(
      "https://media1.giphy.com/media/f9qqV2Dp84wmIaFjxn/giphy.gif"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yumrukat"],
  permLevel: 0
};

exports.help = {
  name: "yumruk-at",
  description: " Yumruk Atarsınız işte ",
  usage: "-yumruk-at"
};
