function toggleNav() {
    var navMenu = document.getElementById("navContent");
    var menuButton = document.getElementById("menuButton");
    console.log("in");
    if (navMenu.style.display === "flex") {
        console.log("close");
            navMenu.style.display = "none";
            menuButton.src = "assets/menu_icon.svg";
    } else {
        console.log("open");
            navMenu.style.display = "flex";
            menuButton.src = "assets/close_icon.svg";
    }
}