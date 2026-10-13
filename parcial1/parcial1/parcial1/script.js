document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#btn-confirmar");
    const mensaje = document.querySelector("#mensaje");

    boton.addEventListener("click", () => {
        mensaje.textContent = "Encargo recibido - te atiende Tu Nombre Completo";
        mensaje.classList.remove("oculto");
    });
});
