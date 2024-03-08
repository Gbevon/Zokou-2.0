const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'saved',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`♻️.. *SAUVEGARDE EN COURS* ..♻️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
👤pseudo:

ℹ️ *INFORMATIONS* 
Remplissez les différentes zone de la fiche de sauvegarde avec les objets, artefacts , argent (bref tout ce que vous avez gagné dans les étages du donjon) et au niveau de Équipements inscrivez les armes et autres dont vous disposez 

📦 *ÉLÉMENTS* :
➖
➖
➖
➖
➖
➖
➖
➖
➖
➖
➖
🚹 *STATISTIQUES*:

PV❤️:
ÉNERGIE 🔋:
MANA 🌀:

🧰 *ÉQUIPEMENTS*: 

➖
➖
➖
➖
➖
➖
♻️ *DATE DE SAUVEGARDE* :    /   /24
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
◈◈◈◈𝗣𝗥𝝝𝗖𝗘𝗗𝗨𝗥𝗘𝗦 ♻️◈◈◈◈ `);
        }
    }
);
