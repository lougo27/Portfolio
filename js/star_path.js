const path = document.getElementById("navPath");
const text = document.getElementById("titre");
const circle = document.getElementById("movingCircle");
const rocketImage = document.getElementById('rocketImage');

function updatePath() {
    
    const textBox = text.getBBox();
    const textX = textBox.x + textBox.width;  
    const textY = textBox.y + textBox.height; 
    
    const startX = -3;
    const startY = -12;

    
    const controlX = (startX + textX); 
    const controlY = (startY + textY); 

    
    path.setAttribute('d', `M${controlX},${controlY}C1.04538 83.187 -10.988 144.22 26.212 147.02C72.712 150.52 106.212 -5.97966 132.712 12.5203C159.212 31.0203 215.712 154.02 348.712 93.5203C481.712 33.0203 506.5 -30.0001 536 18.4999C565.5 66.9999 575 90.9999 649.5 78.4999C724 65.9999 732.551 80.3875 727.5 91.4999C720 108 667 100.5 649.5 147C625.645 210.387 727.5 252.833 756.5 257.5`)
}

updatePath();

window.addEventListener("resize", updatePath);


const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;



function updateCirclePosition() {
  const progress = parseFloat(getComputedStyle(path).strokeDashoffset) / pathLength;
  const lengthCovered = (1 - progress) * pathLength;
  const point = path.getPointAtLength(lengthCovered);

  
  let position = {
    x: point.x - circle.width.baseVal.value / 8,
    y: point.y - circle.height.baseVal.value / 8
  }

  circle.setAttribute("x", position.x);
  circle.setAttribute("y", position.y);

  
  let tangent = path.getPointAtLength(lengthCovered + 1); 
  let angle = Math.atan2(tangent.y - point.y, tangent.x - point.x) * 180 / Math.PI;
  rocketImage.style.transform = `rotate(${angle}deg)`;
  

  if(lengthCovered >= pathLength - 20) {
    clearInterval(intervale);

    
    path.style.animationPlayState = "paused";
  }
}


const intervale = setInterval(updateCirclePosition, 16); 