const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'loose',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/cb1a7900c8f44baf55343.jpg';
            const msg = `♻️... QUÊTES PERDU😞....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez PERDU cette scène et donc vous avez juste 12secondes pour quitter cet étage (sortir du groupe) et retourner a votre dernier point de sauvegarde et donc les éléments et autres que vous avez gagné après avoir quitté votre dernier point de sauvegarde jusqu'à venir à cet étage seront effacer et vous reviendrai au même statistiques que vous aviez au moment de votre dernière sauvegarde et vous pourrez revenir ici a n'importe quel moment 
➖➖➖➖  🌀  ➖➖➖➖
☠️💬: le donjon admire ton courage 🥳et te félicite pour ta force alors tâche de revenir ici une fois que tu auras assez de force pour affronter tes peurs et ton destin💀


➖⚠️ YOU LOOSE😔⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
