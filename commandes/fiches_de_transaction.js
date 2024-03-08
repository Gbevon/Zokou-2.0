const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'fiches_transactions',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖🛍️FICHE DE TRANSACTION 🛍️
  
👤Client :
➖➖➖➖➖➖➖➖➖
♻️Transaction :
➖➖➖➖➖➖➖➖➖
💰Prix:
➖➖➖➖➖➖➖➖➖
💰Solde restant :
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: merci de votre fidélité et nous espérons vous revoir bientôt pour de nouvelles transaction...
➖➖➖➖➖➖➖➖➖

🌐WORLD OF HIDEN BLUE 🌐  `);
        }
    }
);
