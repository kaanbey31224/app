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

<a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880>**[**<a:tamir:749238412254642237>  **Bilgilendirme** <a:tamir:749238412254642237>  **]**<a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880><a:Snrsz_renk:769654493704355880>

> <a:isaret_3:768949706621321219> **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> <a:isaret_3:768949706621321219> **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kachy2D)**
> <a:isaret_3:768949706621321219> **Komut hakkında detaylı bilgi için: -yardım**
> <a:isaret_3:768949706621321219> **Discord Js Sürümü: 12.2.0**

**» Bağlantılar** 
<a:galp:769654478517305404>**[Destek Sunucusu](https://discord.gg/Kachy2D)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=769599803708932107&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
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