const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'sphinx',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/53c45c1df3a9f527c73fb.jpg';
            const msg = `♻️.... QUÊTES LANCÉ ....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez lancé la scène (savant de l'au delà) et donc vous avez juste 2min pour lire ceci sans oublier qu'il vous ai impossible de faire marche arrière au moment où vous lisez se message ce qui implique que vous devez terminer cette scène dans le temps imparti et en cas de latence non justifiée vous allez perdre et sans sauvegarde de vos progression vous recommencerais depuis le premier étage
.........⚠️ CONDITIONS ⚠️.....
➡️ répondre à 3 énigmes 
➡️si vous réussissez au moins 2/3 énigmes vous pourrez compenser en donnant 10%❤️ pour remplir cette scène 
➡️ou si vous réussissez au moins 1/3 énigmes vous pourrez compenser en donnant 20%❤️ pour remplir cette scène 
➡️
NB: taper ∆devinette a 3 reprise successivement afin de recevoir les énigmes (attendez qu'une énigmes se termine pour en demander une autre) 
➖➖➖➖  🌀  ➖➖➖➖
Voici la commande pour faire apparaître le panel de combat n'oubliez pas de taper ce symbole ∆ avant d'écrire la commande 👇🏻
➡️panel
➖➖ AIDE ♨️➖➖
➡️help

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
