// about slider
    $('.about_slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    });

    $('.success_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    });

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

// toggle nav show

{
    let toggleBtn = document.getElementById("toggle_btn")
    let mobileNav = document.getElementById("mobile_nav")

    toggleBtn.addEventListener("click", function(){
        mobileNav.classList.toggle("showmobileNav")
    })
}

// mobile nav

{
    let navHeading = document.getElementsByClassName("mobilenav_item_wrapper")
    ;[...navHeading].forEach((currentItem,index) => {
        let mobileSubNav = document.getElementsByClassName("mobilesub_navber")[index]

        currentItem.addEventListener("click", function () {

            let showMobileClass = document.querySelector(".showMobileSub")

            if (!mobileSubNav.classList.contains("showMobileSub") && showMobileClass) {
                showMobileClass.classList.remove("showMobileSub")
            }
            mobileSubNav.classList.toggle("showMobileSub")
        })
    });
}