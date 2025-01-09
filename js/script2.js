const canvas = document.getElementById('carteAgratter')
const moi = document.getElementById('Louane')
const ctx = canvas.getContext("2d")

let isMousePress = false

//ctx.fillStyle = "red"
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.font = "20px League Spartan"
ctx.fillStyle ="red"
ctx.fillText("Grattez ici !", 100,140)

let image = new Image();
image.src = 'assets/images/Mon_avatar.png'
console.dir(image)
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
        const position = getCursorPosition(canvas,e)
        //ctx.fillStyle = "#000000";
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(position.x, position.y / 2, 10, 0, 2*Math.PI);
        ctx.fill();
    }
    
})
