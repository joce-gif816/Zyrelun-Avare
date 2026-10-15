document.addEventListener("DOMContentLoaded", () => {
    
    // Mensaje de bienvenida emergente al cargar el sitio
    alert("Bienvenido a Servicios Tecnológicos - Zyrelun Avaré");

    // Reloj en tiempo real
    const headerElement = document.querySelector("header");
    const clockDiv = document.createElement("div");
    clockDiv.style.fontSize = "0.9rem";
    clockDiv.style.marginTop = "5px";
    clockDiv.style.color = "#444";
    headerElement.appendChild(clockDiv);

    function actualizarReloj() {
        const ahora = new Date();
        let horas = ahora.getHours();
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');
        const ampm = horas >= 12 ? 'p.m.' : 'a.m.';
        
        horas = horas % 12;
        horas = horas ? horas : 12; // La hora '0' debe ser '12'
        const horasStr = horas.toString().padStart(2, '0');

        clockDiv.textContent = `Hora actual: ${horasStr}:${minutos}:${segundos} ${ampm}`;
    }
    setInterval(actualizarReloj, 1000);
    actualizarReloj();

    // Detectar selección de un servicio en el menú desplegable (<select>)
    const selectServicio = document.getElementById("servicio");
    if (selectServicio) {
        selectServicio.addEventListener("change", (e) => {
            console.log(`Servicio seleccionado: ${e.target.value}`);
        });
    }

    // Detectar eventos del mouse (mouseover / mouseleave) en los botones
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("mouseover", () => {
            boton.style.opacity = "0.8";
        });
        boton.addEventListener("mouseleave", () => {
            boton.style.opacity = "1";
        });
    });

    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); // Evitar envío por defecto

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const servicio = document.getElementById("servicio").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Validación de campos vacíos
            if (!nombre || !correo || !mensaje) {
                alert("Por favor, completa todos los campos obligatorios del formulario.");
                return;
            }

            // Crear objeto con los datos del formulario
            const datosContacto = {
                nombre,
                correo,
                telefono,
                servicio,
                mensaje,
                fecha: new Date().toISOString()
            };

            // Guardar en el almacenamiento local (localStorage) serializando con JSON.stringify
            localStorage.setItem("ultimoContacto", JSON.stringify(datosContacto));

            alert(`¡Gracias por contactarnos, ${nombre}! Tu mensaje ha sido registrado con éxito.`);
            
            formulario.reset();
        });
    }
});