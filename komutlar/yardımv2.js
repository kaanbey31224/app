const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/Kachy2D)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=769599803708932107&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: -yardım

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **-istek-kod** yazarak bize iletebilirsiniz

**• Komutlar**
>  [-moderasyon](https://discord.gg/Kachy2D)  **→ Moderasyon komudları görüntüler.**
> **» -kullanıcı :** Userler için açık komudlar...
> **» -eğlence :** Sizi biraz eğlendirir.
> **» -eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> **» -logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **» -logo2 :**logo2 kamutlarıyla sizlerle...

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

© 2020 Captan | Geliştiriciler, ve   adlı kişilerdir. Bu kişilerden başka geliştirici yoktur!

`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

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