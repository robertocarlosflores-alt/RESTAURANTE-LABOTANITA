const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;


function cambiarModo() {
    body.classList.toggle("dark-mode");

    const darkModeActive = body.classList.contains("dark-mode");

    if (darkModeActive) {
        darkModeBtn.textContent = "☼ Modo claro";
        darkModeBtn.setAttribute("aria-label", "Activar modo claro");
        darkModeBtn.setAttribute("aria-pressed", "true");
    } else {
        darkModeBtn.textContent = "☾ Modo oscuro";
        darkModeBtn.setAttribute("aria-label", "Activar modo oscuro");
        darkModeBtn.setAttribute("aria-pressed", "false");
    }
}
darkModeBtn.addEventListener("click", cambiarModo);

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


function cambiarMenu() {
    mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active");

    const menuAbierto = mainNav.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", String(menuAbierto));

    if (menuAbierto) {
        menuToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        menuToggle.setAttribute("aria-label", "Abrir menú");
    }
}


menuToggle.addEventListener("click", cambiarMenu);

const menuLinks = document.querySelectorAll("#mainNav a");


function cerrarMenu() {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuLinks.forEach(function(link) {
    link.addEventListener("click", cerrarMenu);
});