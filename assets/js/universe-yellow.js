
// EFFET DEFILEMENT

const text = document.getElementById("scroll-text");
text.innerHTML = text.innerHTML + " " + text.innerHTML;
let position = 0;

function animate() {
    position -= 4;
    text.style.transform = `translateX(${position}px)`;

    if (position < -text.offsetWidth) {
        position = text.parentElement.offsetWidth;
    }

    requestAnimationFrame(animate);
}

animate();

// TOUCHE ESPACE INDEX HTML

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        window.location.href = "index.html";
    }
});

// TAP CONTAINER -> BLUE

const container = document.querySelector(".container-yellow");

container.addEventListener("click", () => {
        window.location.href = "index.html";
});

