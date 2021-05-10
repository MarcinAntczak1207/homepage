{
    const welcome = () => {
        console.log("Strona o programiście Marcinie Antczaku");
    }



    const button = document.querySelector(".js-header__button");

    const onChangeHeaderColorClick = () => {
        const mainHeader = document.querySelector(".js-header");

        mainHeader.classList.toggle("colorBlack");
        button.innerText = mainHeader.classList.contains("colorBlack") ? "Zmień kolor nagłówka na niebieski" : "Zmień kolor nagłówka na czarny";
    }



    const aimButton = document.querySelector(".js-aimButton");

    const onAimButtonClick = () => {
        const aimElement = document.querySelector(".js-sectionAim");

        aimElement.innerHTML = aimElement.innerHTML === "Wytrwała nauka i znalezienie pracy w zawodzie programisty." ? "Dalsza praca w zawodzie budowlanym" : "Wytrwała nauka i znalezienie pracy w zawodzie programisty."

        aimButton.innerText = aimButton.innerText === "Zmiana celu na niewłaściwy" ? "Zmiana celu na właściwy" : "Zmiana celu na niewłaściwy";
    }



    const hobbyButton = document.querySelector(".js-hobbyButton");
    const hobbyContainer = document.querySelector(".js-section__hobbyContainer");

    const onHobbyButtonClick = () => {
        hobbyContainer.classList.toggle("js-hidden");

        hobbyButton.innerText = hobbyContainer.classList.contains("js-hidden") ? "Pokaż zainteresowania" : "Ukryj zainteresowania";
    }



    const init = () => {

        welcome()

        button.addEventListener("click", onChangeHeaderColorClick);

        aimButton.addEventListener("click", onAimButtonClick);

        hobbyButton.addEventListener("click", onHobbyButtonClick);
    }

    init();

}