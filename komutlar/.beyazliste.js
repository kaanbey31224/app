const Discord = require ("discord.js");

exports.run = (client, message) => {
 
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embedCrewCode = new Discord.MessageEmbed()
      .setDescription("```⚠ Ne yazık ki bu komutu kullanmaya yetkin yok. ⚠ ```")
      .setColor("BLACK");
 
    message.channel.send(embedCrewCode);
    return;
  }
 
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("")
.setDescription(`




**1.**__BOT List#7928__**(768424361765109791)**
**2.**__Hȥ.𝑬𝑺𝑴𝑬𝑹#1408__**(642790531482648636)**
**3.**__ꅺRONONOA↯〝ZOROꄶ ツ2220__**(727477114101694467)**
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 6
};
  
  exports.help = {
    name: 'beyazliste', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-beyazliste'
};