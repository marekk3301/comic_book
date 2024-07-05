function toggleNav() {
    var navMenu = document.getElementById("navContent");
    var menuButton = document.getElementById("menuButton");
    if (navMenu.style.display === "none") {
        navMenu.style.display = "flex";
        menuButton.src = "assets/close_icon.svg";
    } else {
        navMenu.style.display = "none";
        menuButton.src = "assets/menu_icon.svg";
    }
}