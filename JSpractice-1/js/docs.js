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


// ajax, axios, es6 비동기처리
// vue 문법, 