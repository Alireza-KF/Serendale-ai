const BurgerMenu = document.getElementById("BurgerMenu");
const Menu = document.getElementById("Menu");
const CloseMenu = document.getElementById("CloseMenu");

BurgerMenu.addEventListener("click", () => {

    Menu.classList.remove("hidden");
    Menu.classList.add("flex");
    BurgerMenu.classList.toggle("hidden");

});

CloseMenu.addEventListener("click", () => {

    Menu.classList.remove("flex");
    Menu.classList.add("hidden");
    BurgerMenu.classList.toggle("hidden");

});