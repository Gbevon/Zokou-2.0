const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'clans',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖ 🛡️ CONFRÉRIE 🛡️
  
⚠️ NOM DU GROUPE :
➖➖➖➖➖➖➖➖➖
👤CHEF :
➖➖➖➖➖➖➖➖➖
NOMBRE DE MEMBRES :
➖➖➖➖➖➖➖➖➖
MEMBRES DU CLANS/CONFRÉRIE :
➡️
➡️
➡️
➡️
➡️
➡️
➡️
➡️
➖➖➖➖➖➖➖➖➖
📜 Description du clans: 
    
  
➖➖➖➖➖➖➖➖➖
🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);