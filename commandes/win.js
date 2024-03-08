const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'win',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/c70b1d259c277b1f105d7.jpg';
            const msg = `♻️.... QUÊTES RÉUSSI ....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez réussi cette scène et donc vous avez maintenant accès à l'étage suivant mais avant d'y aller assurée vous de quitter cet étage (sortir du groupe) dans un délai de 2min🕘 de peur que votre victoire expire et n'oubliez pas de prendre la récompense de cet étage avant de sortir.
.........⚠️ SAUVEGARDE ⚠️.....
vous pourrez sauvegarder vos progression après avoir dépassé l'étage 2 et l'étage 4 mais à partir de l'étage 5 en allant au dernier étage il n'existe pas de point de sauvegarde alors si vous vous faites tuer a l'étage 5 ,6 ou même à l'étage final...si vous aviez fait la sauvegarde de votre progression vous allez revenir a votre dernier point de sauvegarde avant perdant ainsi tout ce que vous aurez gagner comme récompenses de l'étage 5 à l'étage final 
➖➖➖➖  🌀  ➖➖➖➖
Voici la commande pour sauvegarder votre progression une fois que vous allez dans un point de sauvegarde n'oubliez pas de taper ce symbole ∆ avant d'écrire la commande 👇🏻
➡️save
➖➖ AIDE ♨️➖➖
➡️help

➖➖⚠️WARNING⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
