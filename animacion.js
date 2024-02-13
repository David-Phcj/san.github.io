function respuestas() {
    var respuesta = document.getElementById("todo");
    var menusan = document.getElementById("respuesta-opciones")

    if (respuesta.style.display === "none" || respuesta.style.display === ""){
        respuesta.style.display = "block";
        menusan.style.display = "none"
    } else{
        respuesta.style.display = "none";
    }
}
function moverBoton() {
    var boton = document.getElementById('respuesta-no');
    var mensajes = [
        "¡Tendras que decirme que si!",
        "¡No es tan dificl decir que si!",
        "¡El boton correcto esta justo debajo!",
        "¿Prefieres alargar lo inevitable?",
        "¡Talvez te equivocaste, te doy otra oportunidad!",
        "¿Porque?",
        "¡Estaremos aqui todo el dia!",
        "¿Porque tomas esa decision?",
        "¡Esto es importante elige bien!"]
    
    var mensajeElemento = document.getElementById('mensaje-negacion');
    var indice = Math.floor(Math.random() * mensajes.length);

    // Cambia la posición del botón al ser presionado
    boton.style.marginTop = Math.random() * 200 + 'px';
    boton.style.marginRight = Math.random() * 200 + 'px';
    boton.style.marginBottom = Math.random() * 200 + 'px';
    boton.style.marginLeft = Math.random() * 200 + 'px';

    mensajeElemento.innerText = mensajes[indice];
  }
  

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

