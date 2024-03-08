const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'a',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/a7ecaf4d368ab3e5b0da4.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: voyons.. voyons du menu fretin qui se présente devant moi 😈...je vais tous vous éliminer
➖➖➖➖  🌀➖➖➖➖
 *Scène:* tueurs de goblin
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez goblin 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️goblin
➡️non
➖➖ALL STATISTIQUES ➖➖
▒▒▒▒▒▒                         :30%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒                    :50%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
