const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'ogre',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/a4ce4320532ed3dd91e4a.jpg';
            const msg = `♻️.... QUÊTES LANCÉ ....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez lancé la scène (survivants) et donc vous avez juste 2min pour lire ceci sans oublier qu'il vous ai impossible de faire marche arrière au moment où vous lisez se message ce qui implique que vous devez terminer cette scène dans le temps imparti et en cas de latence non justifiée vous allez perdre et sans sauvegarde de vos progression vous recommencerais depuis le premier étage
.........⚠️ CONDITIONS ⚠️.....
➡️ affronter l'ogre
➡️survivre 4 tours
➡️
➡️

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
