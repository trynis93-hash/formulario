// Función que muestra un cuadro de diálogo y obliga a responder
function hacerPreguntaObligatoria(mensaje) {
  let respuesta = "";

  while (!respuesta) {
    // prompt() abre una ventana emergente en el navegador para pedir datos
    let entrada = prompt(mensaje);

    // Si el usuario no cancela la ventana, limpiamos los espacios en blanco
    if (entrada !== null) {
      respuesta = entrada.trim();
    }

    // Si la respuesta sigue vacía (o si el usuario presionó "Cancelar")
    if (!respuesta) {
      console.warn(
        "❌ Error: Este campo no puede estar vacío. Inténtalo de nuevo.",
      );
      // Un alert también sirve para que el usuario lo note inmediatamente
      alert("❌ Este campo es obligatorio. Por favor, llénalo.");
    }
  }

  return respuesta;
}

// Función principal
function iniciarFormulario() {
  // Limpiar la consola antes de empezar
  console.clear();

  // Imprimir un encabezado con estilos (el %c permite aplicar CSS en la consola)
  console.log(
    "%c📋 FORMULARIO DE REGISTRO",
    "color: #007bff; font-size: 16px; font-weight: bold;",
  );
  console.log("===============================\n");

  // Recolectar datos
  const nombre = hacerPreguntaObligatoria("1. Ingresa tu nombre:");
  const apellido = hacerPreguntaObligatoria("2. Ingresa tu apellido:");
  const profesion = hacerPreguntaObligatoria(
    "3. Ingresa tu profesión o estudio:",
  );

  // Mostrar el mensaje de éxito
  console.log(
    "\n%c✅ ¡Formulario completado con éxito!",
    "color: #28a745; font-size: 14px; font-weight: bold;",
  );

  // Agrupar los datos en un objeto para mostrarlos en una tabla
  const datosUsuario = {
    Nombre: nombre,
    Apellido: apellido,
    Profesión: profesion,
  };

  // console.table crea una tabla visual muy útil en el navegador
  console.table(datosUsuario);
}

// Iniciar el programa
iniciarFormulario();
