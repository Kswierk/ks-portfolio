const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar__list');
    const navLinks = document.querySelectorAll('.navbar__item')

    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar__list--active');

        // navbar slide

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7}s`
            }
        });

        // burger animation
        burger.classList.toggle('toggle')
    });

};

navSlide();