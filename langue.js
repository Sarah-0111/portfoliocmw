/* LANGUE.JS — Switch bilingue FR / EN + données des projets */

/* DONNÉES DES PROJETS */
var projetsData = {

    fr: {
        1: {
            type:     "Réseaux Sociaux · Stratégie · Web",
            titre:    "Pilotage de la stratégie digitale du master CMW",
            role:     "Graphiste & cheffe de projet",
            outils:   "Notion, Design Thinking, Kanban",
            annee:    "2025 - 2026",
            desc:     "Pilotage de la stratégie digitale : web, emailing, réseaux sociaux à partir d'une analyse des besoins utilisateurs (+17 % d'engagement, +7 % d'impressions en 4 mois). Lancement d'une campagne de levée de fonds multicanale (emailing, réseaux sociaux, vidéo) : 2 615 € collectés. Développement de templates graphiques pour harmoniser l'image de marque du Master sur tous les canaux.",
            images:   ["image/cmw_4.png", "image/cmw_1.png", "image/cmw_3.png"],
            couleurs: ["#1c1c1a", "#2e2e2a", "#42423c"]
        },
        2: {
            type:     "Campagne de communication",
            titre:    "Campagne de notoriété pour une application mobile",
            role:     "Directrice artistique (Stratégie, Conception, Production) ",
            outils:   "Adobe Suite",
            annee:    "2023",
            desc:     "Campagne de notoriété phygitale pour l'application de rencontres amicales Weezem. Communication digitale et print via une guérilla marketing et un jeu de piste. Projet de diplôme.",
            images:   ["image/weezem_1.png", "image/weezem_4.png", "image/weezem_5.png"],
            couleurs: ["#149b50", "#0e7a3d", "#0a5c2d"]
        },
        3: {
            type:     "IDENTITÉ visuelle · CHARTE GRAPHIQUE",
            titre:    "Logotype, charte graphique et identité visuelle d'un groupe hospitalier",
            role:     "Graphiste",
            outils:   "Illustrator, Photoshop, Indesign",
            annee:    "2023",
            images:   ["image/ghne_1.png", "image/ghne_2.png", "image/ghne_3.png"],
            desc:     "Projet réel, en partenariat avec le GHNE (Groupement Hospitalier du Nord de l’Essonne). Conception de la nouvelle identité visuelle du GHNE (logo et déclinaisons) et de sa charte graphique à l’occasion de l’ouverture du nouvel hôpital à Saclay et de sa réorganisation. (2 propositions)",
        }
    },

    en: {
        1: {
            type:     "Communication Strategy · Web · Social Media",
            titre:    "Digital strategy management for CMW master",
            role:     "Graphic Designer & Project Manager",
            outils:   "Notion, Design Thinking, Kanban",
            annee:    "2025 - 2026",
            desc:     "Digital strategy management: web, emailing, social media based on user needs analysis (+17% engagement, +7% impressions in 4 months). Launch of a multichannel fundraising campaign (emailing, social media, video): €2,615 raised. Development of graphic templates to harmonise the Master's brand image across all channels.",
            images:   ["image/cmw_4.png", "image/cmw_1.png", "image/cmw_3.png"],
            couleurs: ["#1c1c1a", "#2e2e2a", "#42423c"]
        },
        2: {
            type:     "Communication Campaign",
            titre:    "Brand Awareness Campaign for a Mobile App",
            role:     "Creative Director (Strategy, Design, Production)",
            outils:   "Adobe Suite",
            annee:    "2023",
            desc:     "Phygital brand awareness campaign for the Weezem social networking app. Digital and print communication via guerrilla marketing and a scavenger hunt. Thesis project.",
            images:   ["image/weezem_1.png", "image/weezem_4.png", "image/weezem_5.png"],
            couleurs: ["#149b50", "#0e7a3d", "#0a5c2d"]
        },
        3: {
            type:     "VISUAL IDENTITY · BRAND GUIDELINES",
            titre:    "Visual Identity for a Hospital Group",
            role:     "Graphic Designer",
            outils:   "Illustrator, Photoshop, Indesign",
            annee:    "2023",
            desc:     "Actual project, in partnership with the GHNE (Groupement Hospitalier du Nord de l’Essonne). Design of the GHNE’s new visual identity and graphic guidelines to mark the opening of the new hospital in Saclay and its reorganization.",
            images:   ["image/ghne_1.png", "image/ghne_2.png", "image/ghne_3.png"],
            couleurs: ["#42423c", "#2e2e2a", "#5a5a52"]
        }
    }
};


/* TRADUCTION (interface) */
var traductions = {

    fr: {
        "nav-about":        "À propos",
        "nav-projets":      "Projets",
        "nav-competences":  "Compétences",
        "nav-contact":      "Contact",

        "hero-tag":          "Cheffe de projet digitale · Paris",
        "hero-title":        "Allier vision créative <br>et rigueur analytique<br><em>au service du digital.</em>",
        "hero-sub":          "Je conçois des expériences digitales cohérentes, pensées utilisateur, ancrées dans une vision créative et stratégique.",
        "hero-cta-text":     "Voir mes projets",
        "hero-scroll-label": "Défiler",

        "about-label":  "01 — À propos",
        "about-title":  "Un profil entre<br>design et stratégie",
        "about-p1":     "Formée en graphisme à l'École Estienne, je poursuis actuellement un Master CMW (Cultures et Métiers du Web) à l'Université Gustave Eiffel, avant d'intégrer à la rentrée prochaine un Mastère 2 en Management Entrepreneurial de Projet Numérique et Stratégie Digitale à la Digital School of Paris. <br>Ce double parcours, entre création et stratégie, m'a permis de développer une vision à la fois créative et analytique du digital.",
        "about-p2":     "J'interviens sur des projets mêlant gestion de projet, UX/UI, social media et production de contenu — avec le souci constant de l'utilisateur final et de la cohérence de marque.",
        "about-stat1":  "ans d'expérience",
        "about-stat2":  "projets réalisés",

        "projets-label":  "02 — Projets",
        "projets-title":  "Sélection de travaux",
        "proj1-type":     "Stratégie de Communication · Réseaux Sociaux · Web",
        "proj1-title":    "Pilotage de la stratégie digitale du master CMW",
        "proj1-desc":     "Harmoniser l'image de marque du Master sur tous les canaux digitaux à partir d'une analyse des besoins utilisateurs.",
        "proj1-btn":      "Voir le projet",
        "card-overlay-1": "Voir le projet",
        "proj2-type":     "Campagne de communication",
        "proj2-title":    "Campagne de notoriété pour une application mobile",
        "proj2-desc":     "Communication digitale et print via une guérilla marketing et un jeu de piste.",
        "proj2-btn":      "Voir le projet",
        "card-overlay-2": "Voir le projet",
        "proj3-type":     "IDENTITÉ visuelle · CHARTE GRAPHIQUE",
        "proj3-title":    "Logotype, charte graphique et identité visuelle d'un groupe hospitalier",
        "proj3-desc":     "Conception de la nouvelle identité visuelle du GHNE (logo et déclinaisons) et de sa charte graphique.",
        "proj3-btn":      "Voir le projet",
        "card-overlay-3": "Voir le projet",

        "comp-label": "03 — Compétences",
        "comp-title": "Ce que je sais faire",
        "comp-cat1":  "Gestion de projet",
        "comp-cat2":  "Design & UX",
        "comp-cat3":  "Digital & Web",
        "comp-cat4":  "Contenu & Médias",
        "comp-list1": ["Planification & coordination", "Brief créatif", "Suivi de production", "Notion, Trello, Jira"],
        "comp-list2": ["Figma — maquettes & prototypes", "Adobe Ps / Ai / Id", "Audit UX & parcours utilisateur", "Identité visuelle & Charte graphique"],
        "comp-list3": ["HTML / CSS / JavaScript", "WordPress, Webflow", "Analytics & reporting", "Meta Ads"],
        "comp-list4": ["Stratégie social media", "Rédaction", "Photographie", "Vidéo"],

        "contact-label":  "04 — Contact",
        "contact-title":  "Travaillons ensemble",
        "contact-sub":    "En recherche d'alternance à partir d'octobre 2026.<br>N'hésitez pas à me contacter.",
        "contact-cta":    "sarah.dermouche@gmail.com",
        "contact-li":     "LinkedIn",
        "contact-pt":     "Portfolio",
        "contact-cv":     "Télécharger le CV",

        "detail-label-role":  "Rôle",
        "detail-label-tools": "Outils",
        "detail-label-year":  "Année",

        "footer-text":   "© 2026 Sarah Dermouche — Portfolio",
        "footer-credit": "Conçu & intégré par Sarah Dermouche"
    },

    en: {
        "nav-about":        "About",
        "nav-projets":      "Projects",
        "nav-competences":  "Skills",
        "nav-contact":      "Contact",

        "hero-tag":          "Digital Project Manager · Paris",
        "hero-title":        "Creative vision. <br>Analytical mind.<br><em>Digital impact.</em>",
        "hero-sub":          "I design coherent digital experiences, user-centred and rooted in a creative and strategic vision.",
        "hero-cta-text":     "View my work",
        "hero-scroll-label": "Scroll",

        "about-label":  "01 — About",
        "about-title":  "A profile between<br>design and strategy",
        "about-p1":     "Trained in graphic design at École Estienne, I am currently completing a Master's in Web Cultures and Professions at Université Gustave Eiffel, before joining a second-year Master's in Digital Project & Entrepreneurial Management and Digital Strategy at the Digital School of Paris next fall. <br>This dual background, spanning design and strategy, has allowed me to develop both a creative and analytical approach to the digital world.",
        "about-p2":     "I work on projects combining project management, UX/UI, social media and content production — always with the end user and brand consistency in mind.",
        "about-stat1":  "years of experience",
        "about-stat2":  "completed projects",

        "projets-label":  "02 — Projects",
        "projets-title":  "Selected works",
        "proj1-type":     "Communication Strategy · Web · Social Media",
        "proj1-title":    "Digital strategy management for CMW master",
        "proj1-desc":     "Harmonising the Master's brand image across all digital channels based on user needs analysis.",
        "proj1-btn":      "View project",
        "card-overlay-1": "View project",
        "proj2-type":     "Communication Campaign",
        "proj2-title":    "Brand Awareness Campaign for a Mobile App",
        "proj2-desc":     "Digital and print communication via guerrilla marketing and a scavenger hunt.",
        "proj2-btn":      "View project",
        "card-overlay-2": "View project",
        "proj3-type":     "VISUAL IDENTITY · BRAND GUIDELINES",
        "proj3-title":    "Visual Identity for a Hospital Group",
        "proj3-desc":     "Design of the GHNE’s new visual identity (logo and variations) and its style guide",
        "proj3-btn":      "View project",
        "card-overlay-3": "View project",

        "comp-label": "03 — Skills",
        "comp-title": "What I do",
        "comp-cat1":  "Project Management",
        "comp-cat2":  "Design & UX",
        "comp-cat3":  "Digital & Web",
        "comp-cat4":  "Content & Media",
        "comp-list1": ["Planning & Coordination", "Creative Brief", "Production Monitoring", "Notion, Trello, Jira"],
        "comp-list2": ["Figma — Mockups & Prototypes", "Adobe Ps / Ai / Id", "UX Audit & User Journey", "Visual Identity & Brand Guidelines"],
        "comp-list3": ["HTML / CSS / JavaScript", "WordPress, Webflow", "Analytics & Reporting", "Meta Ads"],
        "comp-list4": ["Social Media Strategy", "Writing", "Photography", "Video"],

        "contact-label":  "04 — Contact",
        "contact-title":  "Let's work together",
        "contact-sub":    "Looking for an apprenticeship from October 2026.<br>Feel free to reach out.",
        "contact-cta":    "sarah.dermouche@gmail.com",
        "contact-li":     "LinkedIn",
        "contact-pt":     "Portfolio",
        "contact-cv":     "Download CV",

        "detail-label-role":  "Role",
        "detail-label-tools": "Tools",
        "detail-label-year":  "Year",

        "footer-text":   "© 2026 Sarah Dermouche — Portfolio",
        "footer-credit": "Designed & coded by Sarah Dermouche"
    }
};


/* LANGUE ACTIVE */
var langueActive = "fr";


/* CHANGER LA LANGUE */
function setLanguage(langue) {
    langueActive = langue;
    var textes = traductions[langue];

    /* Éléments simples */
    Object.keys(textes).forEach(function(id) {
        if (id.startsWith("comp-list")) return;
        var el = document.getElementById(id);
        if (el) el.innerHTML = textes[id];
    });

    /* Listes de compétences */
    ["comp-list1", "comp-list2", "comp-list3", "comp-list4"].forEach(function(listId) {
        var liste = document.getElementById(listId);
        var items = textes[listId];
        if (liste && items) {
            var lis = liste.querySelectorAll("li");
            items.forEach(function(texte, i) {
                if (lis[i]) lis[i].innerHTML = texte;
            });
        }
    });

    document.documentElement.lang = langue;
    document.getElementById("btn-fr").classList.toggle("active", langue === "fr");
    document.getElementById("btn-en").classList.toggle("active", langue === "en");

    /* Fermer le détail si ouvert (les données changent de langue) */
    var detail = document.getElementById("projet-detail");
    if (detail && detail.classList.contains("open")) {
        detail.classList.remove("open");
    }
}
