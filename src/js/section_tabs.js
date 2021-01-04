//section scroll 
var tabs = window.scrollY;
var tab_menu = document.querySelector(".tabs-sec");
window.addEventListener('scroll', function () {
    tabs = window.scrollY;
    if (tabs > 180) {
        tab_menu.classList.add("nav_tabs");
    }
    else {
        tab_menu.classList.remove("nav_tabs");
    }
});



// scroll section
const sections = document.querySelectorAll('.raine-tabs[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
