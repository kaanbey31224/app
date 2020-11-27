const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("")
.setDescription(`

**• Yapımcı komutları**

**• Komutlar**
> [-karaliste](https://discord.gg/qzHTkhjQgT) → Kara listeyi görüntüler.
> [-beyazliste](https://discord.gg/qzHTkhjQgT) → beyaz listeyi  görüntüler.

**• Bilgilendirme**

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
    name: 'yapımcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yapımcı'
};