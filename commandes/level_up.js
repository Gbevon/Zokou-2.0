const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'level_up',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/09174a33bf40d1cf2b3a8.jpg';
            const msg = `➖🛡️ TOUT SAVOIR SUR( le level up⬆️)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant (promotion de niveau)⬇️
➖➖➖➖➖➖➖➖➖
          
⚠️ pour monter en niveau vous devez accumulé des points d'expérience appeler (XP🎮) au cours de vos aventures et de vos duels 
          
⚙️ pour monter⬆️ du:

⚠️niveau 1➡️niveau2  :il faut 100XP🎮
⚠️niveau 2➡️ niveau 3:il faut 200XP🎮
⚠️niveau 3➡️ niveau 4:il faut 225XP🎮
⚠️niveau 4➡️ niveau 5:il faut 250XP🎮
⚠️niveau 5➡️ niveau 6:il faut 300XP🎮
⚠️niveau 6➡️ niveau 7:il faut 600XP🎮

⚙️une fois le nombre d'XP 🎮 requis pour passer au niveau suivant rendez vous à la guilde du jeu pour commencer le processus de mise a niveau.
➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
