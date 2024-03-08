const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'soutien',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖🛡️ TOUT SAVOIR SUR(  les personnages de soutien)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( les personnages de soutien)⬇️
➖➖➖➖➖➖➖➖➖
          
⚠️un personnage de soutien est comme un compagnon ou un coéquipier aux quel vous donner des ordres et des instructions. Eux aussi sont régies par la règle des 7 niveau comme pour Celui des joueurs et lui détermine leurs aptitudes.

⚠️ par défaut le niveau de chaque personnage de soutien est de niveau 1 mais il y a des exceptions. Pour augmenter le niveau de vos personnages de soutien il vous faudra suivre le même processus que pour augmenter votre propre niveau.

⚠️les personnages de soutien étant des formes de matériels vous devez par conséquent inscrires leurs nom suivie de leurs niveaux dans la partie équipements de votre fiche.et dès lors vous pouvez les utiliser pour les combats et autres.

⚠️ quand votre personnage de soutien meurs pendant un combat ou une mission il disparaît de vos équipements et vous devez en racheter mais si il est blesser vous pouvez le soigner grâce aux potions de vie ou allez a la guilde pour le faire soigner contre des diamants 💎ou du fric 💰

⚠️ pour utiliser votre personnage de soutien pendant un combat ou autre il vous suffit de les invoquer 
          




➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);