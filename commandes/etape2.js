const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'b',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/212a79faad1761482d4a2.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: oorh...ooorh. Tsss!!! Qui vas là?? Encore un intrus indésirables ne t'en fais pas je vais me faire un plaisir de t'ecraser
➖➖➖➖  🌀➖➖➖➖
 *Scène:* survivants 
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez ogre 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️ogre
➡️non
➖➖ALL STATISTIQUES ➖➖
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒:200%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒▒▒▒▒▒▒   :50%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
