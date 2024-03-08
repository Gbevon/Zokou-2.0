const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'armes_basiques',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(` ➖🛡️ TOUT SAVOIR SUR( les armes de base)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( armes de base)⬇️
➖➖➖➖➖➖➖➖➖
Dès le début de votre inscription au jeu vous aurez le droit de choisir une arme de base permis les suivantes le temps que vous puissiez vous procurer de l'argent pour acheter des armes plus avancées⬇️
          
⚙️ épée en bois (1m)📦
          
⚙️ bâton en bois(2m)📦

⚙️un nunchaku (2m quand il est déplier)📦

⚙️un bouclier 📦

⚙️une chaine (2m)📦

⚙️une cotte de maille qui permet de réduire légèrement les dégâts des coups 📦

⚙️un marteau de combat en bois(1m)📦

⚙️deux couteau de poche📦

➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐 `);
        }
    }
);