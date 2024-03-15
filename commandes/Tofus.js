const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'clans_tofus',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/8da101293305b0e42b7cd.jpg';
            const msg = `➖ 🛡️ CONFRÉRIE 🛡️
  
⚠️ NOM DU GROUPE : confrérie du tofu
➖➖➖➖➖➖➖➖➖
👤CHEF : Arthur 
➖➖➖➖➖➖➖➖➖
NOMBRE DE MEMBRES : 3
➖➖➖➖➖➖➖➖➖
MEMBRES DU CLANS/CONFRÉRIE :
➡️THANATOS GOLD KING
➡️ zekpa
➡️ Eren jeager
➡️
➡️
➡️
➡️
➡️
➖➖➖➖➖➖➖➖➖
📜 Description du clans: un clan accueillant pour tout le monde et protecteur

➖➖➖➖➖➖➖➖➖
🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
