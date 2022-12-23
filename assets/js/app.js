// sticky header
var header = document.getElementsByClassName("header_nav_sticky")[0];
var sticky = header.offsetTop;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})