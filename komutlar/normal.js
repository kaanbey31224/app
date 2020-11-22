const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» Captan Bot** ©️ **]▬▬▬▬▬▬**")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **+yardım**

**• Normal Komutlar**
> [+ara112](https://discord.gg/qzHTkhjQgT) → Ambulansı arar.
> [+ara155](https://discord.gg/qzHTkhjQgT) → Polisi arar.
> [+araba](https://discord.gg/qzHTkhjQgT) → Araba gifi atar.
> [+zeki](https://discord.gg/qzHTkhjQgT) → Zeki gifi atar.
> [+nükler](https://discord.gg/qzHTkhjQgT) → nükler gifi atar.
> [+beşlik](https://discord.gg/qzHTkhjQgT) → beşlik gifi atar.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2020 Crew Code | Tüm hakları saklıdır.
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
    name: 'normal', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};