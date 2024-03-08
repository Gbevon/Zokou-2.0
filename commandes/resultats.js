const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'resultats',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖🛡️ RÉSULTATS 🛡️
  
➖➖➖➖➖➖➖➖➖
👤chat🎧: voici les résultats après ce (      ) 😱sa s'annonce palpitant ....
➖➖➖➖➖➖➖➖➖➖
⚠️ANNONCE ⚠️         






➖➖➖➖➖➖➖➖➖➖
🏟️ ARÈNES :
🛂 MODOS  :

➖➖➖➖➖➖➖➖➖➖
⚠️NB: LA RÉCOMPENSE POUR LES DUELS GAGNER EST DE 10000💰+10XP🎮 ET LES JOUEURS DEVRONS REMPLIR LEURS FICHES ET LE SOUMETTRE A LA GUILDE POUR VALIDATION 

🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);
