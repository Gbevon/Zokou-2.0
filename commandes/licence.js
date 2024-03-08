const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'licence',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖🛡️ TOUT SAVOIR SUR(la licence 📃)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️ bienvenue,voici les informations fournies concernant la ( licence 📃)⬇️
➖➖➖➖➖➖➖➖➖
          *GÉNÉRALITÉS* :
Baser sur quelques un des meilleurs référence en matière de jeux vidéo immersive,de la VR et des animés,la société de texte gaming :( *GOTO-corporation)* en plein émergences et en sinspirant des classiques comme le S.A.O mais encore SHANFRO et bien dautres a mis sur pied le projet baptisé (WOHB) diminutif de World Of Hiden Blue.
Visant a procuré de nouvelles sensations du texte gaming ou encore du rôle play(RP) le projet WOHB est un jeu non seulement immersive mais aussi qui favorise la réflexion des joueurs grâce au système de free to play (jouer librement) qui leurs permettent une souplesse au niveau des actions et la fluidité des panel tout en respectant quelques règles du warpa dans un cadre de vie très favorable.
Avec un mode de style essentiellement à la fois combat et aventure le jeu est en constante évolution avec des améliorations et modifications au file de laventure afin de mettre en valeurs les potentialités mentale et intellectuelle de chacun de au moins 87% ,en outre ce jeu propose de nombreux fonctionnalités comme la possibilité de naviguer entre les contrés(zone), participer à des quêtes,des duels ,des évènements saisonnier,tournoi,de devenir maître des armes, formateur de nouvelles recrues et plein dautres...
Vous pourrez aussi créer votre confrérie,clans .    Dès inscription chaque joueurs recevra 100💰+la possibilité de choisir un de nos nombreux armes de base en attendant de sen acheter dautres ou de récupérer pendant certaines quêtes.pour savoir plus ou pour rechercher une information rendez vous dans la bibliothèque du jeu:https://chat.whatsapp.com/KaSO1n9BcwmK0CMvW2gDCV

         ⚠️ *règles de confidentialité* ⚠️

Le jeu étant sous licence✍️ et en partenariat avec NÉOVERSE🔷 il vous est interdit de copier partiellement ou totalement les attributs du système (mode de jeu , système de gestion....) Pour vos projets de RP(rôle play 🎮) ou pour créer une communauté quelconque sous peine de plagiat 🚫 et de recèle des information 🤬
Pour contacter notre support technique🎧 en cas de besoin voici le numéro (wa.me/+22891856678)



La société *GOTO-corporation* vous une très belle expérience de jeux 🎮

➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`);
        }
    }
);
