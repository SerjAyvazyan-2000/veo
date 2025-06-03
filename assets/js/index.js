const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');
const menuLinks = document.querySelectorAll('.menu-link');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');
        document.body.style.overflow = 'hidden';


    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');
        document.body.style.overflow = 'unset';

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item-block');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-item-block').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.faq-item-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});










document.addEventListener("DOMContentLoaded", function () {


    const header = document.querySelector('.header');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                header.classList.add('visible');
                observer.unobserve(header);
            }
        },
        {
            threshold: 0.1,
        }
    );

    observer.observe(header);



});




document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight + 20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('.footer-menu ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight + 20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const heroVideo = document.querySelector('.hero-video');
    if(heroVideo){
        const heroPlayBtn = document.querySelector('.hero-play');

        heroPlayBtn.addEventListener('click', function () {
            heroVideo.play();
            heroPlayBtn.classList.add('played');
        });

        heroVideo.addEventListener('ended', function () {
            heroPlayBtn.classList.remove('played');
            heroPlayBtn.classList.add('active');
        });
    }

});



document.addEventListener("DOMContentLoaded", function () {
    const animatedSections = document.querySelectorAll('.section-animate');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const allVideoBlocks = document.querySelectorAll('.video-wrapper');

    allVideoBlocks.forEach(block => {
        const video = block.querySelector('.video-el');
        const playBtn = block.querySelector('.play-button');
        const previewImg = block.querySelector('.video-img');

        if (!video || !playBtn) return;

        if (previewImg) {
            video.style.display = 'none';
        }

        playBtn.addEventListener('click', function () {
            if (previewImg) previewImg.style.display = 'none';
            video.style.display = 'block';
            video.play();
            playBtn.classList.add('played');
            playBtn.classList.remove('active');
        });

        video.addEventListener('ended', function () {
            if (previewImg) {
                previewImg.style.display = 'flex';
                video.style.display = 'none';
            }
            video.pause();
            video.currentTime = 0;
            playBtn.classList.remove('played');
            playBtn.classList.add('active');
        });
    });
});