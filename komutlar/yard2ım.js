const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("****")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
Captan Ana Menüsüne Hoş Geldin Dostum 
» CAPTAN#7332 Kullanırken » CAPTAN rölünü en yukarıda tutunuz.


**-kayıt-icerik**

> Kayıt,Kutulu **&** Kutusuz,Diğer,Tag rol,
> Koruma,Say,Aktiflik,Mesaj tag.

**-seviye-sistem**

> Basit Seviye,Seviye sırala **&** Büyük 
> depolama alan.

**yardım2** **Menüsün de neler var?**

> Mut,KarantinaiBan,Tolu rol ,Sayaç **&** Oto
> rol,Kısıtlamalar.

**-yardım3** **Menüsün de nerler var?

> Yasak tag,Oto isin,Toplu mesaj,Fake hesap,
> Sunucu tema,Kanal arıdır **&** Rol arıdır.


**İninal Barkod NO:** **123456789123**
**Papara Hesap NO:** **1234567891**




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