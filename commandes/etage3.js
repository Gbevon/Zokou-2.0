const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'c',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/aa2e47c0c11b7fca5bf0b.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: la haine et l'amour sont liés et un homme sans haine est un homme sans raison ni amour car c'est l'amour qui naît la haine....
➖➖➖➖  🌀➖➖➖➖
 *Scène:* savant de l'au delà 
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez sphinx 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️sphinx
➡️non
➖➖ALL STATISTIQUES ➖➖
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:∞%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:∞%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
