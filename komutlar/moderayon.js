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

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-mute](https://discord.gg/qzHTkhjQgT) →  Etiketlediğin kişiye mute atar!
> [-unmute](https://discord.gg/qzHTkhjQgT) →  Etiketlediğin kişinin mutesini açar!
> [-kayıt-bilgi](https://discord.gg/qzHTkhjQgT) →  Kayıt için bilgi.
> [-taç](https://discord.gg/qzHTkhjQgT) → Sunucunun sahibini gösterir.
> [-sil](https://discord.gg/qzHTkhjQgT) → Yazdığınız miktarda mesajı siler.
> [-ban](https://discord.gg/qzHTkhjQgT) → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> [-kick](https://discord.gg/qzHTkhjQgT) → Etiketlediğiniz kişiyi sunucudan atarsınız.
> [-duyuru](https://discord.gg/qzHTkhjQgT) → Bot yazdıgının mesajı duyuru yapar.
> [-küfür](https://discord.gg/qzHTkhjQgT) → Küfür engel sistemini açarsınız.
> [-reklam](https://discord.gg/qzHTkhjQgT) → Reklam engel sistemi açarsınız.
> [-slowmode](https://discord.gg/qzHTkhjQgT) → Yavaş modu ayarlarsınız. 
> [-forceban](https://discord.gg/qzHTkhjQgT) →  ID ile ban atar!
> [-unban](https://discord.gg/qzHTkhjQgT) → Birisinin banını açarsınız.
> [-sa-as](https://discord.gg/qzHTkhjQgT) →  Sa-As sistemini aktif eder.
> [-sunucubilgi](https://discord.gg/qzHTkhjQgT) →  Sunucu hakkında bilgi verir
> [-üyedurum](https://discord.gg/qzHTkhjQgT) →  Sunucu üyeleri hakkında bilgi verir
> [-çekiliş](https://discord.gg/qzHTkhjQgT) → Çekiliş yaparsınız.


**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Manyak*#9999**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
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
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};