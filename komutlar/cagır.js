const Discord = require("discord.js");

exports.run = async (client, message, params) => {
  let user = message.guild.channels.cache.find(c => c.name === '🔥-yapıcmı-cagır')
//CrewCode
  const juke = await client.channels.get(message.channel.id).createInvite();
  message.delete();

  const CrewCode = new Discord.RichEmbed()
    .setTitle("Owner Bot")
    .setDescription("**Destek Ekibini Buraya Çağırdım**")
    .setFooter("Uzun Bir Süre Cevap Verilmez ise Destek Sunucusuna Gelin!");
  message.channel.send(CrewCode);

  const invite = new Discord.RichEmbed()
    .setAuthor("• Talep")
    .addField(
      "**• Kullanıcı Adı **",
      message.author.username + "#" + message.author.discriminator
    )
    .addField("**• Sunucu Adı **", message.guild.name)
    .setDescription(juke.url);
  user.send(invite)
};
//CrewCode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "cağır"
}; 