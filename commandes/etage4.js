const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'd',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/7b3d386272513121c4a58.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: voyons.. voyons du menu fretin qui se présente face au plus grand prédateurs 😈...je vais tous vous éliminer, vous écorché vif et m'en servir comme paillasson ☠️
➖➖➖➖  🌀➖➖➖➖
 *Scène:* prédateurs 
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez alpha 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️alpha
➡️non
➖➖ALL STATISTIQUES ➖➖
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:50%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
