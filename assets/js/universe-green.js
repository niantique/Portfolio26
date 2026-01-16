
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


// PROJECTS

const projects = [
    {
        topTitle: "Radio Dazzling Yoga",
        mainTitle: "Dazzling Yoga - Full-Stack Project",
        img: "assets/images/player-img-dy.png",
    },
    {
        topTitle: "Radio Portfolio Nina",
        mainTitle: "Portfolio Nina - Front-end & Figma",
        img: "assets/images/player-img-portfolio25.png",
    }
]

const topTitle = document.querySelector("#projects .top p");
const mainTitle = document.querySelector("#projects .container-title h2");
const playerImg = document.querySelector("#projects .player-img");
const btnNext = document.querySelector(".player-btn-right");
const btnPrev = document.querySelector(".player-btn-left");
const btnMore = document.querySelector(".container-player-project button");

let currentProject = 0;

function updateProject(direction = 1) {
    const project = projects[currentProject];

    playerImg.style.transition = "transform 0.4s ease, opacity 0.4s ease"; 
    playerImg.style.transform = `translateX(${direction * 40}px)`; 
    playerImg.style.opacity = "0";

    setTimeout(() => {
        topTitle.textContent = project.topTitle;
        mainTitle.textContent = project.mainTitle;
        playerImg.src = project.img;

        playerImg.style.transform = `translateX(${direction * -40}px)`;

        setTimeout(() => {
            playerImg.style.transform = "translateX(0)";
            playerImg.style.opacity = "1";
        }, 50);
    }, 200);
}

btnNext.addEventListener("click", () => {
    currentProject++;
    if (currentProject >= projects.length) currentProject = 0;
    updateProject(1);
});

btnPrev.addEventListener("click", () => {
    currentProject--;
    if (currentProject < 0) currentProject = projects.length - 1;
    updateProject(-1);
});

updateProject();

// EXPERIENCES XP

const xpData = {
    alteriade: {
        title: "Alteriade — Développeuse Web",
        text: "Développement front-end, intégration responsive, animations, création d'interfaces modernes et immersives."
    },
    ny: {
        title: "New Yorker — Responsable Visuel Merchandiser",
        text: "Production visuelle, storytelling, direction artistique, création d’univers éditoriaux et narratifs."
    },
    sg: {
        title: "Sostrene Grene — Visuel Merchandiser",
        text: "Mise en scène, organisation d’espaces, sens du détail, création d’expériences visuelles cohérentes."
    }
};

const cards = document.querySelectorAll(".xp-card");
const descBox = document.getElementById("xp-description");
const descTitle = document.querySelector(".xp-title");
const descText = document.querySelector(".xp-text");
const closeDesc = document.querySelector(".close-desc");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.xp;
        descTitle.textContent = xpData[key].title;
        descText.textContent = xpData[key].text;
        descBox.style.display = "block";
    });
});

closeDesc.addEventListener("click", () => {
    descBox.style.display = "none";
});
