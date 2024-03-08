const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'bonus',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/fff0eab6806596d17d554.jpg';
            const msg = `☠️➖LA QUÊTE DU MORT ➖
💬: bienvenue 😊 je vois que tu as réussi à monter jusqu'ici alors je te félicite 🎊 en guise de cadeau 🎁 je t'offre l'un de mes sorts a condition que tu remplisses les conditions 
➖➖➖➖  🌀➖➖➖➖
 *Scène:* volonté de fer
➖➖➖➖➖➖➖➖➖
💬: accepter vous cette scène ?? si oui choisissez mage 
➖➖➖➖  🌀  ➖➖➖➖
Pour répondre saisissez les réponses en écrivant ce symbole  ∆ avant d'écrire la réponse (pour accepter la scène écrivez le mot écrit en dessous et pour refuser la scène écrivez non)👇🏻
➡️mage
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
