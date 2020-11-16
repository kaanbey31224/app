const fs=require('fs');
const Discord=require("discord.js");
const client=new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const ayarlar=require("./ayarlar.json");
const express = require('express');
/////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif | Discord = https://discord.gg/Kachy2D"))
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
//////////////////


client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})


client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("dnd");
  client.user.setActivity('-yardım | -davet');
})


const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};



client.on("message", async msg => {
    if(msg.author.bot) return;
    
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["https://","http://","discord.gg",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"]
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak!`).then(msg => msg.delete(10000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });    


client.on("messageUpdate", msg => {
 
 
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["ag","ağzına sıçayım","ahmak","allahını","allahsız","am","amarım","ambiti","am biti","amcığı", "amcığın",  "amcığını","amcığınızı","amcık","amcık hoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla",
"amckta","amcktan","amcuk","amık","amına","amınako","amına koy","amına koyarım","amına koyayım","amınakoyim","amına koyyim","amına s","amına sikem","amına sokam","amın feryadı","amını","amını s","amın oglu","amınoğlu","amın oğlu","amısına",
"amısını","amina","amina g","amina k","aminako","aminakoyarim","amina koyarim","amina koyayım","amina koyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","amin oglu","amiyum","amk","amkafa","amk çocuğu",
"amlarnzn","amlı","amm","ammak","ammna","amn","amna","amnda","amndaki","amngtn","amnn","amona","amq","amsız","amsiz","amsz","amteri","amugaa","amuğa","amuna","ana","anaaann","anal","analarn","anam","anamla","anan","anana","anandan","ananı","ananı",
"ananın","ananın am","ananın amı","ananın dölü","ananınki","ananısikerim","ananı sikerim","ananısikeyim","ananı sikeyim","ananızın","ananızın am","anani","ananin","ananisikerim","anani sikerim","ananisikeyim","anani sikeyim","anann","ananz","anas",
"anasını","anasının am","anası orospu","anasi","anasinin","anay","anayin","angut","anneni","annenin","annesiz","anuna","aptal","aq","a.q","a.q.","aq.","ass","atkafası","atmık","attırdığım","attrrm","auzlu","avrat","ayklarmalrmsikerim","azdım","azdır",
"azdırıcı","babaannesi kaşar","babanı","babanın","babani","babası pezevenk","bacağına sıçayım","bacına","bacını","bacının","bacini","bacn","bacndan","bacy","bastard","basur","beyinsiz","bızır","bitch","biting","bok","boka","bokbok","bokça","bokhu",
"bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","cenabet","cibiliyetsiz","cibilliyetini","cibilliyetsiz","cif","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini",
"dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","dönek","düdük","eben","ebeni","ebenin","ebeninki","ebleh",
"fahise","sikcem",
"fahişe",
"feriştah",
"ferre",
"fuck",
"fucker",
"fuckin",
"fucking",
"gavad",
"gavat",
"geber",
"geberik",
"gebermek",
"gebermiş",
"gebertir",
"gerızekalı",
"gerizekalı",
"gerizekali",
"gerzek",
"giberim",
"giberler",
"gibis",
"gibiş",
"gibmek",
"gibtiler",
"goddamn",
"godoş",
"godumun",
"gotelek",
"gotlalesi",
"gotlu",
"gotten",
"gotundeki",
"gotunden",
"gotune",
"gotunu",
"gotveren",
"goyiim",
"goyum",
"goyuyim",
"goyyim",
"göt",
"göt deliği",
"götelek",
"göt herif",
"götlalesi",
"götlek",
"götoğlanı",
"göt oğlanı",
"götoş",
"götten",
"götü",
"götün",
"götüne",
"götünekoyim",
"götüne koyim",
"götünü",
"götveren",
"göt veren",
"göt verir",
"gtelek",
"gtn",
"gtnde",
"gtnden",
"gtne",
"gtten",
"gtveren",
"hasiktir",
"hassikome",
"hassiktir",
"has siktir",
"hassittir",
"haysiyetsiz",
"hayvan herif",
"hoşafı",
"hödük",
"hsktr",
"huur",
"ıbnelık",
"ibina",
"ibine",
"ibinenin",
"ibne",
"ibnedir",
"ibneleri",
"ibnelik",
"ibnelri",
"ibneni",
"ibnenin",
"ibnerator",
"ibnesi",
"idiot",
"idiyot",
"imansz",
"ipne",
"iserim",
"işerim",
"itoğlu it",
"kafam girsin",
"kafasız",
"kafasiz",
"kahpe",
"kahpenin",
"kahpenin feryadı",
"kaka",
"kaltak",
"kancık",
"kancik",
"kappe",
"karhane",
"kaşar",
"kavat",
"kavatn",
"kaypak",
"kayyum",
"kerane",
"kerhane",
"kerhanelerde",
"kevase",
"kevaşe",
"kevvase",
"koca göt",
"koduğmun",
"koduğmunun",
"kodumun",
"kodumunun",
"koduumun",
"koyarm",
"koyayım",
"koyiim",
"koyiiym",
"koyim",
"koyum",
"koyyim",
"krar",
"kukudaym",
"laciye boyadım",
"lavuk",
"liboş",
"madafaka",
"mal",
"malafat",
"malak",
"manyak",
"mcik",
"meme",
"memelerini",
"mezveleli",
"minaamcık",
"mincikliyim",
"mna",
"monakkoluyum",
"motherfucker",
"mudik",
"oc",
"ocuu",
"ocuun",
"OÇ",
"oç",
"o. çocuğu",
"oğlan",
"oğlancı",
"oğlu it",
"orosbucocuu",
"orospu",
"orospucouguv",
"orospu cocugu",
"orospu çoc",
"orospuçocuğu",
"orospu çocuğu",
"orospu çocuğudur",
"orospu çocukları",
"orospudur",
"orospular",
"orospunun",
"orospunun evladı",
"orospuydu",
"orospuyuz",
"orostoban",
"orostopol",
"orrospu",
"oruspu",
"oruspuçocuğu",
"oruspu çocuğu",
"osbir",
"ossurduum",
"ossurmak",
"ossuruk",
"osur",
"osurduu",
"osuruk",
"osururum",
"otuzbir",
"öküz",
"öşex",
"patlak zar",
"penis",
"pezevek",
"pezeven",
"pezeveng",
"pezevengi",
"pezevengin evladı",
"pezevenk",
"pezo",
"pic",
"pici",
"picler",
"piç",
"piçin oğlu",
"piç kurusu",
"piçler",
"pipi",
"pipiş",
"pisliktir",
"porno",
"pussy",
"puşt",
"puşttur",
"rahminde",
"revizyonist",
"s1kerim",
"s1kerm",
"s1krm",
"sakso",
"saksofon",
"salaak",
"salak",
"saxo",
"sekis",
"serefsiz",
"sevgi koyarım",
"sevişelim",
"sexs",
"sıçarım",
"sıçtığım",
"sıecem",
"sicarsin",
"sie",
"sik",
"sikdi",
"sikdiğim",
"sike",
"sikecem",
"sikem",
"siken",
"sikenin",
"siker",
"sikerim",
"sikerler",
"sikersin",
"sikertir",
"sikertmek",
"sikesen",
"sikesicenin",
"sikey",
"sikeydim",
"sikeyim",
"sikeym",
"siki",
"sikicem",
"sikici",
"sikien",
"sikienler",
"sikiiim",
"sikiiimmm",
"sikiim",
"sikiir",
"sikiirken",
"sikik",
"sikil",
"sikildiini",
"sikilesice",
"sikilmi",
"sikilmie",
"sikilmis",
"sikilmiş",
"sikilsin",
"sikim",
"sikimde",
"sikimden",
"sikime",
"sikimi",
"sikimiin",
"sikimin",
"sikimle",
"sikimsonik",
"sikimtrak",
"sikin",
"sikinde",
"sikinden",
"sikine",
"sikini",
"sikip",
"sikis",
"sikisek",
"sikisen",
"sikish",
"sikismis",
"sikiş",
"sikişen",
"sikişme",
"sikitiin",
"sikiyim",
"sikiym",
"sikiyorum",
"sikkim",
"sikko",
"sikleri",
"sikleriii",
"sikli",
"sikm",
"sikmek",
"sikmem",
"sikmiler",
"sikmisligim",
"siksem",
"sikseydin",
"sikseyidin",
"siksin",
"siksinbayav",
"siksinler",
"siksiz",
"siksok",
"siksz",
"sikt",
"sikti",
"siktigimin",
"siktigiminin",
"siktiğim",
"siktiğimin",
"siktiğiminin",
"siktii",
"siktiim",
"siktiimin",
"siktiiminin",
"siktiler",
"siktimv",
"siktim",
"siktimin",
"siktiminin",
"siktir",
"siktir et",
"siktirgit",
"siktir git",
"siktirir",
"siktiririm",
"siktiriyor",
"siktir lan",
"siktirolgit",
"siktir ol git",
"sittimin",
"sittir",
"skcem",
"skecem",
"skem",
"sker",
"skerim",
"skerm",
"skeyim",
"skiim",
"skik",
"skim",
"skime",
"skmek",
"sksin",
"sksn",
"sksz",
"sktiimin",
"sktrr",
"skyim",
"slaleni",
"sokam",
"sokarım",
"sokarim",
"sokarm",
"sokarmkoduumun",
"sokayım",
"sokaym",
"sokiim",
"soktuğumunun",
"sokuk",
"sokum",
"sokuş",
"sokuyum",
"soxum",
"sulaleni",
"sülaleni",
"sülalenizi",
"sürtük",
"şerefsiz",
"şıllık",
"taaklarn",
"taaklarna",
"tarrakimin",
"tasak",
"tassak",
"taşak",
"taşşak",
"tipini s.k",
"tipinizi s.keyim",
"tiyniyat",
"toplarm",
"topsun",
"totoş",
"vajina",
"vajinanı",
"veled",
"veledizina",
"veled i zina",
"verdiimin",
"weled",
"weledizina",
"whore",
"xikeyim",
"yaaraaa",
"yalama",
"yalarım",
"yalarun",
"yaraaam",
"yarak",
"yaraksız",
"yaraktr",
"yaram",
"yaraminbasi",
"yaramn",
"yararmorospunun",
"yarra",
"yarraaaa",
"yarraak",
"yarraam",
"yarraamı",
"yarragi",
"yarragimi",
"yarragina",
"yarragindan",
"yarragm",
"yarrağ",
"yarrağım",
"yarrağımı",
"yarraimin",
"yarrak",
"yarram",
"yarramin",
"yarraminbaşı",
"yarramn",
"yarran",
"yarrana",
"yarrrak",
"yavak",
"yavş",
"yavşak",
"yavşaktır",
"yavuşak",
"yılışık",
"yilisik",
"yogurtlayam",
"yoğurtlayam",
"yrrak",
"zıkkımım",
"zibidi",
"zigsin",
"zikeyim",
"zikiiim",
"zikiim",
"zikik",
"zikim",
"ziksiiin",
"ziksiin",
"zulliyetini",
"zviyetini","abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç","abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç",    
"aaq","amk","a.m.k","am","a.m","m.k","mk","orosbu çocugu","orospu çocugu","o.ç","oç","oc","o.c","orosbu","orospu","veledi zina","sikerim","sıkerım","s.i.k.e.r.i.m","s.ı.k.e.r.ı.m","piç","pıc","p.i.ç","p.ı.c","orosbu evladı","orospu evladı","amına koyayım","babanı sikim","fuck", "FUCK", "SHIT", "shit", "PORN", "porn", "xnxx", "XNXX","amk","aq","sik","siktir","a q","a mk","oç","oruspu","orusbu","anan","sikerler","sikerim","s1kerler","s1kerim","s1ker1m","wtf","AMK","AQ","ORUSBU","ORUSPU","SİKERLER","GAY","GÖT","ANAN","PORNHUB.COM","pornhub.com","brazzers","BRAZZERS","ANANI","ananı","ananı sikerim","ananı sik","anamı sik","ANANI SİK","ANANI SİKERİM","şerefsiz","Şerefsiz","ŞEREFSİZ","orospu","orospu çocuğu","OC","Piç","PİÇ","yavşak","YAVŞAK","ibne","ipne","İBNE","İPNE","amına korum","pi.ç","piç"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
 


client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
 
                  return msg.reply(
                    'Aleyküm Selam, Hoşgeldin')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    });

client.login(ayarlar.token)

  client.on("ready", () => {
  client.channels.cache.get("776728047884697620").join();//sesli bi kanala katılacagı icin kanal ID si
}) 


client.on("guildMemberRemove", async member => {

  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`)
  if (!kanal) return;
  if (!sayaç) return;
    ///....

  if (!mesaj) {
    return client.channels.get(kanal).send(":loudspeaker: :outbox_tray: Kullanıcı Ayrıldı. `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz!" + "`" + member.user.username + "`");
      }

  if (mesaj) {
    const mesaj31 = mesaj.replace("-uye-", `${member.user.tag}`).replace("-uyetag-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.get(kanal).send(mesaj31);
  }
});


client.on("guildMemberAdd", member => {
let botrolü = '776781897296117770' 
let kayıtsızrolü = '776729108818034708'
  if (member.user.bot) {
  member.roles.add(botrolü) 
 } else {
member.roles.add(kayıtsızrolü) 
};
});


//////////////////////////////////////////////////




client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);


//////////////////////////////////////////////////////////////////////////////////

const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`🚫 ${member.user.tag}\`\` **Adlı Kişi Aramızdan Ayrıldı. \n Kişi Yi Davet Eden** Malesef \`\`Bulunamadı !!!\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(`**🚫 ${member.user.tag}** Adlı Kullanıcı Aramızdan Ayrıldı \nKullanıcıyı Davet Eden **Bulunamadı !!!**`);
    return;
  } else {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(`**🚫 ${member.user.tag}** Adlı Kullanıcı Aramızdan Ayrıldı\nKullanıcıyı Davet Eden **${sa.tag}**`);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`✋ ${member.user.tag}\`\` **Adlı Kişi Sunucuya Katıldı\nKişi Yi Davet Eden** \`\`${davetçi.tag}\`\`\n**Toplam \`\`${sayı2}\`\` Daveti Oldu !!!**`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(`**✋ ${member.user.tag}** Adlı Kullanıcı Aramıza Katıldı \nKullanıcıyı Davet Eden **${davetçi.tag}**\nToplam **${sayı2}** Daveti Oldu !!!**`);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});