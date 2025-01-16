const canvas = document.getElementById('carteAgratter');
const moi = document.getElementById('Louane');
const ctx = canvas.getContext("2d");

let isMousePress = false;
let isResizing = false;

// Initialisation du canevas (la je pense c'est important que je commente)
function resizeCanvas() {
    const computedStyle = getComputedStyle(canvas);
    const width = parseFloat(computedStyle.width);
    const height = parseFloat(computedStyle.height);

    // Vérifiez si les dimensions actuelles correspondent déjà
    if (canvas.width === width && canvas.height === height) return;

    // Sauvegardez l'état actuel du canevas
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Mettez à jour les dimensions physiques
    canvas.width = width;
    canvas.height = height;

    // Restaurez l'état après redimensionnement
    ctx.putImageData(imageData, 0, 0);

    // Recharger l'image de fond
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = 'assets/images/Mon_avatar.png';
}

// Fonction pour obtenir la position du curseur
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (canvas.width / rect.width);
    const y = (event.clientY - rect.top) * (canvas.height / rect.height);
    return { x, y };
}

// Fonction pour effacer un cercle
function clearCircle(e, isMobile) {
    let position;
    if (isMobile) {
        const touch = e.targetTouches[0];
        position = getCursorPosition(canvas, touch);
    } else {
        position = getCursorPosition(canvas, e);
    }

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(position.x, position.y, 30, 0, 2 * Math.PI);
    ctx.fill();
}

// Ajouter les événements
canvas.addEventListener('mousedown', function () {
    isMousePress = true;
});

window.addEventListener('mouseup', function () {
    isMousePress = false;
});

canvas.addEventListener('mousemove', function (e) {
    if (isMousePress && !isResizing) {
        clearCircle(e);
    }
});

window.addEventListener('touchmove', function (e) {
    if (!isResizing) {
        clearCircle(e, true);
    }
});

// Redimensionner uniquement lorsque ce n'est pas en train de gratter
window.addEventListener('resize', function () {
    if (!isMousePress) {
        isResizing = true;
        resizeCanvas();
        isResizing = false;
    }
});

// Dessiner l'état initial du canevas
function initializeCanvas() {
    ctx.fillStyle = "#EE9B00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "2em League Spartan";
    ctx.fillStyle = "#CA6702";
    ctx.fillText("Grattez ici !", canvas.width/4+10, canvas.height-22);

    // Charger l'image de fond
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = 'assets/images/Mon_avatar.png';
}

// Charger l'image
const image = new Image();

// Initialisation au chargement
resizeCanvas();
initializeCanvas();
