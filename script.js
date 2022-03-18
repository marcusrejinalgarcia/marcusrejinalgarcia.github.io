let i = 0;
function typeWriter() {
    let txt = 'Hello, World!'; /* The text */
    let speed = 100; /* The speed/duration of the effect in milliseconds */
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

function colorizeNavbar() {
    var header = document.querySelector('header');
    let scrollHeight = window.innerHeight// - parseInt(getComputedStyle(header).height);
    if (document.body.scrollTop >= scrollHeight || document.documentElement.scrollTop >= scrollHeight) {
        header.style.background = "#262626";
        header.style.borderBottom = "1px solid white"
    }
    else {
        header.style.background = "transparent";
        header.style.borderBottom = "1px solid transparent"
    }

}