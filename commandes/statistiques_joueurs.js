const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'statistiques_joueurs',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖🛡️ STATISTIQUES JOUEURS  🛡️
  
➖➖➖➖➖➖➖➖➖
👤chat🎧: voici les statistiques de chacun des joueurs sa s'annonce palpitant 
➖➖➖➖➖➖➖➖➖
PROGRESSION DES  STATISTIQUES             

⚔️PLAYEUR:
🛡:  % ❤️:  % 🔋:  % 

⚔️PLAYEUR:
🛡:  % ❤️:  % 🔋:  % 

⚔️PLAYEUR:
🛡:  % ❤️:  % 🔋:  % 

⚔️PLAYEUR:
🛡:  % ❤️:  % 🔋:  % 

⚔️PLAYEUR:
🛡:  % ❤️:  % 🔋:  %


➖➖➖➖➖➖➖➖➖
⚠️NB: UNE FOIS VOTRE BATTERIE A 0%🪫OU QUE VOTRE NIVEAU DE VIE PASSE A 0%❤️VOUS ÊTES DEAD..

🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);
