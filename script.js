let heroSection = document.getElementsByClassName("hero-section");

[...heroSection].forEach(part => {
    part.addEventListener('click', enableScroll);
})

// if (document.body.scrollTop) enableScroll();

function enableScroll() {
    console.log("scroll");
    document.body.style.overflow = "scroll";
    document.body.style.overflowX = "hidden";
}