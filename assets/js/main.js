// SCROLL BACK TO TOP BUTTON FUNCTIONS
const scrollUpBtn = document.querySelector('.scroll-up-btn');

document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if (scrolled > 300) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

scrollUpBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
// END OF SCROLL BACK TO TOP BUTTON FUNCTIONS

// NAVBAR RESPONSIVENESS
const menuBtn = document.querySelector('.navbar .menu-btn i');
const mobileMenu = document.querySelector(".navbar .nav_menu");
const menuItems = document.querySelectorAll('.navbar .nav_menu a');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.toggle("active");
        mobileMenu.classList.toggle('active');
    });
    });
// END OF NAVBAR RESPONSIVENESS

/*SERVICES READ MORE, READ LESS BUTTON*/
const btns = document.querySelectorAll('.services_btn');
const dots = document.querySelectorAll('.dots');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('activated');
    });

    btn.addEventListener('click', () => {
        if(btn.parentElement.classList.contains('activated')) {
            btn.innerText = 'Read less';
        } else {
            btn.innerText = 'Read more';
        }
    });
});
/*END OF SERVICES READ MORE, READ LESS BUTTON*/

// FOOTER COPYRIGHT YEAR FUNCTION
const year = document.getElementById('year');

const currentYear = new Date().getFullYear();
const newYear = new Date(`01 January ${currentYear + 1} 00:00:00`);
year.innerText = currentYear;
// END OF FOOTER COPYRIGHT YEAR FUNCTION