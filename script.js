let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scrolling down
        document.querySelector('.Navigation-bar').classList.add('hidden');
    } else {
        // Scrolling up
        document.querySelector('.Navigation-bar').classList.remove('hidden');
    }

    lastScrollTop = st <= 0 ? 0 : st; // For mobile or negative scrolling
});