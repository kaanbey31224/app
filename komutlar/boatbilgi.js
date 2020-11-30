const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:desktop:** İstatistikler**`,)
  .addField(`:traffic_light: »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:woman_technologist: » Yapımcım :registered: ` ,`<@754730560009797723>`,true)
  .addField(`:globe_with_meridians: » Node.js`, `${process.version}`, true)
.addField(`<a:reminder_ribbon:742698007262396426> Kütüphanesi;`, `Discord.js`, true)
 .addField(`:bricks: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`:family_man_woman_boy: » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`:envelope: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg) **|** [YouTube](https://discord.gg)`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'a',
  description: '',
  usage: ''
}; 