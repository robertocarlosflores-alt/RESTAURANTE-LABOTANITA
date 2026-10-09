const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

// Activar o desactivar el modo oscuro
darkModeBtn.addEventListener("click", function () {

    // Alternar la clase dark-mode
    body.classList.toggle("dark-mode");

    // Comprobar si el modo oscuro está activado
    const darkModeActive = body.classList.contains("dark-mode");

    // Cambiar el texto del botón
    if (darkModeActive) {
        darkModeBtn.textContent = "☀️ Modo claro";
        darkModeBtn.setAttribute("aria-label", "Activar modo claro");
        darkModeBtn.setAttribute("aria-pressed", "true");
    } else {
        darkModeBtn.textContent = "🌙 Modo oscuro";
        darkModeBtn.setAttribute("aria-label", "Activar modo oscuro");
        darkModeBtn.setAttribute("aria-pressed", "false");
    }
});


/* ==================================
   MISIÓN 2: MENÚ HAMBURGUESA
================================== */

// Seleccionar el botón y el menú
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Abrir y cerrar el menú
menuToggle.addEventListener("click", function () {

    // Mostrar u ocultar el menú
    mainNav.classList.toggle("open");

    // Animar el botón hamburguesa
    menuToggle.classList.toggle("active");

    // Comprobar si el menú está abierto
    const menuAbierto = mainNav.classList.contains("open");

    // Actualizar el estado accesible del botón
    menuToggle.setAttribute("aria-expanded", String(menuAbierto));

    // Actualizar la descripción del botón
    menuToggle.setAttribute(
        "aria-label",
        menuAbierto ? "Cerrar menú" : "Abrir menú"
    );
});


/* ==================================
   CERRAR MENÚ AL ELEGIR UNA OPCIÓN
================================== */

// Seleccionar todos los enlaces del menú
const menuLinks = document.querySelectorAll("#mainNav a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Cerrar el menú
        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");

        // Actualizar los atributos del botón
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    });

});