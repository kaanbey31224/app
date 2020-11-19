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
> [-moderasyon](https://discord.gg/qzHTkhjQgT) → Moderasyon komudları görüntüler.
> [-kullanıcı](https://discord.gg/qzHTkhjQgT) → Kullanıcı komutları.
> [-eğlence](https://discord.gg/qzHTkhjQgT) → eğlence komutları.
> [-eğlence2](https://discord.gg/qzHTkhjQgT) → eğlence komutları.
> [-logo](https://discord.gg/qzHTkhjQgT) → Logo komutları.
> [-logo2](https://discord.gg/qzHTkhjQgT) → logo komutları.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2020 Captan | Tüm hakları saklıdır.
:flag_sn:  @Manyak*#9999 :flag_tr: 
:flag_sn: @☪ 𝐸𝒮𝑀𝐸𝑅ヅ#1408 :flag_tr: 
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
    name: 'yardımv2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};