const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach (cards => {
        const rect = cards.getBoundingClientRect();
        const offset = rect.left * 0.05;

        cards.querySelector("img").style.transform = 
        `translatex(${offset}px)`;
    })
}) 
