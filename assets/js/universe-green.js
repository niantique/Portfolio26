
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

let index = steps.length - 1;

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
        modalTitle: "Dazzling Yoga",
        modalImages: [
            "assets/images/modal-dy-1.png",
            "assets/images/modal-dy-2.png",
            "assets/images/modal-dy-3.png"
        ],
        modalText: `Dazzling Yoga est une application web full-stack développée avec Angular pour le front-end,
                    Symfony pour l'API back-end et une base SQL structurée pour la gestion des contenus (séances,
                    niveaux, utilisateurs). L'architecture repose sur une séparation claire des responsabilités :
                    composants Angular modulaires, services pour la communication HTTP, API REST sécurisée et base
                    de données normalisée.<br>
                    En amont du développement, j'ai conçu l'intégralité de l'interface sur Figma, avec maquettes
                    haute fidélité et prototype fonctionnel. Le design system inclut des composants réutilisables
                    (palette de couleurs, styles typographiques, boutons, états interactifs) permettant une
                    cohérence visuelle et une intégration front-end fluide.<br>Cette préparation a guidé la structure
                    des composants Angular et assuré une correspondance précise entre design et implémentation.
                    Le résultat est une plateforme moderne, immersive et maintenable, combinant une expérience
                    utilisateur soignée et une architecture technique robuste.`,
        modalParoles: "Full-Stack Project",
        modalLinkGH: "https://github.com/niantique/Dazzling-Yoga-Front",
        modalLinkView: "https://github.com/niantique/Dazzling-Yoga-Final"

    },
    {
        topTitle: "Radio Portfolio Nina",
        mainTitle: "Portfolio Nina - Front-end & Figma",
        img: "assets/images/player-img-portfolio25.png",
        modalTitle: "Portfolio Nina",
        modalImages: [
            "assets/images/modal-pf-1.png",
            "assets/images/modal-pf-2.png",
            "assets/images/modal-pf-3.png"
        ],
        modalText: `Pour concevoir mon portfolio, j'ai d'abord réalisé un maquettage complet sur Figma, en construisant un design system structuré : palette de bleus inspirée des nuances de l'océan, composants réutilisables pour les boutons, la typographie et les éléments interactifs, ainsi qu'un prototype fonctionnel permettant de valider les transitions et le parcours utilisateur. Cette phase de conception m'a permis de définir une identité visuelle cohérente, immersive et apaisante, guidée par des teintes profondes et lumineuses rappelant le mouvement de l'eau.<br>
                    J'ai ensuite développé l'interface en HTML, CSS et JavaScript, en traduisant fidèlement les maquettes en composants front-end modernes. Le CSS repose sur des variables, des animations fluides et un responsive design pensé pour offrir une expérience optimale sur tous les écrans. Le JavaScript gère les interactions, les micro-animations et la navigation dynamique, renforçant la sensation de fluidité propre à l'univers océanique.<br>
                    Le résultat est un portfolio à la fois technique et sensoriel, où chaque détail — du choix des couleurs aux transitions — contribue à une expérience élégante, moderne et personnelle.`,
        modalParoles: "Front-end & Figma",
        modalLinkGH: "https://github.com/niantique/Portfolio/",
        modalLinkView: "https://niantique.github.io/Portfolio/"
    }
]

const topTitle = document.querySelector("#projects .top p");
const mainTitle = document.querySelector("#projects .container-title h2");
const playerImg = document.querySelector("#projects .player-img");
const btnNext = document.querySelector(".player-btn-right");
const btnPrev = document.querySelector(".player-btn-left");
const btnMore = document.querySelector(".container-player-project button");
const modalTitle = document.querySelector(".modal-top p");
const modalImgs = document.querySelectorAll(".modal-img img");
const modalTxt = document.querySelector(".modal-txt p");
const modalPrl = document.querySelector(".modal-txt-content-top h3");
const modalLkGH = document.querySelector(".GHlink");
const modalLkView = document.querySelector(".ViewLink");

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

function updateModal() {
    const project = projects[currentProject];

    modalTitle.textContent = `Découvrez ${project.modalTitle}`;
    modalImgs.forEach((img, i) => {
        img.src = project.modalImages[i];
    });
    modalTxt.innerHTML = project.modalText;
    modalPrl.textContent = project.modalParoles;
    modalLkGH.href = project.modalLinkGH;
    modalLkView.href = project.modalLinkView;
    modalLkGH.textContent = "Lien GitHub";
    modalLkView.textContent = "Voir le projet";
}

btnMore.addEventListener("click", () => {
    updateModal();
    modal.style.display = "flex";
});


// MODAL PROJECT

const modal = document.getElementById("project-modal");
const modalClose = document.querySelector(".project-modal-close");

modalClose.addEventListener("click", () => {
    modal.style.display="none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const expandBtn = document.querySelector(".modal-expand-btn");
const modalTxtBox = document.querySelector(".modal-txt");

expandBtn.addEventListener("click", () => {
    modalTxtBox.classList.toggle("expanded");
});


// EXPERIENCES XP

const xpData = {
    alteriade: {
        title: "Alteriade - Développeuse Web",
        text: `Intégration de mails marketing responsives en HTML, CSS et MJML
Création de visuels pour les réseaux sociaux et les sites web (pré-home, exit pop-up…)
Design de newsletters, landing pages et assets pour les campagnes de fin d'année
Réalisation de GIFs animés pour dynamiser les contenus
Conception d'assets visuels pour les campagnes PMax et Google Ads
Développement d'une landing page pour une association, réalisée avec Webflow.`
    },
    ny: {
        title: "New Yorker - Visuel Merchandiser",
        text: `Création d'univers et réalisation des vitrines  (plans, implantations des vitrines et rayons, signalétiques) en  correspondance avec la charte visuelle.
Planification des tâches de l'équipe, gestion des ouvertures/fermetures de magasin, organisation des livraisons.
Optimisation des objectifs de vente en fonction du CA, des indicateurs de vente et des résultats des magasins annexes.`
    },
    sg: {
        title: "Sostrene Grene - Visuel Merchandiser",
        text: `Création de vitrines et implantation de rayons en correspondance avec la charte visuelle SG.
Gestion des commandes, organisation des livraisons, rangement du stock et  management de l'équipe dans la continuité du merchandising.
Optimisation des ventes à partir des indicateurs de ventes (TT, PM, chiffre  d'affaires) et des audits avec la directrice du magasin.
Transmission des implantations à la directrice merchandising France.
Organisation d'ateliers DIY avec le centre commercial Créteil Soleil.`}
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
