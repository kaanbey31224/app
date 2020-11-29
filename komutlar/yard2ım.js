const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
Captan Ana Menüsüne Hoş Geldin Dostum 
@779006421625995345 Kullanırken `` @Captan `` rölünü en yukarıda tutunuz.


``-kayıt-icerik``

>Kayıt,Kutulu ``&`` Kutusuz,Diğer,Tag rol,
> Koruma,Say,Aktiflik,Mesaj tag
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
    name: 'yardım2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};