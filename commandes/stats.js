const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'stats',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/3c8cec2d237cbfe0f12ed.jpg';
            const msg = `➖➖🛡️ TOUT SAVOIR SUR( Stats)🛡️
  
➖➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( stats)⬇️
➖➖➖➖➖➖➖➖➖➖
     ⚠️Les statistiques de chaque joueur varie selon son niveau (level) il lui permet de connaître :sa vitesse de déplacement,ses temps de réaction,la vitesse de ses coups qui est encore égal à la vitesse de ses lancer de projectiles,il    existe 7types de niveau qui correspondent au statistiques de chacun :

🚹level 1(TR=0,5s après une action_VD=3m/s_F=2m/s_DF=10%)
          
🚹level 2(TR=0,5s après une action_VD=4m/s_F=3m/s_DF=20%)

🚹level 3(TR=0,5s après une action_ VD=5m/s_ F=4m/s_DF=30%)

🚹level 4(TR=au même moment que laction,VD=6m/s_F=5m/s_DF=40%)

🚹level 5(TR=0,5s davance sur laction,VD=7m/s_F=6m/s_DF=80%)

🚹level 6(TR=0,5s davance sur laction_VD=8m/s_F=7m/s_DF=90%)

🚹level 7(TR=1s davance sur laction_VD=instantanée_F=7m/s_DF=100%)

TR(temps de réaction)  VD(vitesse de déplacement) F(force) DF(défense)

⚠️NB: la vitesse de déplacement minimale pour tout les niveaux est de 2m/s , lorsque des joueurs de même niveau saffrontent le second réagi à laction du premier avec 0,5s de retard.
⚠️ps:votre défense si vous lutilisez correctement vous permettra dencaisser une attaque mortel en perdant (-10%🛡️)+un certain nombre de pv❤️
➖➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
