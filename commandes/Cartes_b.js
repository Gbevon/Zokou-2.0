const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'mapb',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/5c62aeeacdfff30e3ae7b.jpg';
            const msg = `⭕️ CARTES GRAPHIQUES 🗺️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

𖨠🌎 RÉGION : *TARTAROS💀* 
𖨠🚸 SUPERFICIE : 280km²

             𖨠 DESCRIPTION 𖨠

TARTAROS est une région très dangereuses avec un climat humide et froid (....) ses  forêt abrite une grande variété d'espèces animales et végétales dangereuses ainsi que des surfaces différents par endroits sans oublier sa grande citer fantôme qui est un carrefour commercial du marché noir incontournable et un lieu de découverte historique majeur qui ont été soit volé ou soit caché du monde extérieur (...)

☢️LOCALISATION☢️:
> VOICI LES DIFFÉRENTS ZONES AINSI QUE STRUCTURE EN ALLANT AU ⬇️

𓏒𓏒𓏒𓏒NORD🌎𓏒𓏒𓏒𓏒
Vous verrez une vaste plaine aride , sec avec des vents moyens (🌬️💨)s'étendant sur 30km²⚠️ avec un paysage sombre vu qu'il fait toujours nuit🌒 ici (...)de plus méfiez vous des tempêtes violentent qui propulse des débris de pierre et de sable .... vous pourrez toujours vous abritez dans des grottes pendant les tempêtes et les attaques de loup 🐺qui chassent un meutes

𓏒𓏒𓏒𓏒SUD🌎𓏒𓏒𓏒𓏒
vous verrez une vaste forêt sombre et dangereuses s'étendant sur 35 km² donc vous devez avoir nécessairement être bien équipée  pour vous faciliter la survie face au monstres et autres de niveau allant de 1 à 7 et qui sont au plus profond de la forêt sombre 🌒(....) cette vaste forêt regorgent de ressources en tout genre et d'artefacts  est parfait pour construire un campement ⛺a condition d'avoir des ressources et matériaux🧰...il peut arriver de croiser par moment d'autres joueurs 👤en quête de chasse ...et les animaux qui sont dans cette zone dangereuses sont essentiellement des herbivores 🫎 et des prédateurs féroces🐯

𓏒𓏒𓏒𓏒 EST🌎𓏒𓏒𓏒𓏒
vous verrez des structures de montagnes ⛰️ s'étendant sur 120 km² ainsi que de nombreuses plaine(...) les conditions de survie dans les montagnes sont ardue a cause de l'absence de vivre ainsi que de point d'eau et autres éléments 🧰 nécessaire à la survie..

𓏒𓏒𓏒𓏒OUEST🌎𓏒𓏒𓏒𓏒 
Vous verrez une vaste cité s'étendant sur 100km² avec des (maisons,marchés,...etc)

👥 POPULATIONS : 2000hbts
🪙RICHESSES: la richesse de cette ville est estimé à 370.049.670$💰(grâce à la vente illégal et autres activités)
𖨠REGIME HIÉRARCHIQUE : monarchie 🤴🏻
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
🚸『Differents endroit important de la ville』↴

▪️Le marché noir           ▪️La prison de Fresnes 
▪️Le palais royal            ▪️Le sanctuaire des dieux

⛔️[ Pour demander de l'aide tapez ∆help ]

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
◈◈World Of Hiden Blue◈◈◈◈`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
