const mainImages = document.querySelectorAll("section > img");
const buttons = document.querySelectorAll("button");

let currentImage = 0;

const prevButton = document.querySelector("#prevArrow");
const nextButton = document.querySelector("#nextArrow");

mainImages[currentImage].classList.add("active");

prevButton.addEventListener( "click",
    () => {
        console.log(currentImage)
        mainImages[currentImage].classList.remove("active");
        currentImage--;
        mainImages[currentImage].classList.add("active");
        nextButton.disabled = false;

        if (currentImage === 0) {
            prevButton.disabled = true;
        }
    }
)

nextButton.addEventListener( "click" ,
    () => {
        
        mainImages[currentImage].classList.remove("active");
        currentImage++;
        mainImages[currentImage].classList.add("active");
        prevButton.disabled = false;

        if (currentImage === mainImages.length - 1) {
            nextButton.disabled = true;
        }
    }
)
