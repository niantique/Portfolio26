
// EFFET DEFILEMENT

const scrollHeader = document.getElementById("scroll-text");
scrollHeader.innerHTML = scrollHeader.innerHTML + " " + scrollHeader.innerHTML;
let posHeader = 0;

function animateHeader() {
    posHeader -= 4;
    scrollHeader.style.transform = `translateX(${posHeader}px)`;

    if (posHeader < -scrollHeader.offsetWidth) {
        posHeader = scrollHeader.parentElement.offsetWidth;
    }

    requestAnimationFrame(animateHeader);
}

animateHeader();

// EFFET DEFILEMENT SKILLS

const skillLines = document.querySelectorAll(".scroll-text");

skillLines.forEach((line, index) => {
    line.innerHTML = line.innerHTML + " " + line.innerHTML;

    let pos = 0;

    function animateSkill() {
        pos += index === 1 ? 2 : -2;

        line.style.transform = `translateX(${pos}px)`;

        const halfWidth = line.offsetWidth / 2;

        if (index === 0 && pos < -halfWidth) {
            pos = 0;
        }
        if (index === 1 && pos > 0) {
            pos = -halfWidth;
        }

        requestAnimationFrame(animateSkill);
    }

    animateSkill();
});

// TOUCHE ESPACE INDEX HTML

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        window.location.href = "yellow.html";
    }
});

// TAP CONTAINER -> GREEN

const container = document.querySelector(".container-green");

container.addEventListener("click", () => {
        window.location.href = "yellow.html";
});

// PARCOURS

const timeline = document.getElementById("timeline");

const steps = [
    ["2013", "baccalauréat scientifique"],
    ["2016", "visual merchandiser"],
    ["2023", "apple foundation program"],
    ["2024", "mum & content creator"],
    ["2025", "bac +2 - développement web"],
    ["2026", "what's next ?"]
];

let index = 0;

timeline.addEventListener("mouseenter", () => {
    index = (index + 1) % steps.length;
    timeline.classList.add("fade-out");

    setTimeout(() => {
        timeline.innerHTML = `
        <p>${steps[index][0]}</p>
        <p>${steps[index][1]}</p>
        `;
        timeline.classList.remove("fade-out");
        timeline.classList.add("fade-in");

        setTimeout(() => {
           timeline.classList.remove("fade-in"); 
        }, 300);
    }, 300);
});

// PARCOURS RESPONSIVE

if (window.innerWidth <= 768) {

    const btn = document.getElementById("timeline-next");
    const timelineMobile = document.getElementById("timeline");

    let indexMobile = 0;

    btn.addEventListener("click", () => {
        indexMobile = (indexMobile + 1) % steps.length;

        timelineMobile.classList.add("fade-out");

        setTimeout(() => {
            timelineMobile.innerHTML = `
                <p>${steps[indexMobile][0]}</p>
                <p>${steps[indexMobile][1]}</p>
            `;
            timelineMobile.classList.remove("fade-out");
            timelineMobile.classList.add("fade-in");

            setTimeout(() => {
                timelineMobile.classList.remove("fade-in");
            }, 300);
        }, 300);
    });
}


