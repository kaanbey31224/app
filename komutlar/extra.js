const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-rol-ver](https://discord.gg/qzHTkhjQgT) → Etiketlediniz kullanıcıya rol verir.
> [-rol-al](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişden rol alır.
> [-anket](https://discord.gg/qzHTkhjQgT) → Anket yaparsınız.
> [-rololuştur](https://discord.gg/qzHTkhjQgT) → Rol oluşturur.
> [-id](https://discord.gg/qzHTkhjQgT) → İstediğin bi kişinin ID sini alır.
> [-davet-oluştur](https://discord.gg/qzHTkhjQgT) → Sunucunun davet linkini atar.
> [-oy-kick](https://discord.gg/qzHTkhjQgT) → Oylama yaparak bir kişiyi sunucudan atar.
> [-hesapla](https://discord.gg/qzHTkhjQgT) → Matamatik işlemi yapar.
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
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};