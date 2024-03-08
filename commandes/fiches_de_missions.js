const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'fiches_missions',
        categorie: 'world of Hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖🛡️FICHES DE MISSIONS 🛡️
  
⚠️ LIEUX :
➖➖➖➖➖➖➖➖➖
RÉCOMPENSES :
➖➖➖➖➖➖➖➖➖
NIVEAU DE MISSIONS :
➖➖➖➖➖➖➖➖➖
JOUEURS POUR LA MISSION :
➡️
➡️
➡️
➡️
➡️
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue pour cette nouvelle quêtes/missions voici les informations dont nous disposons ⬇️
➖➖➖➖➖➖➖➖➖
           DÉTAILS DE LA MISSION ⬇️

🔰


                 CONDITIONS A REMPLIR POUR RÉUSSIR LA MISSION ⬇️

🔰



➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐  `);
        }
    }
);
