window.addEventListener('scroll', function(e) {
    const target = document.querySelector('.scroll');

    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.2;

    target.style.transform = "translate3d(0px, "+ rate + "px, 0px)";
    
})
