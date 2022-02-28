let heroSection = document.getElementsByClassName("hero-section");

[...heroSection].forEach(part => {
    part.addEventListener('click', enableScroll);
})

function enableScroll() {
    console.log("scroll");
    document.body.style.overflow = "scroll";
}