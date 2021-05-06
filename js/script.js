{
    {
        const welcome = () => {
            console.log("Strona o programiście Marcinie Antczaku");
        }

        welcome()
    }

    {
        const button = document.querySelector(".js-header__button");

        const onChangeHeaderColorClick = () => {
            const mainHeader = document.querySelector(".header");

            mainHeader.classList.toggle("colorBlack");
            button.innerText = mainHeader.classList.contains("colorBlack") ? "Zmień kolor nagłówka na niebieski" : "Zmień kolor nagłówka na czarny"
        };

        const init = () => {
            button.addEventListener("click", onChangeHeaderColorClick);
        }

        init()
    }

    {
        const buttonAim = document.querySelector(".js-buttonAim");

        const onChangeAimInnerHTML = () => {
            const aim = document.querySelector(".js-sectionAim");
            if (aim.innerHTML === "Wytrwała nauka i znalezienie pracy w zawodzie programisty.") {
                aim.innerHTML = "Dalsza praca w zawodzie budowlanym";
            } else { aim.innerHTML = "Wytrwała nauka i znalezienie pracy w zawodzie programisty." }

        }

        const onChangeButtonAimInnerText = () => {
            if (buttonAim.innerText === "Zmiana celu na niewłaściwy") {
                buttonAim.innerText = "Zmiana celu na właściwy";
            } else { buttonAim.innerText = "Zmiana celu na niewłaściwy" }
        }

        const init = () => {
            buttonAim.addEventListener("click", onChangeAimInnerHTML);
            buttonAim.addEventListener("click", onChangeButtonAimInnerText);
        }

        init();
    }

    {
        const buttonHobby = document.querySelector(".js-buttonHobby");
        const hobbyContainer = document.querySelector(".section__hobbyContainer");

        const onToggleHobbyClassList = () => {
            hobbyContainer.classList.toggle("js-hidden");
        }

        const onChangebuttonHobbyText = () => {
            if (hobbyContainer.classList.contains("js-hidden")) {
                buttonHobby.innerText = "Pokaż zainteresowania";
            } else { buttonHobby.innerText = "Ukryj zainteresowania" }
        }
        const init = () => {
            buttonHobby.addEventListener("click", onToggleHobbyClassList);
            buttonHobby.addEventListener("click", onChangebuttonHobbyText);
        }
        init()

    };
}