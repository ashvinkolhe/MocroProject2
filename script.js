window.onscroll = function() {
    var socialIcons = document.querySelector('.social-icons');
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (window.pageYOffset >= navbarHeight) {
        socialIcons.classList.add('fixed');
    } else {
        socialIcons.classList.remove('fixed');
    }
};
