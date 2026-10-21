const formulario = document.querySelector("#form-horno");

function validarFormulario(event) {
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const pedido = document.querySelector("#pedido").value;

    const avisoNombre = document.querySelector("#aviso-nombre");
    const avisoCorreo = document.querySelector("#aviso-correo");
    const avisoPedido = document.querySelector("#aviso-pedido");

    let hayError = false;

    avisoNombre.textContent = "";
    avisoCorreo.textContent = "";
    avisoPedido.textContent = "";

    if (nombre === "") {
        avisoNombre.textContent = "Inserta tu nombre.";
        hayError = true;
    }

    if (correo === "") {
        avisoCorreo.textContent = "Inserta tu correo.";
        hayError = true;
    } else if (!correo.includes("@")) {
        avisoCorreo.textContent = "Tu correo debe contener @.";
        hayError = true;
    }

    if (pedido.trim() === "") {
        avisoPedido.textContent = "Indica que saltenas queres.";
        hayError = true;
    }

    if (hayError) {
        event.preventDefault();
    }
}

formulario.addEventListener("submit", validarFormulario);