// script.js
window.onload = () => {
    // Scroll to bottom when the page loads
    window.scrollTo(0, document.body.scrollHeight);
};

window.onscroll = () => {
    const rocket = document.getElementById("rocket");
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Calculate the new position of the rocket
    const rocketOffset = (scrollPosition / maxScroll) * 100;

    // Update the rocket's position
    rocket.style.transform = `translateX(-50%) translateY(${rocketOffset}px)`;
};
