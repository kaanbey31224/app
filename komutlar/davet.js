const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("PİNK")
.setTitle("**•Davet**")
.setThumbnail("")
.setDescription(`
• Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz.** Herhangi bir **bug/hata** bulursanız [-bug-bildir](https://discord.gg/qzHTkhjQgT) ile bize iletebilirsiniz.

• Sunucuma nasıl eklerim?
Sunucuna eklemek istiyorsan [buraya tıklayarak](https://discord.com/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot) ekleyebilirsin.

• Destek Sunucumuz
[Destek Sunucusuna](https://discord.gg/qzHTkhjQgT) katılarak sizde güzel sohbetlere katılabilirsiniz!

© 2020 Captan | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'davet', 
    description: 'davet!',
    usage: '-davet'
};