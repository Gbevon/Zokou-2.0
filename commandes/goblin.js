const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'goblin',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/53c45c1df3a9f527c73fb.jpg';
            const msg = `♻️.... QUÊTES LANCÉ ....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez lancé la scène (tueurs de goblin) et donc vous avez juste 2min pour lire ceci sans oublier qu'il vous ai impossible de faire marche arrière au moment où vous lisez se message ce qui implique que vous devez terminer cette scène dans le temps imparti et en cas de latence non justifiée vous allez perdre et sans sauvegarde de vos progression vous recommencerais depuis le premier étage
.........⚠️ CONDITIONS ⚠️.....
➡️tuer les 3 goblins
➡️
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
