const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const icons = document.querySelectorAll("i");

hamburger.addEventListener("click", function () {

    const isVisible = mobileMenu.getAttribute("data-visible");

    if (isVisible == "true") {


        mobileMenu.setAttribute("data-visible", "false");

        icons[0].setAttribute("data-visible", "true");
        icons[1].setAttribute("data-visible", "false");
    } else {

        mobileMenu.setAttribute("data-visible", "true");
        icons[0].setAttribute("data-visible", "false");
        icons[1].setAttribute("data-visible", "true");


    }

})
