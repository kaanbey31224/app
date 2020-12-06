const Discord = require("discord.js");

exports.run = async(client, message, args, ayar, emoji) => {
 if (!message.member.roles.cache.has("783639441839357962") && !message.member.hasPermission('KİCK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField(`\`Bu Komutu Kullanmak içi Yeterli Yetkiniz Yok\``)).then(m => m.delete({timeout: 7000}));
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!uye) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`\`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!\``)).then(x => x.delete({timeout: 5000}));
  uye.roles.remove("780058578736250900").catch();
  uye.roles.remove("780058578736250900").catch();
  if (uye.voice.channel) uye.voice.setMute(false);
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`\`${uye} üyesinin, ${message.author} tarafından mutesi kaldırıldı!\``)).catch();
  client.channels.cache.get("776784024558895114").send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} İsimli Kullanıcının Mutesi Kaldırıldı\n\n• Yetkili: <@!${message.author.id}> \`${message.author.id}\`\n• Kullanıcı: <@!${uye.id}> \`${uye.id}\``)).catch();
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 2,
    aliases: ["unmute","mute-aç","mute-kaldır"]
    }
    
    exports.help = {
  name: "unmute",
  aliases: ['unsusturma', 'susturaç', "açsusturma","susturmaaç"],
  usage: "unmute [üye]",
  description: "Belirtilen üyenin mutesini kaldırır."
    }

/////CrewCode