const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()


.setColor('#00FF0A')
        .addField ('https://www.youtube.com/watch?v=mX9pX0dM_ew')
 

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
    name: 'yarra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yarra'
};