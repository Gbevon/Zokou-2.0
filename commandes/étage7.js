const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'g',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/ff92db82da33fe0863dd7.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: voyons.. voyons si tu as pu arriver jusqu'ici sa veut dire que tu est extrêmement fort alors je vais essayer de me lâcher a fond 🔥🔥 prépare toi 🫵🏻a mourir comme du menu fretin
➖➖➖➖  🌀➖➖➖➖
 *Scène:* au porte de la mort☠️
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez boss 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️boss
➡️non
➖➖ALL STATISTIQUES ➖➖
 *Boss de niveau 2* 
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:150%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
