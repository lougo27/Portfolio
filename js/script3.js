// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Place la page en bas au chargement
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 0); // Un léger délai pour être sûr que tout est chargé

    const fusee = document.getElementById("fusee");

    // Écoute l'événement de défilement
    window.addEventListener("scroll", () => {
        const maxScroll = document.body.scrollHeight - window.innerHeight; // Calcul de la hauteur totale de défilement
        const currentScroll = window.scrollY; // Position actuelle du scroll
        const scrollRatio = currentScroll / maxScroll; // Ratio entre 0 (bas) et 1 (haut)

        // Déplace la fusée en fonction du ratio de défilement
        fusee.style.transform = `translateY(-${scrollRatio * 100}vh)`;
    });
});
