const canvas = document.getElementById('carteAgratter')
const moi = document.getElementById('Louane')
const ctx = canvas.getContext("2d")

let isMousePress = false

ctx.fillStyle = "#EE9B00"
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.font = "100px League Spartan"
ctx.fillStyle ="#CA6702"
ctx.fillText("Grattez ici !", canvas.width/3,canvas.height/5)

let image = new Image();
image.src = 'assets/images/Mon_avatar.png'
image.onload = function(){
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x,y}
}



canvas.addEventListener('mousedown', function(){
    isMousePress = true
})

window.addEventListener('mouseup', function(){
    isMousePress = false
})

canvas.addEventListener('mousemove', function(e) {
    if (isMousePress) {
        clearCircle(e)
    }
})

window.addEventListener('touchmove', function(e) {
    clearCircle(e, true);
})

function clearCircle(e, isMobile) {
    console.log(e);

    let position;
    if (isMobile) {
        const touch = e.targetTouches[0]
        position = getCursorPosition(canvas,touch)
    } else {
        position = getCursorPosition(canvas,e)
    }
    //ctx.fillStyle = "#000000";
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(position.x, position.y, 35, 0, 2*Math.PI);
    ctx.fill();
}


// Fonction conçu par Chat GPT pour résoudre mon problème de la fonction au dessus puis réajustement de ma part
function resizeCanvas() {
    const computedStyle = getComputedStyle(canvas);
    const width = parseFloat(computedStyle.width);
    const height = parseFloat(computedStyle.height);

    // Mettre à jour les dimensions physiques du canevas
    canvas.width = width;
    canvas.height = height;

    // Re-dessiner le canevas après redimensionnement
    ctx.fillStyle = "#EE9B00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "35px League Spartan";
    ctx.fillStyle = "#CA6702";
    ctx.fillText("Grattez ici !", canvas.width/4,canvas.height-25);

    // Recharger l'image
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = 'assets/images/Mon_avatar.png';
}

// Appeler la fonction au chargement et au redimensionnement
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

