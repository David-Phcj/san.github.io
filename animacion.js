document.addEventListener("DOMContentLoaded", function () {
    // Añade la clase para la animación de escalar el oso-corazon después de un breve retraso
    setTimeout(function () {
        document.getElementById("oso-corazon").style.transform = "scale(1)";
    }, 500);

    // Añade la clase para la animación de fadeIn después de que el contenido se haya cargado completamente
    setTimeout(function () {
        document.getElementById("contenido").classList.add("fadeIn");
    }, 1000);
});

function toggleRazones() {
    var razonesContainer = document.getElementById("razones-amor");

    if (razonesContainer.style.display === "none" || razonesContainer.style.display === "") {
        razonesContainer.style.display = "block";
    } else {
        razonesContainer.style.display = "none";
    }
}

function aprobarCasamiento() {
    var nombreTu = document.getElementById("nombre-tu").value;
    var nombreNovia = document.getElementById("nombre-novia").value;
    var mensajeCasamiento = document.getElementById("mensaje-casamiento");

    if (nombreTu && nombreNovia) {
        // Oculta el formulario y muestra el mensaje de casamiento
        document.getElementById("formulario-casamiento").style.display = "none";
        mensajeCasamiento.style.display = "block";
        mensajeCasamiento.innerHTML = `<p>¡Enhorabuena! ${nombreNovia} y ${nombreTu} se han casado exitosamente. Que esta unión esté llena de amor y felicidad.</p>`;
    } else {
        alert("Por favor, completa ambos campos antes de aprobar el casamiento.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("oso-corazon").classList.add("escalar");
    }, 500);

    AOS.init({
        duration: 800,  // Duración de las animaciones en milisegundos
        once: true,     // Solo activa las animaciones una vez
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Fecha del próximo aniversario (formato: año, mes (0-11), día)
    var proximoAniversario = new Date(2024, 3, 22);  // Cambia la fecha según tu aniversario

    // Función para calcular los días restantes
    function calcularDiasRestantes() {
        var ahora = new Date();
        // Establecer las horas, minutos, segundos y milisegundos a 0 para comparar solo las fechas
        ahora.setHours(0, 0, 0, 0);
        proximoAniversario.setHours(0, 0, 0, 0);

        var diferencia = proximoAniversario - ahora;
        var diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

        return diasRestantes;
    }

    // Función para actualizar el contador
    function actualizarContador() {
        var diasRestantes = calcularDiasRestantes();
        var contadorDias = document.getElementById("dias-restantes");

        if (diasRestantes === 1) {
            contadorDias.innerHTML = "¡Solo queda 1 día para nuestro aniversario!";
        } else {
            contadorDias.innerHTML = "Faltan " + diasRestantes + " días para nuestro aniversario";
        }
    }

    // Llama a la función para actualizar el contador al cargar la página
    actualizarContador();

    // Actualiza el contador cada día (cada 24 horas)
    setInterval(actualizarContador, 86400000);  // 86400000 milisegundos = 24 horas
});
