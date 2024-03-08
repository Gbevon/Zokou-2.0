const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'les_instructions',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/fcf411d0c7c0ece974a53.jpg';
            const msg = ` ➖🛡️ TOUT SAVOIR SUR(les instructions)🛡️
  
➖➖➖➖➖➖➖➖➖
⚠️chat🎧: bienvenue,voici les informations fournies concernant ( les_instructions )⬇️
➖➖➖➖➖➖➖➖➖
          
 ⚠️un panel est composé de 2 étapes:
          
⚙️la première où vous débutez laction et la deuxième où vous lachevez par conséquent vous ne pouvez faire que 3 action dans un panel et seulement 2actions par étape en précisant que les 2actions lors de létape 1 ou 2 se font en (combos)👈 .

⚙️sinon laction ne sera pas prise en compte , de plus quand  vous voyez ceci 👉(MC🚫 ) cela veut dire que vous avez effectué une mauvaise action ou une mauvaise manœuvre 

⚙️ lorsque létape 1 de votre panel est stoppé de manière à ne plus pouvoir enchaîné avec la seconde automatiquement votre étape 2 ne pourra plus avoir lieu, même chose pour les combos et par conséquent vous devez aussi préciser dans votre panel les détails de vos actions Tel que: votre position comparer a ladversaire,le membre utiliser pour donner un coup ou réaliser une action,le membre ou la partie viser par votre coup ou attaque.

⚙️vous devez aussi préciser le type de course : exemple (en arc,de front,en zigzag...etc) et noubliez jamais de modifier la distance lorsque vous vous déplacez ou que ladversaire se déplace par rapport à vous :

⚙️ quand vous êtes a 0m de ladversaire vous devez écrire close lorsque vous êtes par exemple a 2m de ladversaire vous devez écrire 2m et quand vous étiez par exemple a 2m et que vous entamer une procédure pour vous rapprocher où vous éloigner si sais pour vous rapprocher écrivez(2m>close) et si sais pour vous éloigner écrivez (2m>suivi de la distance de votre éloignement)

⚙️vous pouvez annuler une action en cours mais cela vous coûtera (-20%🔋)...un bond ,saut ou même course coûte (-10%🔋) ...pour esquivez et contre attaquez vous perdez (-30%🔋)

⚙️survolte⚡: il permet de rattraper un retard, d'augmenter sa vitesse de déplacement d'un coup ou d'augmenter la vitesse d'une attaque physique en outre lorsqu'un violent choc frappe votre tête ou même votre visage vous êtes désorienté et le survolte⚡ vous permet de reprendre vos esprits car en survoltant⚡ vous pomper dans vos réserve d'énergie de manière instantané et donc cela coûte -20🔋et il vous ai impossible de survolter⚡ un sort mais plutôt tout ce qui concerne votre physique pour augmenter sa vitesse le temps de l'action et après il disparaît 

➖➖➖➖➖➖➖➖➖


🌐WORLD OF HIDEN BLUE 🌐 `;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
