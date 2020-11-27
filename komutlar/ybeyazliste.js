const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("")
.setDescription(`




**__beyaz listede kimse bulunmuyor.__**

`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 6
};
  
  exports.help = {
    name: 'beyazliste', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-beyazliste'
};