const hamMenu = document.querySelector(".navbar-ham_menu");
const desktopCard = document.querySelector(".feast-card");
const desktopClose = document.querySelector(".card-return-x");
const mobileNav = document.querySelector(".mobile-nav");

hamMenu.addEventListener("click", (ham) => {
    if (window.innerWidth <= 991) {
        hamMenu.classList.toggle("active");
        mobileNav.classList.toggle("active");
    } else {
        desktopCard.classList.toggle("active");
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 991) {
            hamMenu.classList.remove("active");
            mobileNav.classList.remove("active");
        }
    });
});

desktopClose.addEventListener("click", () => {
    desktopCard.classList.remove("active");
})

const reviewers = document.querySelectorAll(".reviewer");
const reviewText = document.getElementById("review");

const reviews = [
    "The cozy atmosphere immediately made us feel at home, & every detail of the ambiance added to the overall experience. Each dish was prepared with the freshest ingredients and burst with incredible flavors. The staff was attentive, friendly, and made sure we were taken care of throughout the meal.",
    "The warm, inviting ambiance was the perfect setting for a relaxed dinner. The food was delicious, but I'd love to see more variety in the drink menu to match the fantastic food options. The service was friendly, attentive, and made us feel special. I'll definitely return to experience more of the menu!",
    "Absolutely fantastic! The food was out of this world, made with the freshest ingredients & bursting with flavor. The staff was attentive and knowledgeable, offering great recommendations. I especially loved the chef's specials, which were beautifully presented and full of creative flavors."
];

reviewers.forEach((reviewer, index) => {

    reviewer.addEventListener("click", () => {
        reviewers.forEach(i => {
            i.classList.remove("active");
        });

        reviewer.classList.add("active");

        reviewText.classList.add("changing");
        setTimeout(() => {
            reviewText.textContent = reviews[index];
            reviewText.classList.remove("changing");
        }, 400);

    });

});

const faqItems = document.querySelectorAll(".faq-q-and-a");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        faqItems.forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        })
        item.classList.toggle("active");
    })
})

document.querySelectorAll('.animation-wrapper').forEach(wrapper => {
    // Initialize the starting state
    wrapper.classList.add('state-1');

    wrapper.addEventListener('mouseenter', () => {
        // Turn on transitions and trigger the slide up
        wrapper.classList.add('animating', 'is-hovered');
    });

    wrapper.addEventListener('mouseleave', () => {
        // 1. Instantly turn off transitions so components don't animate back down
        wrapper.classList.remove('animating', 'is-hovered');

        // 2. Swap states so the text blocks swap their background positions invisibly
        if (wrapper.classList.contains('state-1')) {
            wrapper.classList.remove('state-1');
            wrapper.classList.add('state-2');
        } else {
            wrapper.classList.remove('state-2');
            wrapper.classList.add('state-1');
        }
    });
});