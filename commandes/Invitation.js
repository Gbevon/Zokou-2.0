const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'invitation',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/0e896d3a8e71823e56d23.mp4';
            const msg = ` 😃salut à toi champion(e) comment tu vas?? bon laisse moi te parler de ceci juste 2min😉 👇
            GÉNÉRALITÉS :
Baser sur quelques un des meilleurs référence en matière de jeux vidéo immersive,de la VR et des animés,la société de texte gaming :(GOTO-corporation) en collaboration avec NÉOVERSE🔷 en plein émergences et en sinspirant des classiques comme le S.A.O mais encore SHANFRO et bien dautres a mis sur pied le projet baptisé (WOHB) diminutif de World Of Hiden Blue qui est un jeux juste trop ✨🔥 mais je vais pas en dire plus pour le moment et A linscription chaque joueurs recevra 100💰 , c'est sans nul doute la meilleure aventure de votre vie dans WhatsApp 
 alors tu attends quoi?? Rejoins laventure dès maintenant👇🏻 champion(e)
https://chat.whatsapp.com/BVzLayKTnN3JxQHyIY85UM
rejoignez l'aventure la plus intenses de votre vie avec World Of Hiden BLUE 🌎`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
