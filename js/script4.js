//Me permet de rajoutter autant de projets que je veux
let constellations = [
    // { nom: 'coquillage', src: 'coquillage.jpg', titre: 'projet secret', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
    // { nom: 'coquillage', src: 'coquillage.jpg', titre: 'projet secret2', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
    // { nom: 'coquillage', src: 'coquillage.jpg', titre: 'projet secret3', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
    // { nom: 'coquillage', src: 'coquillage.jpg', titre: 'projet secret4', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
   { nom: 'coquillage', src: 'fausse_constellation.svg', titre: 'projet secret', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
    { nom: 'coquillage', src: 'fausse_constellation.svg', titre: 'projet secret2', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
    { nom: 'coquillage', src: 'fausse_constellation.svg', titre: 'projet secret3', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },
   { nom: 'coquillage', src: 'fausse_constellation.svg', titre: 'projet secret4', extrait : 'blabalabajanajz', conclusion : 'bye-bye' },


]

for (let i = 0; i < constellations.length; i++) {
    
    let etoiles = document.createElement('img');
    let divToutesCases = document.createElement('div');
    let divCases = document.createElement('div');
    let clickEtoiles = document.createElement('a');
    let boutonEtoile = document.createElement('button');
    
    

    etoiles.src = `assets/svg/${constellations[i].src}`
    etoiles.alt = constellations[i].nom

    boutonEtoile.innerText = "click étoile"
    etoiles.className = "constel"
    divCases.className = "cases"
    clickEtoiles.href = "#"
    boutonEtoile.className = "boutons"

    //etoiles.appendChild(clickEtoiles)
    divCases.appendChild(etoiles)
    divCases.appendChild(boutonEtoile)
    document.getElementById('toutesCases').appendChild(divCases)
 
}


