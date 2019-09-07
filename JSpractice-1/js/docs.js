// scroll event listner
// main content fadeaway
// navbar "google 문서로 이동" pop out from out of the windows

window.addEventListener('scroll', () => {
    const scrolled = Math.floor(window.scrollY);

    if (scrolled > 932) {
        const navPop = document.getElementById('js-header-right-popout');
        var fade = document.getElementById('js-section-main-fade')
        
        navPop.innerHTML = "Google 문서로 이동"
        navPop.style.backgroundColor = "#4386FC"
        navPop.style.color = "white"
        navPop.style.fontWeight = "bold"

    } else {
        const navPop = document.getElementById('js-header-right-popout');
        var fade = document.getElementById('js-section-main-fade')

        fade.style.opacity = -scrolled / 932 + 1;

        navPop.innerHTML = ""
        navPop.style.backgroundColor = ""
        navPop.style.color=""
    }
});

