// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Tutup menu ketika link diklik

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".section-title, .about-card, .about-info, .skill-card, .project-card, .contact-box"
);

animatedElements.forEach(element => {
    element.classList.add("hidden");
});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// PROJECT CARD DELAY
// ===============================

document.querySelectorAll(".project-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.12}s`;

});


// ===============================
// SKILL CARD DELAY
// ===============================

document.querySelectorAll(".skill-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.1}s`;

});