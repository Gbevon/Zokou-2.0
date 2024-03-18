const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'items',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/94d906a80604fe5504630.jpg';
            const msg = `WORLD OF HIDEN BLUE
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒


Voici la liste des items disponible.....♻️👇🏻

          💰PRIX:20.000$ 

𖨠 1 [mangue🥭]+20%❤️+5🔋

𖨠 2 [orange🍊]+20%❤️+5🔋

𖨠 1 [pomme🍎]+20%❤️+5🔋

𖨠 2 [raisins🍇]+20%❤️+5🔋

𖨠 2 [pêche 🍑]+20%❤️+5🔋

𖨠 2 [poire🍐]+20%❤️+5🔋

         💰PRIX:50.000$

𖨠 4 [tomate🍅]+45❤️+15🔋

𖨠 1 [fraise🍓]+40❤️+20🔋

𖨠 3 [cerises 🍒]+50❤️+10🔋

𖨠 2 [banane🍌]+30❤️+30🔋

𖨠 1 [avocat 🥑]+40❤️+20🔋

         💰PRIX:70.000$

𖨠 2 [viande 🍖]+40❤️+60🔋

𖨠 1 [steak 🥩]+50❤️+50🔋

𖨠 2 [poulet🍗]+55❤️+45🔋

𖨠 1 [salade🥗]+40❤️+60🔋

         💰PRIX:100.000$

𖨠 2 [plat de riz🍚]+100❤️+100🔋
𖨠 1 [crevettes 🍤]+100❤️+100🔋
𖨠 2 [plat complet🧆]+150❤️+50🔋
𖨠 1 [nouilles 🍜]+50❤️+150🔋
𖨠 2 [balawoun🍘]+90❤️+110🔋


⛔️[ Vous devez actualisé votre solde après chaque achat]

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
◈◈World Of Hiden Blue◈◈◈◈`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
