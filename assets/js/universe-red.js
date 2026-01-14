
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
        window.location.href = "green.html";
    }
});

// TAP CONTAINER -> GREEN

const container = document.querySelector(".container-red");

container.addEventListener("click", () => {
        window.location.href = "green.html";
});

