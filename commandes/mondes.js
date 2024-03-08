const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'mondes',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖🛡️ TOUT SAVOIR SUR( monde et histoire  )🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( monde et histoire )⬇️
➖➖➖➖➖➖➖➖➖
          
⚙️dans le monde de World Of Hiden Blue 🌐il existe différents contré et différentes zones ainsi vous pourrez les explorer pendant vos missions ou en entreprenant des voyages pour les autres contré lointaine .

⚙️afin de rendre le système de jeu plus immersive lorsque vous êtes dans une zone si c'est pour une mission ailleurs vous verrez un portail de déplacement en bas de l'annonce de la mission pour vous y rendre instantanément mais durant votre mission vous serait pendant un court laps de temps retirer de votre zone d'origine car nous partons du principe que vous ne pouvez être a 2endroits a la fois mais néanmoins une fois là mission terminer ou si vous mourez au cours de la mission vous serait réattribué a votre zone d'origine,en cas d'oublie de la part du modo vous pouvez le réclamer via la guilde et pour pouvoir communiquer avec les autres joueurs même pendant vos missions a l'extérieur de la zone où vous êtes nous mettons à votre disposition la plateforme de chat où vous pourrez défier un autre joueur d'une autres zone en duels.   
➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);