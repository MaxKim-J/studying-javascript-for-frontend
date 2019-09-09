// scroll event listner
// main content fades away
// navbar "google 문서로 이동" pops out from out of the windows

window.addEventListener('scroll', () => {
    const scrolled = Math.floor(window.scrollY);
    const navPop = document.getElementById('js-header-right-popout');
    var fade = document.getElementById('js-section-main-fade')

    if (scrolled > 932) {
        navPop.innerHTML = "Google 문서로 이동"
        navPop.style.backgroundColor = "#4386FC"
        navPop.style.color = "white"
        navPop.style.fontWeight = "bold"
    } else {
        fade.style.opacity = -scrolled / 932 + 1;

        navPop.innerHTML = ""
        navPop.style.backgroundColor = ""
        navPop.style.color=""
    }
});

// nav bar relative, menu button control

var open = 0;

function menuExpose() {
    const popup = document.getElementById('js-popup');
    const section = document.getElementsByClassName('section')[0];
    const icon = document.getElementById('js-icon');

    if (open === 0) {
        popup.style.display = "block";
        section.style.display = "none";
        icon.src = "static/x_icon.png"
        open++;
    } else {
        console.log(open)
        popup.style.display = "none";
        section.style.display = "block";
        icon.src = "static/Hamburger_icon.png"
        open--;
    }
   
}

window.onresize = function () {
    const popup = document.getElementById('js-popup');
    const section = document.getElementsByClassName('section')[0];
    const width = window.innerWidth
    const icon = document.getElementById('js-icon');

    if (open === 1 && width > 1300) {
        icon.src = "static/Hamburger_icon.png"
        popup.style.display = "none";
        section.style.display = "block";
        open--;
    }
}


// ajax, axios, es6 비동기처리
// vue 문법, 