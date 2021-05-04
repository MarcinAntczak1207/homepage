console.log("Strona o programiście Marcinie Antczaku");

let button = document.querySelector(".js-header__button");
let mainHeader = document.querySelector(".header");

let buttonAim = document.querySelector(".js-buttonAim");
let aim = document.querySelector(".js-sectionAim");

let buttonHobby = document.querySelector(".js-buttonHobby");
let hobbyContainer = document.querySelector(".section__hobbyContainer");

button.addEventListener("click", () => {
    mainHeader.classList.toggle("colorBlack");

    button.innerText = mainHeader.classList.contains("colorBlack") ? "Zmień kolor nagłówka na niebieski" : "Zmień kolor nagłówka na czarny";

});

buttonAim.addEventListener("click", () => {

    if (aim.innerHTML === "Wytrwała nauka i znalezienie pracy w zawodzie programisty.") {
        aim.innerHTML = "Dalsza praca w zawodzie budowlanym";
    } else { aim.innerHTML = "Wytrwała nauka i znalezienie pracy w zawodzie programisty." }

    if (buttonAim.innerText === "Zmiana celu na niewłaściwy") {
        buttonAim.innerText = "Zmiana celu na właściwy";
    } else { buttonAim.innerText = "Zmiana celu na niewłaściwy" }

});

buttonHobby.addEventListener("click", () => {
    hobbyContainer.classList.toggle("js-hidden");

    if (hobbyContainer.classList.contains("js-hidden")) {
        buttonHobby.innerText = "Pokaż zainteresowania";
    } else { buttonHobby.innerText = "Ukryj zainteresowania" }
});
