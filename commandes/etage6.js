const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'f',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/d1d6ab79e6d233b35af38.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: voyons.. voyons du menu fretin qui se présente devant moi 😈...je vais tous vous éliminer
➖➖➖➖  🌀➖➖➖➖
 *Scène:* le lien du sang🩸
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez monstre 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️monster
➡️non
➖➖ALL STATISTIQUES ➖➖
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:200%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:50%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
