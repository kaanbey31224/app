const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.cache.array()
  while (guildArray.length) {
    const embed = new Discord.MessageEmbed();
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
 
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('RANDOM')
      embed.setTitle('<a:sabitlendi:768037585703665694>Sunucular')
      embed.setDescription(`<a:isaret_3:768949706621321219>Büyük bir ailedeyiz !. Ailemde **${bot.guilds.cache.size}**  sunucu var !`)
    }
    message.channel.send({embed: embed});
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz'],
  permLevel: 0,
};

exports.help = {
  name: "aile",
  description: "ne kadar büyük bi aileyiz.",
  usage: "ailemiz"
};