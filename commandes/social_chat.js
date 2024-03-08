const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'social_chat',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖ 🌐📱SOCIAL CHAT 💬
➖➖➖➖➖➖➖➖➖
📱CHAT💬:


➖➖➖➖➖➖➖➖➖

🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);
