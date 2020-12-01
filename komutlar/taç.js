const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {
message.delete();

const CrewCode = new Discord.MessageEmbed()

    .setColor("RED")
    .setDescription(
      `Sunucunun kurucusu bu kişide;<@${message.guild.owner.id}>`
    )
    .setFooter(`Komutu kullanan: ${message.author.tag}`);

return message.channel.send(CrewCode).then(msg => {
msg.delete(30000);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','tac','sahip'],
  permLevel: 0
};

exports.help = {
  name: "taç",
  description: "",
  usage: ""
};