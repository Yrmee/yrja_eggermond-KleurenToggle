// consts clicking-event
const menu = document.querySelector(".menu");
const menucolors = document.querySelector(".menuColors");

// clicking-event op menu
menu.addEventListener("click", function() {
    menucolors.classList.toggle("showMenuByClicking");
    document.querySelector(".menu");
});

// consts Toggle-menu
const bodyBackground = document.querySelector("body");
const homeButton = document.querySelector(".btnHome");
const redButton = document.querySelector(".btnRed");
const orangeButton = document.querySelector(".btnOrange");
const purpleButton = document.querySelector(".btnPurple");
const greenButton = document.querySelector(".btnGreen");

const makeBackgroundGrey = () => {
    bodyBackground.classList.remove("btnRed", "btnOrange", "btnPurple", "btnGreen");
    bodyBackground.classList.add("btnHome");
};
homeButton.addEventListener("click", makeBackgroundGrey);

const makeBackgroundRed = () => {
    bodyBackground.classList.remove("btnHome", "btnOrange", "btnPurple", "btnGreen");
    bodyBackground.classList.add("btnRed");
};
redButton.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () => {
    bodyBackground.classList.remove("btnHome", "btnRed", "btnPurple", "btnGreen");
    bodyBackground.classList.add("btnOrange");
};
orangeButton.addEventListener("click", makeBackgroundOrange);

const makeBackgroundPurple = () => {
    bodyBackground.classList.remove("btnHome", "btnRed", "btnOrange", "btnGreen");
    bodyBackground.classList.add("btnPurple");
};
purpleButton.addEventListener("click", makeBackgroundPurple);

const makeBackgroundGreen = () => {
    bodyBackground.classList.remove("btnHome", "btnRed", "btnOrange", "btnPurple");
    bodyBackground.classList.add("btnGreen");
};
greenButton.addEventListener("click", makeBackgroundGreen);


