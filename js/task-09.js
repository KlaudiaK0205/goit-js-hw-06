function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColor = document.querySelector(".color");
const changeBg = document.querySelector(".change-color");

changeBg.addEventListener("click", (event) => {
    body.style.background = getRandomHexColor();
    changeColor.textContent = getRandomHexColor();
});

// DONE