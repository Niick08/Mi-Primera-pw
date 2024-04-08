document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    window.addEventListener('scroll', () => {
        const viewportHeight = window.innerHeight;
        elementsToAnimate.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < viewportHeight - 100) { // 100 es el margen desde la parte inferior de la pantalla
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    });
});