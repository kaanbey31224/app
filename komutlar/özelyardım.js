const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» Manyak özel yardım!** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `-istatistik` **Botun İstatistiklerine Bakarsınız!** \n> :floppy_disk: **Prefixim:** `-`")
.setThumbnail("https://media.discordapp.net/attachments/761099716993613824/771060080950247464/gif_4.gif?width=115&height=115")
.setDescription(`

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» -mnk :** birine kapak laf söylemek mi istiyorsun o zmn bu komud tam senin için ;)
> **» -fakemesaj :** demek bu kadar ilerledin bir arkadaşına güzel bi süpriz yapmak istermisin? :D

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **ooooo kimleri görüyorum demekki bu komudun sırrını cözmüşsün helal olsun be dostum..!**
> :open_file_folder: **Bu bilgiyi kimseyle paylaşmassan beni sevindirirsin!**
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
    name: 'mnk-yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};