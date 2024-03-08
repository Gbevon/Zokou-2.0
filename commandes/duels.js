const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'duels',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/2239c85ebd51245a1258e.jpg';
            const msg = `➖➖➖🛡️ DUELS🛡️
   
➖➖➖➖➖➖➖➖➖
➖➖➖🎮 JOUEURS:

🛡:10% ❤️:100% 🔋:100% 🌀:100%
⏱️TR:0,5s après action🏃‍♂️ VD:3m/s 💪F:2m/s
➖➖➖🎮 JOUEURS :

🛡:10% ❤️:100% 🔋:100% 🌀:100%
⏱️TR:0,5s après action 🏃‍♂️ VD:3m/s 💪F:2m/s
➖➖➖➖➖➖➖➖➖
🌏 ENVIRONNEMENT :

⚖️ supériorité de niveau :

🕓TEMPS DONNÉ :8MIN

👨‍🦽HANDICAP :

     ➖⚙️ RÈGLES PENDANT DUELS

⚠️Toutes formes d'insultes a l'égard du MODOS sont sanctionné .
⚠️Les discussions inutiles pendant les duels sont interdites sauf ceux de vos panel
⚠️Vous pouvez demander au modo de vous donner la situation globale du match ou d'une action adverse mais en précisant que vous mettez en pause⏸️le temps d'une question

⚠️Un retard sans raison valable est sanctionnée
⚠️ Après chaque pannel taguer le modo et attendez sa confirmation avant de next➡️

➖➖➖➖➖➖➖➖➖
⚠️NB: pour une contestation de la décision de l'arbitre vous pouvez faire appel au créateur (wa.me/71187823)mais en cas de tort vous recevrait de grave sanctions 


🌐WORLD OF HIDEN BLUE🌐
`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
