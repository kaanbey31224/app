const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**   \n\n> :floppy_disk: `-up` **Up yardım !** \n> :floppy_disk: **Prefixim:** `-`")
.setThumbnail("https://cdn.discordapp.com/attachments/761100330024042496/770364982692544552/gif_4.gif")
.setDescription(` 
**▬▬▬▬▬▬▬[** :gear:  **up Yardım Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: ** botunuzu 7/24 yapmakmı istiyon aşagıdaki tıkla yazan yere tıklaman yeterli gerekli bilgi orda (:**
> :open_file_folder: **ilk başta bu sunucuya katılman gerekli [Tıkla!](https://discord.gg/58XwFxu)**
> :round_pushpin: **Gerekli bilgi Destek Sunucumuzda**

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
    name: 'up', 
    description: 'Botun 7/24 komudları gösterir!',
    usage: '-up'
};