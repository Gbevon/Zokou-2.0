const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'non',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/e0881f55846ba21f537b5.jpg';
            const msg = `♻️.... QUÊTES REFUSÉ....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez refuser cette scène et donc vous avez juste 12secondes pour quitter cet étage (sortir du groupe) et retourner à l'étage d'où vous êtes venus ceci sans oublier qu'il vous ai impossible de faire marche arrière au moment où vous lisez se message ce qui implique que vous devez quitter cet étage sous peine de sanction du jeux dans le temps imparti. vous pourrez revenir ici une fois que vous aurez réussi la quête de l'étage en dessous encore une fois 
➖➖➖➖  🌀  ➖➖➖➖
☠️💬: le donjon n'aime pas les peureux 😰ni les froussard 😨 alors tâche de revenir ici une fois que tu auras assez de courage pour affronter tes peurs et ton destin💀


➖⚠️ FUYARDS OUT⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
