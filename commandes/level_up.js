const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'level_up',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/ee86325b6e5f3c777b5b2.jpg';
            const msg = `➖🛡️ TOUT SAVOIR SUR( le level up⬆️)🛡️
  
➖➖➖➖➖➖➖➖➖
💬chat🎧: bienvenue,voici les informations fournies concernant (promotion de niveau)⬇️
➖➖➖➖➖➖➖➖➖
          
✍️ pour monter en niveau vous devez accumulé des points d'expérience appeler (XP🎮) au cours de vos aventures et de vos duels 
          
⚙️ pour monter⬆️ du:

𖨠niveau 1➡️niveau2  :il faut 100XP🎮
𖨠niveau 2➡️ niveau 3:il faut 200XP🎮
𖨠niveau 3➡️ niveau 4:il faut 225XP🎮
𖨠niveau 4➡️ niveau 5:il faut 250XP🎮
𖨠niveau 5➡️ niveau 6:il faut 300XP🎮
𖨠niveau 6➡️ niveau 7:il faut 600XP🎮

⚙️une fois le nombre d'XP 🎮 requis pour passer au niveau suivant rendez vous à la guilde du jeu pour commencer le processus de mise a niveau.
➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
