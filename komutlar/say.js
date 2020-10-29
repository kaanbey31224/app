const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 let güvenlik = message.guild.verificationLevel
  if(güvenlik === "NONE") güvenlik = "Yok"
    if(güvenlik === "LOW") güvenlik = "Düşük"
      if(güvenlik === "MEDIUM") güvenlik = "Orta"
   if(güvenlik === "HIGH") güvenlik = "Yüksek"
     if(güvenlik === "VERY_HIGH") güvenlik = " En Yüksek"
  let pc = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size
let web = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size
let mobil = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
  let guild = message.guild;
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(`https://media.discordapp.net/attachments/761099716993613824/771419350828843059/gif_3.gif?width=115&height=115`)
    
        .addField(`<a:mag_right:771416107000922173> **__Sunucudaki Toplam Üye Sayısı__**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
    
        .addField(`<a:mag_right:771416107000922173> **__Toplam Çevrimiçi Üye Sayısı__**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
    
        .addField(`<a:mag_right:771416107000922173> **__Seslideki Üye Sayısı__**`,`**\`\`\`${count}\`\`\`**`)
    
      .addField(`<a:gear:771415920186753034> **__Güvenlik Seviyesi__**`,`**\`\`\`${güvenlik}\`\`\`**`)
    
        .addField(`<a:open_file_folder:771416467051905066>  **__Yazı Kanalları__**`, `» **${textChannels}**`)
    
        .addField(`<a:open_file_folder:771416467051905066>  **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
    
        .addField(`<a:scroll:771416646547406918>  **__Roller__**`,`»  **${message.guild.roles.cache.size}**`)
    
        .addField(`<a:scroll:771416646547406918>  **__Emojiler__**`,`»  **${message.guild.emojis.cache.size}**`)
    
       .addField(`<a:warning:771417064946663445>  **__Boost Seviyesi__**`,`»  **${message.guild.premiumTier}/3**`)
    
        .addField(`<a:warning:771417064946663445>  **__Boost Sayısı__**`,`»  **${message.guild.premiumSubscriptionCount}**`)
    
        .addField(`<a:family_mwgb:771418259672006666> **__Kullanıcılar__**`, ` <:candle:771417797037260830> Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n <:no_entry_sign:771418814755110962> Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n <:biohazard:771419017637527602> Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n <:ghost:771415418778681396> Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n <a:robot:771415675431813140> Botlar : **${botlar}**`, true)
    
     .addField(`<a:small_orange_diamond:771414619776352277> Üyelerin Bağlandığı Cihazlar:`, `**${pc}** Kişi **__Bilgisayardan__**\n**${web}** Kişi **__Webden__**\n**${mobil}** Kişi İse **__Mobilden__** Bağlanıyor!`, false)
    
         .addField(`<a:small_orange_diamond:771414619776352277>  **__Son Üyeler__**`,`\n»  Son 1 **Saatte** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}** \n» Son 1 **Günde** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}** \n»   Son 1 **Haftada** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}** \n»   Son 1 **Ayda** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`)
        .setTitle(`<a:small_orange_diamond:771414619776352277> ${message.author.tag} - Tarafından istendi.`)
    .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
        .setFooter(`© 2020 Captan BOT Tüm Hakları Saklıdır.`, client.user.avatarURL)
    message.channel.send(embed);

} 


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}