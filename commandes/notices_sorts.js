const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'notices_sorts',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/ba63c037cfb606e9c1a53.jpg';
            const msg = `➖🛡️ TOUT SAVOIR SUR( notice des sorts  )🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( la notice des sorts )⬇️
➖➖➖➖➖➖➖➖➖
          
⚠️ pour activer un sort 🌀il faut généralement suivre les 2 étapes de son activation mais dans certains cas il y a que une seule étape à suivre pour activer certains sorts et une fois les sorts activer vous pouvez les lancer sans suivre la 1ere étape et passer directement à la deuxième, pour autant il existe des exceptions car en effet certains sorts ne peuvent être maintenu.

⚠️le lancement du sort coûte -30🌀 et si le lanceur ne modifie pas létat du sort sur son panel alors par défaut le sort est inactif et quand un sort est maintenu il coûte -10🌀 à chaque tours .
          
⚠️ pour terminer quand vous lancer un sort dans votre panel vous devez mettre le nom du sort en parenthèse suivi de ce symbole 🔮 sinon il ne sera pas pris en compte .
➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐
`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
