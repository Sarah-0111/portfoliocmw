/* SCROLL.JS */

/* CURSEUR PERSONNALISÉ developpé à l'aide de Claude AI */
var dot  = document.getElementById("cursor-dot");
var ring = document.getElementById("cursor-ring");
var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
var LERP = 0.12;

document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top  = mouseY + "px";
});

function animateCursor() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.left = ringX + "px";
    ring.style.top  = ringY + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("a, button, .projet-card, .tag").forEach(function(el) {
    el.addEventListener("mouseenter", function() { ring.classList.add("cursor-hover"); });
    el.addEventListener("mouseleave", function() { ring.classList.remove("cursor-hover"); });
});

document.addEventListener("mouseleave", function() {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
});
document.addEventListener("mouseenter", function() {
    dot.style.opacity = "1";
    ring.style.opacity = "0.6";
});


/* NAVIGATION */
var navHeader = document.getElementById("nav-header");
window.addEventListener("scroll", function() {
    navHeader.classList.toggle("scrolled", window.scrollY > 60);
});


/* HAMBURGER MOBILE */
var burger   = document.getElementById("nav-burger");
var navLinks = document.getElementById("nav-links");

burger.addEventListener("click", function() {
    var isOpen = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

navLinks.querySelectorAll("a").forEach(function(lien) {
    lien.addEventListener("click", function() {
        navLinks.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
    });
});


/* LIEN ACTIF */
var sections   = document.querySelectorAll("section[id]");
var navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
    var scrollY = window.scrollY;
    sections.forEach(function(section) {
        var top    = section.offsetTop - 100;
        var height = section.offsetHeight;
        var id     = section.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(function(a) {
                a.classList.remove("active");
                if (a.getAttribute("href") === "#" + id) a.classList.add("active");
            });
        }
    });
});


/* FADE-IN SCROLL */
var fadeEls = document.querySelectorAll(".fade-in");
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

fadeEls.forEach(function(el) { observer.observe(el); });

document.querySelectorAll(".projet-card").forEach(function(el, i) {
    el.style.transitionDelay = (i * 0.12) + "s";
});
document.querySelectorAll(".comp-col").forEach(function(el, i) {
    el.style.transitionDelay = (i * 0.09) + "s";
});

/* DÉTAIL PROJET  */
var detail      = document.getElementById("projet-detail");
var detailClose = document.getElementById("detail-close");

function ouvrirDetail(numProjet) {
    var data = projetsData[langueActive][numProjet];
    if (!data) return;

    /* Textes */
    document.getElementById("detail-type").textContent  = data.type;
    document.getElementById("detail-titre").textContent = data.titre;
    document.getElementById("detail-role").textContent  = data.role;
    document.getElementById("detail-tools").textContent = data.outils;
    document.getElementById("detail-year").textContent  = data.annee;
    document.getElementById("detail-desc").textContent  = data.desc;

    /* Ouvrir et scroller jusqu'au panneau */
    detail.classList.add("open");
    setTimeout(function() {
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
}

function fermerDetail() {
    detail.classList.remove("open");
}

/* Boutons "Voir le projet" */
document.querySelectorAll(".open-detail").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        var num = parseInt(btn.getAttribute("data-projet"), 10);
        /* Si le même projet est déjà ouvert onle ferme */
        if (detail.classList.contains("open") && detail.dataset.projet == num) {
            fermerDetail();
        } else {
            detail.dataset.projet = num;
            ouvrirDetail(num);
        }
    });
});

/* Clic sur la carte entière */
document.querySelectorAll(".projet-card").forEach(function(card) {
    card.addEventListener("click", function() {
        var num = parseInt(card.getAttribute("data-projet"), 10);
        if (detail.classList.contains("open") && detail.dataset.projet == num) {
            fermerDetail();
        } else {
            detail.dataset.projet = num;
            ouvrirDetail(num);
        }
    });
});

/* Bouton fermer */
detailClose.addEventListener("click", fermerDetail);

/* Touche Échap */
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") fermerDetail();
});
