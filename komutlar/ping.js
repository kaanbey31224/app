const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const CrewCodeembed = new Discord.MessageEmbed()
  .setTitle("Pingim")
  .setColor("RANDOM")
  .setDescription(`${client.ws.ping} ms`)
  message.channel.send(CrewCodeembed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping'
};
 