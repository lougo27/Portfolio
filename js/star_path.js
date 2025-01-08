const path = document.getElementById("navPath");
const text = document.getElementById("titre");
const circle = document.getElementById("movingCircle");
const rocketImage = document.getElementById('rocketImage');

function updatePath() {
    // Get the bounding box of the text to find its position
    const textBox = text.getBBox();
    const textX = textBox.x + textBox.width;  // Center of the text horizontally
    const textY = textBox.y + textBox.height; // Center of the text vertically

    // Update the path's d attribute so that it ends at the text position
    const startX = -3;
    const startY = -12;

    // Adjust the control points as needed (e.g., for a quadratic or cubic Bezier curve)
    const controlX = (startX + textX); // Simple control point halfway, adjust as desired
    const controlY = (startY + textY); // Example control point

    // Update path to end at the text's position
    //path.setAttribute("d", `M${startX},${startY} Q${controlX},${controlY} ${textX},${textY}`);

    path.setAttribute('d', `M${controlX},${controlY}C1.04538 83.187 -10.988 144.22 26.212 147.02C72.712 150.52 106.212 -5.97966 132.712 12.5203C159.212 31.0203 215.712 154.02 348.712 93.5203C481.712 33.0203 506.5 -30.0001 536 18.4999C565.5 66.9999 575 90.9999 649.5 78.4999C724 65.9999 732.551 80.3875 727.5 91.4999C720 108 667 100.5 649.5 147C625.645 210.387 727.5 252.833 756.5 257.5`)
}

// Initial update
updatePath();

// Update the path if the window resizes or if text position changes
window.addEventListener("resize", updatePath);


const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

// Animation
//path.style.animation = "dash 5s linear alternate";

function updateCirclePosition() {
  const progress = parseFloat(getComputedStyle(path).strokeDashoffset) / pathLength;
  const lengthCovered = (1 - progress) * pathLength;
  const point = path.getPointAtLength(lengthCovered);

  // Update the circle's position
  let position = {
    x: point.x - circle.width.baseVal.value / 8,
    y: point.y - circle.height.baseVal.value / 8
  }

  circle.setAttribute("x", position.x);
  circle.setAttribute("y", position.y);

  //get position tengent
  let tangent = path.getPointAtLength(lengthCovered + 1); 
  let angle = Math.atan2(tangent.y - point.y, tangent.x - point.x) * 180 / Math.PI;
  rocketImage.style.transform = `rotate(${angle}deg)`;
  

  if(lengthCovered >= pathLength - 20) {
    clearInterval(intervale);

    //pause path animation
    path.style.animationPlayState = "paused";
  }
}

// Synchroniser la position du cercle avec la ligne
const intervale = setInterval(updateCirclePosition, 16); // Environ 60 fps