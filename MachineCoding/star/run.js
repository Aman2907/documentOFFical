// Get DOM elements
const container = document.getElementById("star-container");
const stars = document.querySelectorAll(".star");
const countText = document.querySelector(".count");

let filled = 0;

// Handle click: update filled stars and count
container.addEventListener("click", function (e) {
    const currClicked = parseInt(e.target.closest(".star")?.dataset.index || 0);

    if (currClicked === 0) return;

    filled = currClicked;

    updateStars(filled);
    countText.innerText = `Rating Count : ${filled}`;
});

// Handle mouseover: preview fill
container.addEventListener("mouseover", function (e) {
    const hoverIndex = parseInt(e.target.closest(".star")?.dataset.index || 0);

    if (hoverIndex === 0) return;

    updateStars(hoverIndex);
});

// Restore fill on mouseleave
container.addEventListener("mouseleave", function () {
    updateStars(filled);
});

// Utility to fill stars up to a given count
function updateStars(count) {
    stars.forEach((star, index) => {
        if (index < count) {
            star.classList.add("star-filled");
        } else {
            star.classList.remove("star-filled");
        }
    });
}
