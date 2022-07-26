// pone una sombra en el menu (navbar) al scrollear

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("menu").style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.2)";
    } else {
        document.getElementById("menu").style.boxShadow = "none";
    }
}


//menu hamburguesa! (responsive topnav menu)
function burgerMenu() {
    let x = document.getElementById("miNavbar");
    document.getElementById("menu").style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.2)"; /*al hacer click en el menu hamburguesa pongo una sombra*/
    if (x.className === "menu__list") {
        x.className += " responsivo";
    } else {
        x.className = "menu__list";
    }
}