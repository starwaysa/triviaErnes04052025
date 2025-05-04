// ============================================================
//           SCRIPT COMPLETO PARA TRIVIA v8 - Nuevos Temas Ambientales
// ============================================================

// --- Base de Datos de Preguntas (NUEVOS TEMAS) ---
const baseDePreguntasPorTema = {
    // Clave 'recursosNaturales' corresponde a Tema - Recursos Naturales
    recursosNaturales: [
        { pregunta: "¿Qué son los recursos naturales?", opciones: ["Materiales creados en fábricas", "Elementos que usamos solo en los videojuegos", "Cosas que se obtienen directamente de la naturaleza", "Cosas hechas por las personas con máquinas"], respuesta: 2 },
        { pregunta: "¿Cuál de estos es un ejemplo de recurso natural?", opciones: ["Una silla de plástico", "Una roca", "Una pelota de fútbol", "Un cuaderno"], respuesta: 1 },
        { pregunta: "¿Qué puede pasar si no cuidamos los recursos naturales?", opciones: ["Aumentarán mágicamente", "Se volverán invisibles", "Podrían agotarse y faltar en el futuro", "Se transformarán en juguetes"], respuesta: 2 },
        { pregunta: "¿Qué tipo de recursos no se agotan con el uso?", opciones: ["Recursos artificiales", "Recursos renovables", "Recursos inagotables", "Recursos reciclados"], respuesta: 2 },
        { pregunta: "¿Qué nombre reciben los recursos que no pueden recuperarse una vez usados?", opciones: ["Renovables", "Inagotables", "No contaminantes", "No renovables"], respuesta: 3 },
        { pregunta: "¿De dónde se obtienen los materiales para confeccionar nuestros calzados, según la naturaleza?", opciones: ["Del aire", "De materiales naturales como el cuero", "De videojuegos", "De luces artificiales"], respuesta: 1 },
        { pregunta: "¿Cuál de los siguientes es un recurso artificial?", opciones: ["Lana", "Árbol", "Botella plástica", "Roca"], respuesta: 2 }
    ],
    // Clave 'laBasura' corresponde a Tema - La basura
    laBasura: [
        { pregunta: "¿Qué es la basura?", opciones: ["Materiales que usamos todos los días", "Objetos nuevos que compramos en la tienda", "Cosas que no usamos y desechamos", "Elementos de la naturaleza"], respuesta: 2 },
        { pregunta: "¿Qué puede causar la basura si no se maneja adecuadamente?", opciones: ["Alegría en los animales", "Enfermedades y daño al ambiente", "Mejora del aire puro", "Más árboles en el bosque"], respuesta: 1 },
        { pregunta: "¿Cuál de los siguientes residuos es orgánico?", opciones: ["Un trozo de cartón", "Una cáscara de banana", "Un envase de plástico", "Una lata de gaseosa"], respuesta: 1 },
        { pregunta: "¿Qué significa que un residuo sea biodegradable?", opciones: ["Se convierte en metal", "Se quema fácilmente", "Se descompone naturalmente", "Se vuelve invisible"], respuesta: 2 },
        { pregunta: "¿Qué tipo de basura no se descompone fácilmente?", opciones: ["Basura orgánica", "Basura biodegradable", "Basura inorgánica", "Basura natural"], respuesta: 2 },
        { pregunta: "¿Qué ejemplo representa una mala acción respecto a la basura?", opciones: ["Tirarla en un basurero", "Separarla según su tipo", "Reciclarla", "Arrojarla al río"], respuesta: 3 },
        { pregunta: "¿Qué tipo de basura puede usarse como abono para las plantas?", opciones: ["Botellas de vidrio", "Cáscaras de frutas", "Bolsas plásticas", "Pilas usadas"], respuesta: 1 }
    ],
    // Clave 'conservacionRecursos' corresponde a Tema - Conservación de los Recursos Naturales
    conservacionRecursos: [
        { pregunta: "¿De qué depende la vida de todos los seres vivos según la lección?", opciones: ["Del dinero", "De la tecnología", "De la utilización adecuada de los recursos naturales", "De los vehículos"], respuesta: 2 },
        { pregunta: "¿Qué nos permitirá conservar recursos como bosques, agua y suelo?", opciones: ["Tener más dinero", "Contar con sus beneficios durante muchos años", "Viajar por el mundo", "Construir más casas"], respuesta: 1 },
        { pregunta: "¿Qué acción ayuda a conservar los recursos naturales?", opciones: ["Usar el automóvil para distancias cortas", "Tirar basura en las calles", "Utilizar bicicletas para los paseos", "Tala de árboles sin control"], respuesta: 2 },
        { pregunta: "¿Por qué se recomienda evitar el uso de la madera como combustible?", opciones: ["Porque no calienta lo suficiente", "Para conservar los bosques y árboles", "Porque produce mucho humo", "Es una opción muy cara"], respuesta: 1 },
        { pregunta: "¿Qué se debe hacer con el agua para conservarla?", opciones: ["Usar toda la que se quiera sin control", "Dejar los grifos abiertos", "Usar la cantidad necesaria para cada caso", "Desperdiciarla al lavar el coche"], respuesta: 2 },
        { pregunta: "Una acción importante para cuidar el medio ambiente es:", opciones: ["Tirar basuras en las calles y arroyos", "No tirar basuras en las calles y arroyos", "Quemar la basura al aire libre", "Acumular basura en casa"], respuesta: 1 },
        { pregunta: "¿Qué beneficio tiene proteger y cultivar árboles en diversos sitios?", opciones: ["Ensucian el suelo con sus hojas", "Ayudan a conservar los recursos naturales y los ecosistemas", "Impedir la construcción de edificios", "Solo sirven de adorno"], respuesta: 1 },
        { pregunta: "¿Qué significa cuidar de los seres que forman parte de los ecosistemas?", opciones: ["Solo proteger a los animales domésticos", "No interactuar con la naturaleza", "Asegurar el equilibrio y la salud de los diferentes componentes del ecosistema", "Eliminar a los depredadores"], respuesta: 2 }
    ]
};


// --- Variables de Estado del Juego ---
let preguntasJuegoActual = [];
let indicePreguntaActual = 0;
let puntaje = 0;
let preguntasRespondidas = 0;
let totalPreguntasJuego = 0;

// --- Referencias a Elementos del DOM ---
const pantallaInicio = document.getElementById('pantalla-inicio');
const dropdownTema = document.getElementById('tema');
const btnEmpezar = document.getElementById('btn-empezar');

const contenedorJuego = document.getElementById('contenedor-juego');
const elementoProgreso = document.getElementById('progreso');
const elementoPuntaje = document.getElementById('puntaje');
const elementoPregunta = document.getElementById('pregunta');
const contenedorOpciones = document.getElementById('opciones');
const btnSiguiente = document.getElementById('btn-siguiente');

const contenedorResultado = document.getElementById('resultado');
const btnReiniciar = document.getElementById('btn-reiniciar');

// --- Cargar Sonidos ---
let sonidoCorrecto, sonidoIncorrecto, sonidoFanfarria, musicaFondo;
try {
    sonidoCorrecto = new Audio('sounds/correct.wav');
    sonidoIncorrecto = new Audio('sounds/incorrect.wav');
    sonidoFanfarria = new Audio('sounds/fanfare.mp3');
    musicaFondo = new Audio('sounds/background_music.mp3');
    musicaFondo.loop = true;
    musicaFondo.volume = 0.3;
} catch (e) {
    console.error("Error al cargar los archivos de audio:", e);
    // Objeto 'dummy' para evitar errores si los sonidos no cargan
    sonidoCorrecto = sonidoIncorrecto = sonidoFanfarria = musicaFondo = { play: () => {}, pause: () => {}, currentTime: 0 };
}


// --- Funciones del Juego ---

function mostrarPantallaInicio() {
    if (pantallaInicio) pantallaInicio.style.display = 'block';
    if (contenedorJuego) contenedorJuego.style.display = 'none';
    if (contenedorResultado) contenedorResultado.style.display = 'none';
    if (btnReiniciar) btnReiniciar.style.display = 'none';
    if (musicaFondo && !musicaFondo.paused) {
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
    }
    // La función actualizarContadorPreguntasDropdown ya no es necesaria aquí
}

// Función comentada, no se necesita con el HTML limpio actual
/*
function actualizarContadorPreguntasDropdown() {
    // Código anterior eliminado o comentado
}
*/

function iniciarJuego() {
    const temaSeleccionado = dropdownTema.value;
    const NUM_PREGUNTAS_TODOS = 10; // Puedes ajustar cuántas preguntas tomar de "Todos"

    if (temaSeleccionado === 'todos') {
        let todasLasPreguntas = [].concat(...Object.values(baseDePreguntasPorTema));
        // Barajar las preguntas
        todasLasPreguntas.sort(() => Math.random() - 0.5);
        // Seleccionar un número fijo de preguntas (o todas si son menos)
        preguntasJuegoActual = todasLasPreguntas.slice(0, Math.min(NUM_PREGUNTAS_TODOS, todasLasPreguntas.length));
        totalPreguntasJuego = preguntasJuegoActual.length; // Usar el número real de preguntas tomadas

    } else if (baseDePreguntasPorTema[temaSeleccionado]) {
        // Copiar y barajar las preguntas del tema seleccionado
        preguntasJuegoActual = [...baseDePreguntasPorTema[temaSeleccionado]];
        preguntasJuegoActual.sort(() => Math.random() - 0.5);
        totalPreguntasJuego = preguntasJuegoActual.length;
    } else {
        console.error("Tema seleccionado inválido:", temaSeleccionado);
        mostrarPantallaInicio(); // Volver al inicio si hay error
        return;
    }

    // Reiniciar estado del juego
    indicePreguntaActual = 0;
    puntaje = 0;
    preguntasRespondidas = 0;

    // Mostrar/Ocultar elementos de la interfaz
    if (pantallaInicio) pantallaInicio.style.display = 'none';
    if (contenedorJuego) contenedorJuego.style.display = 'block';
    if (contenedorResultado) contenedorResultado.style.display = 'none';
    if (btnReiniciar) btnReiniciar.style.display = 'none';

    actualizarEstadoJuego();
    cargarPregunta();

    // Iniciar música de fondo (si existe y se puede reproducir)
    if (musicaFondo && musicaFondo.play) {
        musicaFondo.play().catch(e => console.log("Reproducción automática de música de fondo bloqueada por el navegador."));
    }
}

function cargarPregunta() {
     // Si no hay preguntas o se llegó al final, terminar el juego
     if (!preguntasJuegoActual || preguntasJuegoActual.length === 0 || indicePreguntaActual >= totalPreguntasJuego ) {
        terminarJuego();
        return;
    }

    const preguntaActual = preguntasJuegoActual[indicePreguntaActual];
    elementoPregunta.textContent = preguntaActual.pregunta;
    contenedorOpciones.innerHTML = ''; // Limpiar opciones anteriores

    // Crear botones para cada opción
    preguntaActual.opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('boton-opcion');
        boton.dataset.index = index; // Guardar índice para verificar respuesta
        boton.disabled = false;     // Habilitar botón
        boton.style.opacity = "1";  // Asegurar opacidad normal
        // Remover clases de estado previo si las hubiera
        boton.classList.remove('correcta', 'incorrecta');
        // Añadir evento de click para seleccionar esta opción
        boton.addEventListener('click', () => seleccionarOpcion(index, boton));
        contenedorOpciones.appendChild(boton);
    });

    actualizarEstadoJuego();
    // Ocultar el botón "Siguiente" hasta que se responda
    if (btnSiguiente) btnSiguiente.style.display = 'none';
}

function seleccionarOpcion(indiceSeleccionado, botonSeleccionado) {
    // Evitar múltiples selecciones para la misma pregunta
    if (preguntasRespondidas > indicePreguntaActual) return;
    preguntasRespondidas++; // Marcar esta pregunta como respondida

    const preguntaActual = preguntasJuegoActual[indicePreguntaActual];
    const indiceCorrecto = preguntaActual.respuesta;

    // Deshabilitar todos los botones de opción y aplicar estilos
    const botones = contenedorOpciones.querySelectorAll('button');
    botones.forEach(boton => {
        boton.disabled = true; // Deshabilitar
        let indexBoton = parseInt(boton.dataset.index);

        // Marcar la opción correcta
        if (indexBoton === indiceCorrecto) {
            boton.classList.add('correcta');
        }
        // Marcar la opción seleccionada si fue incorrecta
        if (indexBoton === indiceSeleccionado && indexBoton !== indiceCorrecto) {
             boton.classList.add('incorrecta');
        }
        // Atenuar las opciones no seleccionadas (ni la correcta ni la incorrecta marcada)
        if(indexBoton !== indiceCorrecto && indexBoton !== indiceSeleccionado) {
             boton.style.opacity = "0.6";
        }
    });

    // Actualizar puntaje y reproducir sonido
    if (indiceSeleccionado === indiceCorrecto) {
        puntaje++;
        if (sonidoCorrecto && sonidoCorrecto.play) sonidoCorrecto.play();
    } else {
        if (sonidoIncorrecto && sonidoIncorrecto.play) sonidoIncorrecto.play();
    }

    actualizarEstadoJuego();
    // Mostrar el botón "Siguiente"
    if (btnSiguiente) btnSiguiente.style.display = 'block';
}

function siguientePregunta() {
    indicePreguntaActual++; // Pasar a la siguiente pregunta
    cargarPregunta();      // Cargar la nueva pregunta
}


function terminarJuego() {
    // Detener música de fondo
    if (musicaFondo && !musicaFondo.paused) {
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
    }

    // Calcular porcentaje de aciertos
    let porcentaje = totalPreguntasJuego > 0 ? Math.round((puntaje / totalPreguntasJuego) * 100) : 0;

    // Reproducir fanfarria si el puntaje es bueno (ej: 70% o más)
    if (porcentaje >= 70) {
        if (sonidoFanfarria && sonidoFanfarria.play) {
             sonidoFanfarria.play();
        }
    }

    // Ocultar contenedor del juego y mostrar resultados
    if (contenedorJuego) contenedorJuego.style.display = 'none';
    if (contenedorResultado) {
        let mensajeFinal = "¡Tema Completado!";
        let mensajeMotivacion = "";

        // Mensajes según el porcentaje obtenido
        if (porcentaje >= 80) {
            mensajeMotivacion = "¡Felicidades! ¡Excelente puntaje!";
        } else if (porcentaje >= 70) {
             mensajeMotivacion = "¡Muy bien! ¡Gran esfuerzo!";
        } else if (porcentaje >= 50) {
             mensajeMotivacion = "¡Bien! ¡Sigue aprendiendo!";
        } else {
            mensajeMotivacion = "¡Ánimo! Repasar un poco más te ayudará.";
        }

        // Mostrar el resumen del resultado
        contenedorResultado.innerHTML = `
            <h2>${mensajeFinal}</h2>
            <p>Tu puntaje final es: ${puntaje} de ${totalPreguntasJuego} (${porcentaje}%)</p>
            <p>${mensajeMotivacion}</p>
        `;
        contenedorResultado.style.display = 'block';
    }

    // Ocultar botón "Siguiente" y mostrar botón "Reiniciar"
    if (btnSiguiente) btnSiguiente.style.display = 'none';
    if (btnReiniciar) {
         btnReiniciar.textContent = "Elegir Otro Tema"; // Cambiar texto del botón
         btnReiniciar.style.display = 'block';
    }
}


function actualizarEstadoJuego() {
    // Actualizar texto de puntaje
    if (elementoPuntaje) {
        elementoPuntaje.textContent = `Puntaje: ${puntaje}`;
    }
    // Actualizar texto de progreso
    if (elementoProgreso && totalPreguntasJuego > 0) {
        // Asegurarse de no mostrar "Pregunta 11 de 10", por ejemplo
        let numPreguntaMostrar = Math.min(indicePreguntaActual + 1, totalPreguntasJuego);
        elementoProgreso.textContent = `Pregunta ${numPreguntaMostrar} de ${totalPreguntasJuego}`;
    } else if (elementoProgreso) {
        // Si no hay preguntas, limpiar el texto de progreso
        elementoProgreso.textContent = '';
    }
}


// --- Event Listeners ---
// Mostrar pantalla de inicio al cargar la página
document.addEventListener('DOMContentLoaded', mostrarPantallaInicio);

// Iniciar juego al hacer clic en "Empezar"
if (btnEmpezar) {
    btnEmpezar.addEventListener('click', iniciarJuego);
}

// Cargar siguiente pregunta al hacer clic en "Siguiente"
if (btnSiguiente) {
    btnSiguiente.addEventListener('click', siguientePregunta);
}

// Volver a la pantalla de inicio al hacer clic en "Elegir Otro Tema"
if (btnReiniciar) {
    btnReiniciar.addEventListener('click', mostrarPantallaInicio);
}

// --- FIN DEL SCRIPT ---