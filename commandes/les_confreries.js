const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'les_confreries',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/874440cd6ef560bcd1a27.jpg';
            const msg = `➖🛡️ TOUT SAVOIR SUR( les_confreries)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant (les_confreries)⬇️
➖➖➖➖➖➖➖➖➖
          
⚠️ pour créer un clan,une confrérie ou un quelconque groupe vous devez être minimum 3, ensuite vous devez choisir le chef de votre groupe ainsi que le nom du groupe puis après vous adresser une requête à la guilde pour vous autorisez a créer votre groupe.
          
⚠️une fois votre groupe créé vous pourrez participer aux quêtes/mission attribuer au groupe ou même envoyé un de vos membres pour aller accomplir une mission ou une quête au nom de votre groupe et mm envoyé des représentants de votre groupe au cours des tournois entre groupes.

⚠️ pour avoir la fiche de création d'un groupe taper(∆clans)

➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
