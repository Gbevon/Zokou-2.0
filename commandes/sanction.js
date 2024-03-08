const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'sanction',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/c7804b8de6271bc1b78c6.jpg';
            const msg = `♻️... SANCTION 💀....♻️

......⚠️ DESCRIPTION ⚠️....

Vous avez été sanctionné pour refus de vous conformer au règle et par conséquent vous allez recevoir une sanction qui est de -20.000$💰 sur votre solde actuel et vous avez juste 12secondes pour quitter cet étage (sortir du groupe) et retourner a votre dernier point de sauvegarde et donc les éléments et autres que vous avez gagné après avoir quitté votre dernier point de sauvegarde jusqu'à venir à cet étage seront effacer et tu reprendra l'aventure au premier étage mais vous pourrez revenir ici a n'importe quel moment a condition de remonter les étages en dessous 
➖➖➖➖  🌀  ➖➖➖➖
☠️💬: le donjon n'aime pas les fraudes ni ton manque de faire play ⚖️et te sanctionne donc pour ça alors tâche de revenir ici une fois que tu auras assez de force,de faire play et d'honneur pour affronter tes peurs et ton destin💀


➖⚠️ SANCTIONNÉE ⚠️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
