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


// ==========================================
// 2. MENÚ DE NAVEGACIÓN
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function cambiarMenu() {
    mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active");

    const menuAbierto = mainNav.classList.contains("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(menuAbierto)
    );

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


// ==========================================
// 3. VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ==========================================

const formularioPedido = document.querySelector("#form-pedido");
const avisoPedido = document.querySelector("#error-pedido");

function revisarPedido(event) {
    // Evita que la página se recargue al enviar
    event.preventDefault();

    // Obtener los valores de los tres campos
    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();

    // Comprobar si falta el nombre
    if (nombre === "") {
        mostrarAviso("Por favor, escribe tu nombre completo.", "error");
        return;
    }

    // Comprobar si falta el correo
    if (correo === "") {
        mostrarAviso("Por favor, escribe tu correo electrónico.", "error");
        return;
    }

    // Comprobar el formato del correo electrónico
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        mostrarAviso("El correo no parece válido. Revisa que esté bien escrito.", "error");
        return;
    }

    // Comprobar si falta el mensaje
    if (mensaje === "") {
        mostrarAviso("Por favor, escribe tu mensaje.", "error");
        return;
    }

    // Si todos los campos son correctos
    mostrarAviso(
        "¡Mensaje validado correctamente! Gracias por contactar a La Botanita Co.",
        "exito"
    );

    // Limpiar los campos después de validar
    formularioPedido.reset();
}


// ==========================================
// 4. MOSTRAR ALERTAS
// ==========================================

function mostrarAviso(texto, tipo) {
    avisoPedido.textContent = texto;

    avisoPedido.classList.remove("error", "exito");
    avisoPedido.classList.add(tipo);

    avisoPedido.hidden = false;
}

// Escuchar el envío del formulario
formularioPedido.addEventListener("submit", revisarPedido);
