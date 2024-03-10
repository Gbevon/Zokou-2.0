const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'ma',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/5c62aeeacdfff30e3ae7b.jpg';
            const msg = `⭕️ MODE AVENTURES🗺️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

𖨠🌎 RÉGION :
𖨠🚸 SUPERFICIE : 280km²

𓏒𓏒𓏒𓏒 NORD🌎𓏒𓏒𓏒𓏒



𓏒𓏒𓏒𓏒🌎SUD🌎𓏒𓏒𓏒𓏒



𓏒𓏒𓏒𓏒🌎EST🌎𓏒𓏒𓏒𓏒



𓏒𓏒𓏒𓏒OUEST🌎𓏒𓏒𓏒𓏒
⚠️ Cette fiche résume ce qui se passe dans les différents endroits ci-dessus, les joueurs devront écrire leurs panel en fonction de se qui se passe dans l'endroit où ils sont
☣️ a pied sans moyen de transport vous ne pouvez parcourir que max 1km a chaque panel mais avec un moyen de transport vous ne pouvez parcourir que max 3km a chaque panel`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
