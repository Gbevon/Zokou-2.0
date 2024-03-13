const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'combat',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/6d3138efcaa992539e3c0.jpg';
            const msg = `➖🛡️ TOUT SAVOIR SUR( dégâts subis & combat)🛡️
  
➖➖➖➖➖➖➖➖➖
😃chat🎧: bienvenue,voici les informations fournies concernant (dégâts subis & combat)⬇️
➖➖➖➖➖➖➖➖➖
          
⚠️les PV ❤️ enlever par un coup sont tous différentes et varie selon la partie toucher en outre vous perdez ⬇️
          
↪️(-10❤️) pour un coup normal 

↪️(-20❤️) pour un coup normal a des endroits sensible comme (la tête,la colonne,les côtes,le cou )

↪️(-30❤️) pour un membre sectionné ou entaillée et de plus vous perdez (-5❤️) chaque tours a cause du saignements 🩸

↪️de plus chaque joueurs possède une zone dans laquelle il peut sentir un danger imminent ⚠️ et essayer de l'éviter,d'esquiver ,de contrer ...,cette zone est appelé la(ZONE DE DÉTECTION⭕) et elle s'étend sur 2m autour du joueurs et lui permet de sentir un danger mm s'il ne le voit pas tant que se danger se trouve dans son champ d'action.

↪️ pour les projectiles vous pouvez en lancer max 2 à chaque étape mais n'oubliez jamais de dégainer une arme pour pouvoir l'utiliser et vous devez toujours préciser le membre  utiliser pour le faire et la partie que vous visez 

➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
