const mainImages = document.querySelectorAll("main > img");
const buttons = document.querySelectorAll("button");

let currentImage = 0;
let imageToDisplay = mainImages[currentImage];

const prevButton = document.querySelector("#prevArrow");
const nextButton = document.querySelector("#nextArrow");

prevButton.addEventListener( "click",
    () => {
        imageToDisplay.classList.remove("active");
    }
)

init ();