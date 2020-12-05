const Discord = require ("discord.js");

exports.run = (client, message) => {
 
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embedCrewCode = new Discord.MessageEmbed()
      .setDescription("```⚠ Ne yazık ki bu komutu kullanmaya yetkin yok. ⚠ ```")
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
 
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("")
.setDescription(`




**__Kara listede kimse bulunmuyor.__**

`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 3
};
  
  exports.help = {
    name: 'karaliste', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-karaliste'
};