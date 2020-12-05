const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const Crewembed = new Discord.MessageEmbed()
  .setTitle("<a:piiing:782890760936751126> Pingim!")
  .setColor("BLACK")
  .setDescription(`${client.ws.ping} ms`)
  message.channel.send(Crewembed)
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
 