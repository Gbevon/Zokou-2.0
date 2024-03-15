const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'forge',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/8563ee955348b9b73bc93.jpg';
            const msg = `⚔️ ARMURERIES 🧰
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

👤 FORGERON :Bienvenue à la forge .Mon nom est holaf et je suis le forgeron du jeux prêt à vous servir si besoin.

Voici la liste des armes disponible pour le moment ....♻️👇🏻

𖨠 1 HACHE

𖨠 2 COUTEAUX

𖨠 2 DAGUES 

𖨠 1 PIOCHE 

𖨠 1 FRONTE (05 pierre)

𖨠 1 ARC (05 flèches)

𖨠 1 ÉPÉE (30cm de taille)

𖨠 1 LANCE (60cm de taille)

𖨠 1 TRIDENT (60cm de taille)

𖨠 1 BOUCLIER EN ACIER

𖨠 1 KATANA (50cm de taille)

𖨠 1 CHAÎNE (2m de taille)

𖨠 1 MASSE D'ARMES MÉDIÉVALE

𖨠 1 HALLEBARDE (1,5m de taille)

𖨠 1 COTTE DE MAILLE (couvrant le torse au hanche)

𖨠 1 ARBALÈTE (03 flèches)

⛔️[ La réparation 🧰 d'un équipement d'armement coûte💰 20.000$ pour les armes simple et pour les armes magique ou divin cela coûte💰 50.000$ ]

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
◈◈World Of Hiden Blue◈◈◈◈`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
