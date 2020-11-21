const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **-istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **-bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> [-medya](https://discord.gg/qzHTkhjQgT) → Sosyal medyalarım. 
> [-toplamkomut](https://discord.gg/qzHTkhjQgT) → Botta ne kadar komut oldunu gösterir.
> [-aile](https://discord.gg/qzHTkhjQgT) → Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?
> [-say](https://discord.gg/qzHTkhjQgT) → Sunucu hakkında detaylı bilgi verir.
> [-avatar](https://discord.gg/qzHTkhjQgT) → Etiketlediğin birisinin avatarını gösterir.
> [-yetkilerim](https://discord.gg/qzHTkhjQgT) → Hangi yetkilere sahip olduğunuzu gösterir.
> [-profil](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişini profilini görürsünüz.
> [-sunucuresmi](https://discord.gg/qzHTkhjQgT) → Sunucu resmini gösterir.
> [-ping](https://discord.gg/qzHTkhjQgT) → Botun Pingine Bakarsın. 
> [-id](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişini ıd sini gösterir 
> [-davet](https://discord.gg/qzHTkhjQgT) → beni sunucuna ekle.
> [-botbilgi](https://discord.gg/qzHTkhjQgT) → Bot hakkında bilgi gösterir
> [-bug-bildir](https://discord.gg/qzHTkhjQgT) → Yazdığınız bug'u yapımcılarıma bildirir.
> [-istek-kod](https://discord.gg/qzHTkhjQgT) → Yazdığınız istek kodu yapımcılarıma bildirir.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedPinCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};