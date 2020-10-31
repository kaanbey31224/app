const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `-istatistik` **Botun İstatistiklerine Bakarsınız!** \n> :floppy_disk: **Prefixim:** `-`")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» -moderasyon :** Moderasyon komudları görüntüler.
> **» -kullanıcı :** Userler için açık komudlar...
> **» -eğlence :** Sizi biraz eğlendirir.
> **» -logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **» -eko-yardım :** Ekonomi menüsünü gösterir..!

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kachy2D)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: -yardım**
> :bulb: **Discord Js Sürümü: 12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/Kachy2D)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=769599803708932107&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
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
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};