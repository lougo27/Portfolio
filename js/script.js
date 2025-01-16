const containerList = document.getElementsByClassName('container');


let photoProjet = [
    { nom: 'coquillage', src: 'coquillage.jpg', titre: 'projet secret', description : 'blabalabajanajz', conclusion : 'bye-bye' },
    { nom: 'eau', src: 'test image planet.webp', titre : "l'eau c'est la vie", description : "mais après tout l'alcool c'est de l'eau sauf que l'alcool tue", conclusion : 'on va tous mourrir', image1 : 'test image planet.webp', image2 : 'test image planet.webp', image3 : 'test image planet.webp'},
    { nom: 'canape', src: 'canape.jpg', titre : 'Je veux dormir', description : "faudrait installer un lit dans la classe", conclusion : "Je rêve d'une petite sieste" },
    { nom: 'maze', src: 'maze.png', titre : 'The Maze Game', description : "jeu crée dans mon temps libre pour m'entrainer au code", image1 : 'TheMazeImage.png', image2 : 'soundtrapMaze.png'},
    { nom: 'hibou', src: 'hibou test.png' },
    { nom: 'photo', src: 'photo.jpeg' },
    { nom: 'photo1', src: 'photo1.jpg' },
    { nom: 'trousse', src: 'trousse.jpg' },
    { nom: 'clavier', src: 'clavier.jpg' },
    { nom: 'diorte', src: 'diorte.jpg' },
    { nom: 'baballe', src: 'baballe.jpg' },
    { nom: 'mp14', src: 'mp14.jpg' },
    { nom: 'coquillage', src: 'coquillage.jpg' },
    { nom: 'canape', src: 'canape.jpg' },
    
    
]

for (let i = 0; i < photoProjet.length; i++) {
    
    let photos = document.createElement('img');
    let divContainer = document.createElement('div');
    let divEffect = document.createElement('div');
    let click = document.createElement('a');

    photos.src = `assets/images/${photoProjet[i].src}`
    photos.alt = photoProjet[i].nom

    click.onclick = function() {
      document.getElementById('titreModal').innerText = photoProjet[i].titre
      document.getElementById('one').innerText = photoProjet[i].description
      document.getElementById('conclusion').innerText = photoProjet[i].conclusion
      document.getElementById('image1').src = `assets/images/${photoProjet[i].image1}`
      document.getElementById('image2').src = `assets/images/${photoProjet[i].image2}`
      document.getElementById('image3').src = `assets/images/${photoProjet[i].image3}`
    }


    divEffect.className = "effect"
    photos.className = "photoTest"
    divContainer.className = "container"
    click.href = "#id01"

    divContainer.appendChild(divEffect)
    divEffect.appendChild(click)
    click.appendChild(photos)
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



