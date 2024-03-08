const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'recompenses',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/1a2603de622269bb0523c.jpg';
            const msg = `➖🛡️ TOUT SAVOIR SUR( les récompenses)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( les récompenses )⬇️
➖➖➖➖➖➖➖➖➖
          😃sachez que les récompenses varie selon la difficulté de la mission qui correspondent au niveau attribué a la mission qui varie du niveau 1 au 7 généralement pour les missions vous obtenez pour le :

⚙️niveau 1:50k💰+10XP🎮+1💎
          
⚙️niveau 2:60k💰+10XP🎮+1💎

⚙️niveau 3:70k💰+10XP🎮+2💎

⚙️niveau 4:100k💰+20XP🎮+5💎

⚙️niveau 5:200k💰+30XP🎮+7💎

⚙️niveau 6:250k💰+30XP🎮+7💎

⚙️niveau 7:500k💰+50XP🎮+20💎

Mais il existe aussi des missions spéciales (QUÊTES ÉPHÉMÈRE)attribué par le créateur du jeu et qui rapporte beaucoup plus et ont un niveau de difficulté qui varie .
⚠️ chaque duel entre joueurs donne droit à 40k💰+10XP🎮 pour le gagnant.
⚠️ et pour chaque combat arbitré les modos gagnent 50k💰
⚠️les niveaux de difficulté des missions équivaut au niveau de base des monstres et d'adversaires qui peuvent éventuellement surgir sans oublier qu'il y a un boss de fin a chaque mission de niveau supérieur a celle de la mission et qu'il faudra affronter.
⚠️ après chaque mission réussi les joueurs devront remplir eux mm leurs fiches et les soumettre à la guilde pour être validé.ioben vas de mm pour les duels réussi 

➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
