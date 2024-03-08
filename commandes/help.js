const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'help',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`🧰.. ASSISTANCE TECHNIQUE..⚙️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

ℹ️ *INFORMATIONS* 
 Désolé 😵cher(e) joueurs/joueuses mais ce service est temporairement suspendu 😴 pour une inquiétudes parlez-en au modo..
◈◈◈◈𝗣𝗥𝝝𝗖𝗘𝗗𝗨𝗥𝗘𝗦 ♻️◈◈◈◈ `);
        }
    }
);
