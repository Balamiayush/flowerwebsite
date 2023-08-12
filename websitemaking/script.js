const display = document.querySelector(".display");
window.addEventListener("scroll", function () {
    if (window.scrollY >25) {
        display.style.display = "block";        
    } else {
        display.style.display = "none";
    }
});
