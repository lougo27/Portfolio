window.onload = () => 
    window.scrollTo(0, document.body.scrollHeight);
};

window.onscroll = () => {
    const rocket = document.getElementById("rocket");
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    
    const rocketOffset = (scrollPosition / maxScroll) * 100;

    
    rocket.style.transform = `translateX(-50%) translateY(${rocketOffset}px)`;
};
