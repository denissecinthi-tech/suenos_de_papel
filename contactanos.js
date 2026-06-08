function mostrarMensaje(texto, tipo) {
    const respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${texto}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}

// Validación del formato de nombre
function validarNombreFormato(nombre) {
    if (nombre === "") return false;
    
    let palabras = nombre.split(/\s+/);
    for (let i = 0; i < palabras.length; i++) {
        let p = palabras[i];
        if (p.length > 0) {
            if (p.charAt(0) !== p.charAt(0).toUpperCase() || p.slice(1) !== p.slice(1).toLowerCase()) {
                return false;
            }
        }
    }
    
    let regex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/;
    return regex.test(nombre);
}

function validarCorreo(correo) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function validarTelefono(telefono) {
    let regex = /^[0-9]{7,8}$/;
    return regex.test(telefono);
}

// Enviar Correo
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value.trim();


    if (nombre === "") {
        mostrarMensaje("⚠️ Complete todos los datos antes de enviar el Correo.", "warning");
        return;
    }

   // Validaciones del formulario
    if (!validarNombreFormato(nombre)) {
        mostrarMensaje("❌ El nombre debe iniciar con mayúscula en cada palabra y el resto en minúsculas (Ej: Juan Pérez).", "danger");
        return;
    }

    if (!validarCorreo(correo)) {
        mostrarMensaje("❌ Ingrese una dirección de correo electrónico válida.", "danger");
        return;
    }

    if (!validarTelefono(telefono)) {
        mostrarMensaje("❌ Ingrese un número de teléfono válido (7 u 8 dígitos).", "danger");
        return;
    }

    if (asunto === null || asunto === "") {
        mostrarMensaje("❌ Seleccione un asunto de la lista.", "danger");
        return;
    }

    if (mensaje.length < 10) {
        mostrarMensaje("❌ El mensaje es demasiado corto (mínimo 10 caracteres).", "danger");
        return;
    }

    // Mensaje de éxito si todo es correcto
    mostrarMensaje(`✅ ¡Muchas gracias ${nombre}! Tu mensaje fue validado y enviado correctamente.`, "success");
    this.reset();
});

// Enviar a WhatsApp
function enviarWhatsApp() {
    let nombre = document.getElementById("nombre").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || mensaje === "") {
        mostrarMensaje("⚠️ Complete todos los datos antes de enviar a WhatsApp.", "warning");
        return;
    }

    if (!validarNombreFormato(nombre)) {
        mostrarMensaje("❌ El nombre debe iniciar con mayúscula en cada palabra y el resto en minúsculas para enviar.", "danger");
        return;
    }

    let texto = `Hola, mi nombre es ${nombre}. Quería realizar la siguiente consulta: ${mensaje}`;
    let url = `https://api.whatsapp.com/send?phone=59173289053&text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
}