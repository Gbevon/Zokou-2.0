const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'e',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/f34e6ab977a45cd1118e3.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: encore et encore.... encore et encore...😫les faiblard 🫵🏻ne font que venir ici sans savoir qu'il se sont jetés dans la gueule de la mort.....😪🔥
➖➖➖➖  🌀➖➖➖➖
 *Scène:* carnage démoniaque 😈
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez démon 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️démon
➡️non
➖➖ALL STATISTIQUES ➖➖
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:150%❤️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🔋
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒:100%🛡️

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
