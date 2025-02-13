const containerList = document.getElementsByClassName('container');


let photoProjet = [
    { nom: 'coquillage', src: 'projets/GameMuseum.png', titre: 'projet secret', description : 'blabalabajanajz', conclusion : 'bye-bye', image1 : 'GameMuseum.png', image2 : 'GameMuseum2.png', image3 : 'GameMuseum3.png'},
    { nom: 'eau', src: 'vignettes/Memory-100.jpg', titre : "l'eau c'est la vie", description : "mais après tout l'alcool c'est de l'eau sauf que l'alcool tue", conclusion : 'on va tous mourrir', image1 : 'galeriePhotos.png', image2 : 'galeriePhotos2.png', image3 : 'galeriePhotos3.png'},
    { nom: 'canape', src: 'vignettes/montre-100.jpg', titre : 'Illustration de montre', description : "faudrait installer un lit dans la classe", conclusion : "Je rêve d'une petite sieste", image1 : 'montre_modele.png', image2 : 'Montre_LouaneGouin-100.jpg' , image3 : 'Montre_LouaneGouin2.jpg', },
    { nom: 'maze', src: 'projets/maze.png', titre : 'The Maze Game', description : "jeu crée dans mon temps libre pour m'entrainer au code", image1 : 'TheMazeImage.png', image2 : 'soundtrapMaze.png'},
    { nom: 'hibou', src: 'vignettes/bubble-100.jpg', image1 : 'bubble.png', image2 : "anim_bubble.png", image3 : 'mockup_bubble.jpg' },
    { nom: 'photo', src: 'vignettes/happy-100.jpg', image1 : 'LogoLigne.png', image2 : 'teeShirtNoirDos.png', image3 : 'naviguation site.mp4' },
    { nom: 'photo1', src: 'projets/doctolib.png', image1 : 'logo_doctolib.png', image2 : 'doctolib.png', image3 : 'Phase_explo_projet_perso.pdf' },
    { 
      nom: 'trousse',
      src: 'trousse.jpg',
      medias: [
        {
          type: "video",
          path: 'assets/pouet'
        },
        {
          type: "img",
          path: 'assets/prout'
        }
      ]
    },
    { nom: 'coquillage', src: 'projets/GameMuseum.png', titre: 'projet secret', description : 'blabalabajanajz', conclusion : 'bye-bye', image1 : 'GameMuseum.png', image2 : 'GameMuseum2.png', image3 : 'GameMuseum3.png'},
    { nom: 'eau', src: 'vignettes/Memory-100.jpg', titre : "l'eau c'est la vie", description : "mais après tout l'alcool c'est de l'eau sauf que l'alcool tue", conclusion : 'on va tous mourrir', image1 : 'galeriePhotos.png', image2 : 'galeriePhotos2.png', image3 : 'galeriePhotos3.png'},
    { nom: 'canape', src: 'vignettes/montre-100.jpg', titre : 'Illustration de montre', description : "faudrait installer un lit dans la classe", conclusion : "Je rêve d'une petite sieste", image1 : 'montre_modele.png', image2 : 'Montre_LouaneGouin-100.jpg' , image3 : 'Montre_LouaneGouin2.jpg', },
    { nom: 'maze', src: 'projets/maze.png', titre : 'The Maze Game', description : "jeu crée dans mon temps libre pour m'entrainer au code", image1 : 'TheMazeImage.png', image2 : 'soundtrapMaze.png'},
    { nom: 'hibou', src: 'vignettes/bubble-100.jpg', image1 : 'bubble.png', image2 : "anim_bubble.png", image3 : 'mockup_bubble.jpg' },
    { nom: 'photo', src: 'vignettes/happy-100.jpg', image1 : 'LogoLigne.png', image2 : 'teeShirtNoirDos.png', image3 : 'naviguation site.mp4' },
    { nom: 'photo1', src: 'projets/doctolib.png', image1 : 'logo_doctolib.png', image2 : 'doctolib.png', image3 : 'Phase_explo_projet_perso.pdf' },
    { 
      nom: 'trousse',
      src: 'trousse.jpg',
      medias: [
        {
          type: "video",
          path: 'assets/pouet'
        },
        {
          type: "img",
          path: 'assets/prout'
        }
      ]
    },
    
]

for (let i = 0; i < photoProjet.length; i++) {
    
    let photos = document.createElement('img');
    let divPhotos = document.createElement('div');
    let divContainer = document.createElement('div');
    let divEffect = document.createElement('div');
    let click = document.createElement('a');

    // photos.src = `assets/images/vignettes/${photoProjet[i].src}`
    // photos.alt = photoProjet[i].nom

    divPhotos.style.backgroundImage = `url("assets/images/${photoProjet[i].src}")`
    divPhotos.style.backgroundSize = "cover"
    //divPhotos.style.width = "8rem"
    //divPhotos.style.height = "8rem"

    click.onclick = function() {
      document.getElementById('titreModal').innerText = photoProjet[i].titre
      document.getElementById('one').innerText = photoProjet[i].description
      document.getElementById('conclusion').innerText = photoProjet[i].conclusion
      document.getElementById('image1').src = `assets/images/projets/${photoProjet[i].image1}`
      document.getElementById('image2').src = `assets/images/projets/${photoProjet[i].image2}`
      let dernierElement = document.getElementById('image3').createElement(photoProjet[i].medias.type)
      //dernierElement.createElement(photoProjet[i].medias.type)
      dernierElement.src =  `assets/images/projets/${photoProjet[i].image3}`
      //document.getElementById('image3').src = `assets/images/projets/${photoProjet[i].image3}`
    }


    divEffect.className = "effect"
    divPhotos.className = "photoTest"
    divContainer.className = "container"
    click.href = "#id01"

    divContainer.appendChild(divEffect)
    divEffect.appendChild(click)
    click.appendChild(divPhotos)
    document.getElementById('tourne').appendChild(divContainer)

}




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


