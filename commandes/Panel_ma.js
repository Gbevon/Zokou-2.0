const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'panela',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;

        if (!arg[0]) {
            repondre(`➖➖🛡️PANEL MODE AVENTURE 🛡️➖
  
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
🌎 RÉGION :
⚠️ ZONE :
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
🚹LEVEL :1
👣 DISTANCE PARCOURUE :
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
          🧰 RESSOURCES 🧰
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒

🏇 TRANSPORT :
🪚 OUTILS TRAVAIL :
🪙 FINANCE :
🪵 MATÉRIAUX :
⚔️ ARMES:
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
👤 players :

           📊 STATISTIQUES 
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
❤️ PV :200%
🔋power:500%
🛡️ Défense :50%
🌀Mana :200%
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
💬chat🎧: 
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
                ÉTAPE 1⤵️
🔰

                ÉTAPE 2⤵️
🔰
𓏒𓏒INVENTAIRE RÉCOLTER 🧰𓏒𓏒
🔰

🔰
🔰

🔰
🔰
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
🌐WORLD OF HIDEN BLUE 🌐`);
        }
    }
);
