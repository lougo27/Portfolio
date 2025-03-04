const containerList = document.getElementsByClassName('container');


let photoProjet = [
  { 
    nom: 'Game Museum',
    src: 'projets/GameMuseum.png',
    titre: 'Game Museum',
    conclusion: 'Allez voir dans les projets scolaires !',
    description: "Dans le cadre de mon apprentissage du JavaScript, nous devions créer une carte web avec un objet et générer les éléments grâce aux boucles. On devait aussi intégrer un switch au niveau du mode d'affichage. <br><br>Comme j’avais déjà commencé à apprendre le JS en autodidacte, j’ai voulu aller plus loin en me lançant un défi : concevoir une borne d’arcade et intégrer cartes directement à l’écran ! <br><br>Le projet est toujours en cours de réalisation !",
    Image: 'assets/images/projets/GameMuseum.png',
    medias: [
      { type: "img", path: "assets/images/projets/GameMuseum.png" },
    ]
  },
  { 
    nom: 'Memory',
    src: 'vignettes/Memory-100.jpg',
    titre: "Jeu de Memory",
    description: "En jouant au memory avec ma famille, j’ai été tout de suite intriguée par son fonctionnement. Très vite, une question m’est venue : comment pourrais-je coder un jeu comme celui-ci ? <br><br>Curieuse d’explorer cette idée, j’ai rassemblé des photos de ma galerie et créé différentes catégories pour donner vie à ma propre version : une galerie photo façon Memory !",
    conclusion: 'Allez voir dans les projets personnels !',
    medias: [
      { type: "img", path: 'assets/images/projets/galeriePhotos.png' },
      { type: "img", path: 'galeriePhotos2.png' },
    ]
  },
  {
    nom: 'Bubble Game',
    titre: 'Bubble Game',
    src: 'vignettes/bubble-100.jpg',
    description: "C’était mon tout premier projet en code que j'ai fait lorsque j'était encore au lycée ! J’ai donc commencé avec la librairie P5.js avant de passer sur Visual Studio Code. <br><br>Passionnée par les petits jeux vidéo, j’ai voulu en créer un. J’ai d’abord imaginé Bubble, un personnage au design épuré avec des yeux qui louchent (je voulais reprendre le tout premier personnage que j'avais coder même si j'avais fait une erreur dans la création de ses yeux). De là, l’idée m’est venue de concevoir quatre petits jeux, un pour chaque saison. <br><br>Le premier Bubble Game en hivers consiste à faire slalomer Bubble entre des cailloux lors de sa descente en ski… et plus ça va, plus ça s’accélère ! ⛷️ <br><br>Ci-dessous, la maquette réalisée en début de projet.",
    conclusion: 'Allez voir dans les projets personnels !',
    medias: [
      { type: "video", path: 'assets/images/projets/bubble_video.MOV' },
      { type: "img", path: 'assets/images/projets/sabre_blender.png' }
    ]
  },
  { 
    nom: 'Happy Survival',
    src: 'vignettes/happy-100.jpg',
    titre: 'Happy Survival',
    conclusion: 'Allez voir dans les projets scolaires !',
    description: "En décembre, j’ai eu la chance d’effectuer un stage de deux semaines chez Sisméo Paris, où j’ai travaillé sur un projet interne touchant à plusieurs domaines. <br><br>J’ai d’abord exploré le graphisme, en créant un logo sur Illustrator et des mockups sur Photoshop. Ensuite, je me suis plongée dans l’UX/UI design, en concevant la maquette du site sur Figma. Enfin, j’ai mis en pratique mes compétences en développement web en réalisant le site et son adaptation responsive sur WordPress avec Elementor.",
    medias: [
      { type: "img", path: "assets/images/vignettes/happy-100.jpg" },
      { type: "video", path: "assets/images/projets/naviguation-site_happy.mp4" },
    ]
  },
  { 
    nom: 'Hype',
    src: 'vignettes/pingo-100.jpg',
    titre: "Animation Hype",
    description: "En cours, nous avons également découvert Hype, un logiciel permettant de créer des animations de manière intuitive et efficace. <br><br>Pour l’explorer, j’ai réalisé deux courtes animations : une bannière animée et une animation de logo.",
    conclusion: 'Allez voir dans les projets scolaires !',
    Image: 'vignettes/pingo-100.jpg',
    medias: [
      { type: "video", path: 'assets/images/projets/Logo_anime.mp4' },
      { type: "img", path: 'galeriePhotos2.png' },
    ]
  },
  {
    nom: 'Animation Blender',
    titre: "Animation Blender",
    conclusion: "Allez voir dans les projets scolaires !",
    src: 'vignettes/blender-100.jpg',
    description: "Lors d’un workshop d’une semaine, notre filière a eu l’opportunité de découvrir Blender. Nous avons d’abord appris à modéliser des objets, comme la dague ci-dessous, avant de réaliser une courte animation inspirée du Memphis Design, avec un rendu en cell-shading. <br><br>Au fil du projet, nous avons exploré la modélisation, l’unwrapping, le texturing, l’animation, la mise en scène et les réglages de rendu sur Blender. Seul le personnage a été importé depuis Mixamo. <br><br>Cette expérience m’a donné envie d’aller plus loin et de me plonger dans Three.js pour intégrer de la 3D dans des sites web !",
    medias: [
      { type: "video", path: 'assets/images/projets/anim_blender.mp4' },
      { type: "img", path: 'assets/images/projets/sabre_blender.png' }
    ]
  },
  { 
    nom: 'The Maze Game',
    src: 'projets/maze.png',
    titre: "The Maze Game",
    description: "The Maze est le premier défi que je me suis lancé en apprenant le JavaScript. <br><br> Un week-end, je me suis mise au défi de créer un jeu en une après-midi, et l'idée d'un labyrinthe m'est alors venue. <br><br> J'ai commencé par générer un labyrinthe de façon aléatoire, avant d'implémenter le déplacement du personnage, un minuteur et la sauvegarde du meilleur temps via le local storage. Puis, voyant le temps défiler, j'ai rapidement conçu une interface, ce qui m'a valu quelques erreurs dans mon code. <br><br> Enfin, lors de la dernière demi-heure, j’ai entièrement composé la musique d’ambiance avec Soundtrap pour finaliser mon défi.",
    conclusion: 'Allez voir dans les projets personnels !',
    medias: [
      { type: "img", path: 'assets/images/projets/TheMazeImage.png' },
    ]
  },
  { 
    nom: 'Le Monde de Sharky',
    src: 'vignettes/sharky-100.jpg',
    titre: 'Le Monde de Sharky',
    conclusion: 'Allez voir dans les projets scolaires !',
    description: "Pour notre projet de synthèse de fin de semestre à Gobelins Paris, nous avons créé, en équipe de trois, un site interactif fonctionnant comme un jeu à choix, visant à sensibiliser les jeunes aux addictions aux réseaux sociaux et à l’isolement social qu’elles peuvent engendrer. <br><br>Dans ce projet, j’ai réalisé la vidéo en motion design sur After Effects, que j’ai appris en autodidacte, ainsi que certains graphismes.",
    medias: [
      { type: "video", path: "assets/images/projets/Teaser_Sharky_1.mp4" },
      { type: "img", path: "GameMuseum2.png" },
      { type: "img", path: "GameMuseum3.png" }
    ]
  },
  
  { 
    nom: 'Game Museum',
    src: 'projets/GameMuseum.png',
    titre: 'Game Museum',
    conclusion: 'Allez voir dans les projets scolaires !',
    description: "Dans le cadre de mon apprentissage du JavaScript, nous devions créer une carte web avec un objet et générer les éléments grâce aux boucles. On devait aussi intégrer un switch au niveau du mode d'affichage. <br><br>Comme j’avais déjà commencé à apprendre le JS en autodidacte, j’ai voulu aller plus loin en me lançant un défi : concevoir une borne d’arcade et intégrer cartes directement à l’écran ! <br><br>Le projet est toujours en cours de réalisation !",
    Image: 'assets/images/projets/GameMuseum.png',
    medias: [
      { type: "img", path: "assets/images/projets/GameMuseum.png" },
    ]
  },
  { 
    nom: 'Memory',
    src: 'vignettes/Memory-100.jpg',
    titre: "Jeu de Memory",
    description: "En jouant au memory avec ma famille, j’ai été tout de suite intriguée par son fonctionnement. Très vite, une question m’est venue : comment pourrais-je coder un jeu comme celui-ci ? <br><br>Curieuse d’explorer cette idée, j’ai rassemblé des photos de ma galerie et créé différentes catégories pour donner vie à ma propre version : une galerie photo façon Memory !",
    conclusion: 'Allez voir dans les projets personnels !',
    medias: [
      { type: "img", path: 'assets/images/projets/galeriePhotos.png' },
      { type: "img", path: 'galeriePhotos2.png' },
    ]
  },
  {
    nom: 'Bubble Game',
    titre: 'Bubble Game',
    src: 'vignettes/bubble-100.jpg',
    description: "C’était mon tout premier projet en code que j'ai fait lorsque j'était encore au lycée ! J’ai donc commencé avec la librairie P5.js avant de passer sur Visual Studio Code. <br><br>Passionnée par les petits jeux vidéo, j’ai voulu en créer un. J’ai d’abord imaginé Bubble, un personnage au design épuré avec des yeux qui louchent (je voulais reprendre le tout premier personnage que j'avais coder même si j'avais fait une erreur dans la création de ses yeux). De là, l’idée m’est venue de concevoir quatre petits jeux, un pour chaque saison. <br><br>Le premier Bubble Game en hivers consiste à faire slalomer Bubble entre des cailloux lors de sa descente en ski… et plus ça va, plus ça s’accélère ! ⛷️ <br><br>Ci-dessous, la maquette réalisée en début de projet.",
    conclusion: 'Allez voir dans les projets personnels !',
    medias: [
      { type: "video", path: 'assets/images/projets/bubble_video.MOV' },
      { type: "img", path: 'assets/images/projets/sabre_blender.png' }
    ]
  },
  { 
    nom: 'Happy Survival',
    src: 'vignettes/happy-100.jpg',
    titre: 'Happy Survival',
    conclusion: 'Allez voir dans les projets scolaires !',
    description: "En décembre, j’ai eu la chance d’effectuer un stage de deux semaines chez Sisméo Paris, où j’ai travaillé sur un projet interne touchant à plusieurs domaines. <br><br>J’ai d’abord exploré le graphisme, en créant un logo sur Illustrator et des mockups sur Photoshop. Ensuite, je me suis plongée dans l’UX/UI design, en concevant la maquette du site sur Figma. Enfin, j’ai mis en pratique mes compétences en développement web en réalisant le site et son adaptation responsive sur WordPress avec Elementor.",
    medias: [
      { type: "img", path: "assets/images/vignettes/happy-100.jpg" },
      { type: "video", path: "assets/images/projets/naviguation-site_happy.mp4" },
    ]
  },
  { 
    nom: 'Hype',
    src: 'vignettes/pingo-100.jpg',
    titre: "Animation Hype",
    description: "En cours, nous avons également découvert Hype, un logiciel permettant de créer des animations de manière intuitive et efficace. <br><br>Pour l’explorer, j’ai réalisé deux courtes animations : une bannière animée et une animation de logo.",
    conclusion: 'Allez voir dans les projets scolaires !',
    Image: 'vignettes/pingo-100.jpg',
    medias: [
      { type: "video", path: 'assets/images/projets/Logo_anime.mp4' },
      { type: "img", path: 'galeriePhotos2.png' },
    ]
  },
  {
    nom: 'Animation Blender',
    titre: "Animation Blender",
    conclusion: "Allez voir dans les projets scolaires !",
    src: 'vignettes/blender-100.jpg',
    description: "Lors d’un workshop d’une semaine, notre filière a eu l’opportunité de découvrir Blender. Nous avons d’abord appris à modéliser des objets, comme la dague ci-dessous, avant de réaliser une courte animation inspirée du Memphis Design, avec un rendu en cell-shading. <br><br>Au fil du projet, nous avons exploré la modélisation, l’unwrapping, le texturing, l’animation, la mise en scène et les réglages de rendu sur Blender. Seul le personnage a été importé depuis Mixamo. <br><br>Cette expérience m’a donné envie d’aller plus loin et de me plonger dans Three.js pour intégrer de la 3D dans des sites web !",
    medias: [
      { type: "video", path: 'assets/images/projets/anim_blender.mp4' },
      { type: "img", path: 'assets/images/projets/sabre_blender.png' }
    ]
  },
  { 
    nom: 'The Maze Game',
    src: 'projets/maze.png',
    titre: "The Maze Game",
    description: "The Maze est le premier défi que je me suis lancé en apprenant le JavaScript. <br><br> Un week-end, je me suis mise au défi de créer un jeu en une après-midi, et l'idée d'un labyrinthe m'est alors venue. <br><br> J'ai commencé par générer un labyrinthe de façon aléatoire, avant d'implémenter le déplacement du personnage, un minuteur et la sauvegarde du meilleur temps via le local storage. Puis, voyant le temps défiler, j'ai rapidement conçu une interface, ce qui m'a valu quelques erreurs dans mon code. <br><br> Enfin, lors de la dernière demi-heure, j’ai entièrement composé la musique d’ambiance avec Soundtrap pour finaliser mon défi.",
    conclusion: 'Allez voir dans les projets personnels !',
    medias: [
      { type: "img", path: 'assets/images/projets/TheMazeImage.png' },
    ]
  },
  { 
    nom: 'Le Monde de Sharky',
    src: 'vignettes/sharky-100.jpg',
    titre: 'Le Monde de Sharky',
    conclusion: 'Allez voir dans les projets scolaires !',
    description: "Pour notre projet de synthèse de fin de semestre à Gobelins Paris, nous avons créé, en équipe de trois, un site interactif fonctionnant comme un jeu à choix, visant à sensibiliser les jeunes aux addictions aux réseaux sociaux et à l’isolement social qu’elles peuvent engendrer. <br><br>Dans ce projet, j’ai réalisé la vidéo en motion design sur After Effects, que j’ai appris en autodidacte, ainsi que certains graphismes.",
    medias: [
      { type: "video", path: "assets/images/projets/Teaser_Sharky_1.mp4" },
      { type: "img", path: "GameMuseum2.png" },
      { type: "img", path: "GameMuseum3.png" }
    ]
  },
]

for (let i = 0; i < photoProjet.length; i++) {
  let divPhotos = document.createElement('div');
  let divContainer = document.createElement('div');
  let divEffect = document.createElement('div');
  let click = document.createElement('a');

  divPhotos.style.backgroundImage = `url("assets/images/${photoProjet[i].src}")`;
  divPhotos.style.backgroundSize = "cover";


  click.onclick = function() {
    document.getElementById('titreModal').innerHTML = photoProjet[i].titre;
    document.getElementById('descriptionModal').innerHTML = photoProjet[i].description || "";
    document.getElementById('conclusion').innerHTML = photoProjet[i].conclusion || "";

    let imageEl = document.getElementById('imageModal');
    let videoEl = document.getElementById('videoModal');
    let videoSource = document.getElementById('videoSource');

    imageEl.style.display = "none";
    videoEl.style.display = "none";

    let firstMedia = photoProjet[i].medias[0]; 

    if (firstMedia) {
        if (firstMedia.type === "img") {
            imageEl.src = firstMedia.path;
            imageEl.style.display = "block";
        } else if (firstMedia.type === "video") {
            videoSource.src = firstMedia.path;
            videoEl.load();
            videoEl.style.display = "block";
            videoEl.controls = true; // Ajoute les contrôles (play, pause, volume...)
            videoEl.autoplay = true; // Démarre automatiquement
            videoEl.muted = true; // Obligatoire pour que l'autoplay fonctionne
            videoEl.loop = true;
        }
    }
};




// for (let i = 0; i < photoProjet.length; i++) {
//   let photos = document.createElement('img');
//   let divPhotos = document.createElement('div');
//   let divContainer = document.createElement('div');
//   let divEffect = document.createElement('div');
//   let click = document.createElement('a');

//   divPhotos.style.backgroundImage = `url("assets/images/${photoProjet[i].src}")`;
//   divPhotos.style.backgroundSize = "cover";

//   click.onclick = function() {
//     // Mettre à jour le titre et la description dans la modale
//     document.getElementById('titreModal').innerHTML = photoProjet[i].titre;
//     //document.getElementById('one').innerHTML = photoProjet[i].description;
//     document.getElementById
//     document.getElementById('conclusion').innerHTML = photoProjet[i].conclusion;
//     let ImagesModal = document.getElementById('ImagesModal')
//     let Image = document.createElement('img')
//     Image.src = photoProjet[i].Image;
//     ImagesModal.appendChild(Image);

//     // // Supprimer d'abord les anciens éléments dans la modale
//     // document.getElementById('image1').src = ""; 
//     // document.getElementById('image2').src = "";
//     // document.getElementById('image3').innerHTML = "";  // Réinitialiser le contenu vidéo ou image

//     // // Ajouter les médias disponibles
//     // if (photoProjet[i].medias && photoProjet[i].medias.length > 0) {
//     //   const mediaContainer = document.getElementById('image3');
//     //   // Parcourir les médias et afficher soit une image soit une vidéo
//     //   photoProjet[i].medias.forEach((media, index) => {
//     //     const element = document.createElement(media.type === "video" ? 'video' : 'img');
//     //     element.src = `assets/images/projets/${media.path}`;
//     //     if (media.type === "video") {
//     //       element.controls = true;
//     //     }
//     //     if (index === 0) {
//     //       // Premier média devient l'image 1
//     //       document.getElementById('image1').src = element.src;
//     //       document.getElementById('image1').style.display = 'block';
//     //     } else if (index === 1) {
//     //       // Deuxième média devient l'image 2
//     //       document.getElementById('image2').src = element.src;
//     //       document.getElementById('image2').style.display = 'block';
//     //     } else {
//     //       // Ajouter les autres médias dans image3
//     //       mediaContainer.appendChild(element);
//     //     }
//     //   });
    
//   };

  divEffect.className = "effect";
  divPhotos.className = "photoTest";
  divContainer.className = "container";
  click.href = "#id01";

  divContainer.appendChild(divEffect);
  divEffect.appendChild(click);
  click.appendChild(divPhotos);
  document.getElementById('tourne').appendChild(divContainer);


let rotation = 360 / containerList.length;

for (let i = 0; i < containerList.length; i++) {
    containerList[i].style.transform = `rotate(${rotation * i}deg) translateY(calc(var(--taillePlanete) / -16))`;
    
}


//Hover tourne
const photoTests = document.querySelectorAll('.effect');

photoTests.forEach(photoTest => {
  photoTest.addEventListener('mouseover', () => {
    console.log("test")
    const tourne = document.querySelector('#tourne').style.animationPlayState = 'paused'; 

  });

  photoTest.addEventListener('mouseleave', () => {
    const tourne = document.querySelector('#tourne').style.animationPlayState = 'running';

  });
});

}
