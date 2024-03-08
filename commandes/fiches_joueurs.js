const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'fiches_joueurs',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖🛡️ FICHES DE JOUEURS 🛡️
  
➖➖➖➖➖➖➖➖➖
A REMPLIR PAR LES JOUEURS ET SOUMETTRE A LA GUILDE POUR VALIDATION ✅⤵️



⚙️pseudo👤:

⚙️SEXE  ♐:

➖➖➖⚙️ ARTEFACTS ⚱️

➡️

➡️

➡️

➖➖⚙️SORTS DE BASE🌀
➡️
➖➖⚙️SORTS AVANCÉ 🌀
➡️
➡️
➡️
➖➖⚙️ ÉQUIPEMENTS⛓️
➡️
➡️
➡️
➡️
➡️
⚙️LEVEL:1
⚙️XP🎮:
⚙️DIAMOND💎:5💎
⚙️SOLDES💰:100000$
⚙️ GROUPE👥 :
📞numéro de téléphone :
✅ DERNIÈRE MIS À JOUR 
Le      /   /2024
➖➖➖➖➖➖➖➖➖ 
⚠️NB: pour une inquiétude contacter notre équipe technique 👇
(wa.me/+22871187823)

🌐WORLD OF HIDEN BLUE 🌐  `);
        }
    }
);
