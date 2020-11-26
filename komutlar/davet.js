const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**•Davet**")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
• Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz.** Herhangi bir **bug/hata** bulursanız [-bug-bildir](https://discord.gg/qzHTkhjQgT) ile bize iletebilirsiniz.

• Sunucuma nasıl eklerim?
Sunucuna eklemek istiyorsan [buraya tıklayarak](https://discord.com/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)ekleyebilirsin.

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
    name: 'davet', 
    description: 'davet!',
    usage: '-davet'
};