document.addEventListener('DOMContentLoaded', () => {
    const galaxy= document.querySelector('.galaxy');
    const numStars= 200;

    function createStar() {
        const star= document.createElement('div');
        star.className = 'star';
        const size= Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100} vh`;
        star.style.left = `${Math.random() * 100} vw`;
        star.style.opacity = `${Math.random()}`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`;

        galaxy.appendChild(star);
        
    }

    for (let i = 0; i < numStars; i++){
        createStar();
    }
});