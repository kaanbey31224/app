const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [+kedi](https://discord.gg/qzHTkhjQgT) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [+köpek](https://discord.gg/qzHTkhjQgT) → Sosyal medyalarım. 
> [+tavşan](https://discord.gg/qzHTkhjQgT) → Botta ne kadar komut oldunu gösterir.
> [+inek](https://discord.gg/qzHTkhjQgT) → Botun Pingine Bakarsın. 
> [+maymun](https://discord.gg/qzHTkhjQgT) → Bot hakkında bilgi gösterir


**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
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
    name: 'hayvan', 
    description: 'hayvan gif Listesini Gösterir!',
    usage: '+hayvan'
};