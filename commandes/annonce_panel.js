const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'panel_annonce',
        categorie: 'World of Hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖⭕ ANNONCE SPÉCIAL 📣
  🔰🔰🔰🔰🔰🔰🔰🔰🔰

➖➖➖➖➖➖➖➖➖
➖📣 ANNONCE 🗣️

⚠️urgent:





✍️SOURCE DU MESSAGE :
➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐  `);
        }
    }
);
