const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları -istek-kod yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız -bug-bildir yazarak bize bildirebilirsiniz.

**• Komutlar**
> [-zarat](https://discord.gg/qzHTkhjQgT) →  Zar atarsınız
> [-kasaaç](https://discord.gg/qzHTkhjQgT) → CsGo kasası açmaya ne dersin?.
> [-emojiyazı](https://discord.gg/qzHTkhjQgT) → Emojili yazı yazmaya ne dersin?.
> [-espiri](https://discord.gg/qzHTkhjQgT) → Bot espiri yapar.
> [-sor](https://discord.gg/qzHTkhjQgT) → Bot sorduğunuz soruya cevap verir.
> [-ara112](https://discord.gg/qzHTkhjQgT) → Ambulansı ararsınız.
> [-vine](https://discord.gg/qzHTkhjQgT) → Bot size komik paylaşımlar gösterir.
> [-adamasmaca](https://discord.gg/qzHTkhjQgT) → Adam asmaca oyunu.
> [-balıktut](https://discord.gg/qzHTkhjQgT) → Dereden balık tutarsınız.
> [-tersyazı](https://discord.gg/qzHTkhjQgT) →  Yazdığınız yazıyı bot tersten yazar
> [-mcskin](https://discord.gg/qzHTkhjQgT) →Yazdığınız ismin minecraft görünüşünü atar.
> [-fbi](https://discord.gg/qzHTkhjQgT) → FBİ gifi atar.
> [-token](https://discord.gg/qzHTkhjQgT) →  Botun tokenini gösterir.
> [-düello](https://discord.gg/qzHTkhjQgT) →  Arkadaşlarınızla düello yaparsınız.
> [-wasted](https://discord.gg/qzHTkhjQgT) → Polis tarafından yakalanırsnız
> [-atatürk](https://discord.gg/qzHTkhjQgT) → Atatürk gifi atar.
> [-yumruk-at](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişiye bot yumruk atar.
> [-yazan-kazanır](https://discord.gg/qzHTkhjQgT) → Yazan kazanır oyunu.
> [-kapaklaf](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişiye bot kapaklaf söyler.
> [-kralol](https://discord.gg/qzHTkhjQgT) → Kral olursunuz.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 

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
    name: 'eğlence', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};