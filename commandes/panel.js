const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'panel',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖➖🛡️PANEL DE COMBAT🛡️➖
  
➖➖➖➖➖➖➖➖➖➖➖➖➖
🌀SORT :off
➖➖➖➖➖➖➖➖➖➖➖➖➖
🚹LEVEL :1
➖➖➖➖➖➖➖➖➖➖➖➖➖
DISTANCE :5m
➖➖➖➖➖➖➖➖➖➖➖➖➖
💬chat🎧: 
➖➖➖➖➖➖➖➖➖➖➖➖➖
                ÉTAPE 1⬇️

🔰


                ÉTAPE 2⬇️

🔰



➖➖➖➖➖➖➖➖➖➖➖➖➖
💬Chat🎧:
➖➖➖➖➖➖➖➖➖➖➖➖➖
🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);