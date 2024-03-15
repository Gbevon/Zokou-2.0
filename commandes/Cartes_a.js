const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'mapa',
        categorie: 'world of hiden blue'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/5c62aeeacdfff30e3ae7b.jpg';
            const msg = `⭕️ CARTES GRAPHIQUES 🗺️
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

𖨠🌎 RÉGION : *GRAFIELD🍀* 
𖨠🚸 SUPERFICIE : 280km²

             𖨠 DESCRIPTION 𖨠
 Bienvenue au point de départ à l'entré de la région de Grafield.
 
 GRAFIELD est une région prospères avec un climat et des saisons varié (....) sa sa forêt abrite une grande variété d'espèces animales et végétales ainsi que des surfaces différents par endroits sans oublier sa grande ville qui est un carrefour commercial incontournable et un lieu de découverte historique majeur

☢️LOCALISATION☢️:
> VOICI LES DIFFÉRENTS ZONES AINSI QUE STRUCTURE EN ALLANT AU ⬇️

𓏒𓏒𓏒𓏒NORD🌎𓏒𓏒𓏒𓏒
a 15km du point de départ vous verrez une vaste forêt (🌳🪵)s'étendant sur 30km²⚠️ avec un grand cours d'eau  de 5m de largeur au centre 🚣‍♂️de cette forêt la coupant en deux et qui vas jusqu'au chute d'eau (....) les animaux 🐗de cette forêt aiment aller vers ce cours d'eau pour boire 

⚠️🐗『ANIMAUX』🐒⚠️↴
➖🫎cerfs et autres herbivores {buffle, antilope,..etc} (430)
➖🐰lapin et petits animaux (801)
➖🐗porcs/phacochère (80)
➖🦎 reptiles en tout genre{serpent, lézard..etc} (345)
➖ 🐺prédateurs en tout genre {ours,loup,..etc} (200)

𓏒𓏒𓏒𓏒SUD🌎𓏒𓏒𓏒𓏒
a 23km du point de départ vous verrez une vaste plaine s'étendant sur 35 km² donc vous devez avoir nécessairement des moyens de transport🏇 pour vous faciliter les déplacements sur longue distance (....) cette vaste plaine recouverte de pierre,de roche..etc est parfait pour construire votre demeure 🏰ou un campement ⛺a condition d'avoir des ressources...il peut arriver de croiser par moment d'autres joueurs 👤...et les animaux qui sont dans cette zone sont essentiellement des herbivores 🫎

𓏒𓏒𓏒𓏒 EST🌎𓏒𓏒𓏒𓏒
a 19km du point de départ vous verrez des structures de montagnes ⛰️ s'étendant sur 120 km² ainsi que de nombreuses plaine(...) les conditions de survie dans les montagnes sont ardue a cause de l'absence de vivre ainsi que de point d'eau et autres éléments 🧰 nécessaire à la survie..

𓏒𓏒𓏒𓏒OUEST🌎𓏒𓏒𓏒𓏒 
a 20km du point de départ vous verrez une vaste ville s'étendant sur 100km² avec des (maisons,marchés,...etc)

👥 POPULATIONS : 1300hbts
🪙RICHESSES: la richesse de cette ville est estimé à 100.049.670$💰
𖨠REGIME HIÉRARCHIQUE : monarchie 🤴🏻
𓏒𓏒𓏒𓏒𓏒𓏒𓏒𓏒
🚸『Differents endroit important de la ville』↴

▪️Le marché de la place            ▪️Le cachot de tibedse
▪️Le palais royal            ▪️Le sanctuaire des dieux

⛔️[ Pour demander de l'aide tapez ∆help ]

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
◈◈World Of Hiden Blue◈◈◈◈`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
