// Base de datos temporal (Arreglo donde guardaremos a los empleados)
const empleados = [];

// Función auxiliar para obligar a llenar los campos sin dejar vacíos
function solicitarDato(mensaje) {
    let dato = "";
    while (!dato) {
        let entrada = prompt(mensaje);
        // Si el usuario presiona "Cancelar", retornamos null para abortar la acción
        if (entrada === null) return null; 
        
        dato = entrada.trim();
        if (!dato) {
            alert("❌ Este campo es obligatorio. No puedes dejarlo vacío.");
        }
    }
    return dato;
}

// Función principal que controla el flujo del programa
function iniciarSistema() {
    let ejecutando = true;

    // El ciclo mantiene el programa vivo hasta que 'ejecutando' sea false
    while (ejecutando) {
        // Mostrar menú principal y guardar la opción elegida
        const opcion = prompt(
            "🏢 SISTEMA DE GESTIÓN DE EMPLEADOS\n\n" +
            "Elige una opción (escribe el número):\n" +
            "1. Registrar nuevo empleado\n" +
            "2. Listar todos los empleados\n" +
            "3. Buscar empleado por Identificación\n" +
            "4. Mostrar cantidad total de empleados\n" +
            "5. Salir del sistema"
        );

        // Evaluar la opción seleccionada
        switch (opcion) {
            case "1": // REGISTRAR EMPLEADO
                console.clear();
                console.log("%c--- 📝 REGISTRO DE EMPLEADO ---", "color: #007bff; font-weight: bold;");
                
                const id = solicitarDato("1. Identificación:");
                if (id === null) break; // Si cancela, vuelve al menú principal
                
                // Validación extra: Verificar que la ID no exista ya en el sistema
                const existe = empleados.some(emp => emp["Identificación"] === id);
                if (existe) {
                    alert("⚠️ Error: Ya existe un empleado registrado con esa identificación.");
                    break;
                }

                const nombre = solicitarDato("2. Nombre completo:");
                if (nombre === null) break;
                
                const cargo = solicitarDato("3. Cargo:");
                if (cargo === null) break;
                
                const salario = solicitarDato("4. Salario:");
                if (salario === null) break;
                
                const area = solicitarDato("5. Área de trabajo:");
                if (area === null) break;

                // Guardar los datos como un objeto dentro del arreglo
                empleados.push({
                    "Identificación": id,
                    "Nombre": nombre,
                    "Cargo": cargo,
                    "Salario": salario,
                    "Área": area
                });
                
                alert(`✅ Empleado ${nombre} registrado con éxito.`);
                console.log(`✅ Empleado ${nombre} registrado con éxito.`);
                break;

            case "2": // LISTAR EMPLEADOS
                console.clear();
                console.log("%c--- 📋 LISTA DE EMPLEADOS ---", "color: #28a745; font-weight: bold;");
                
                if (empleados.length === 0) {
                    console.log("No hay empleados registrados en el sistema.");
                    alert("ℹ️ No hay empleados registrados todavía.");
                } else {
                    console.table(empleados);
                    alert(`Mostrando ${empleados.length} empleado(s). Revisa la consola (F12) para ver la tabla detallada.`);
                }
                break;

            case "3": // BUSCAR EMPLEADO
                console.clear();
                const idBuscada = prompt("🔍 Ingresa la identificación del empleado a buscar:");
                
                // Si el usuario cancela o deja vacío, salir de esta opción
                if (!idBuscada) break; 

                // Buscar el objeto que coincida con la ID proporcionada
                const empleadoEncontrado = empleados.find(emp => emp["Identificación"] === idBuscada.trim());
                
                if (empleadoEncontrado) {
                    console.log("%c--- 👤 EMPLEADO ENCONTRADO ---", "color: #17a2b8; font-weight: bold;");
                    console.table([empleadoEncontrado]); // Mostrarlo en una tabla de 1 sola fila
                    alert(`✅ Empleado encontrado: ${empleadoEncontrado.Nombre} - ${empleadoEncontrado.Cargo}.\nRevisa la consola para más detalles.`);
                } else {
                    console.warn("❌ Empleado no encontrado.");
                    alert("❌ No se encontró ningún empleado con la identificación: " + idBuscada);
                }
                break;

            case "4": // MOSTRAR CANTIDAD TOTAL
                console.clear();
                const total = empleados.length;
                console.log(`%c📊 TOTAL DE EMPLEADOS: ${total}`, "color: #6f42c1; font-weight: bold; font-size: 14px;");
                alert(`📊 El sistema tiene actualmente ${total} empleado(s) registrado(s).`);
                break;

            case "5": // SALIR
            case null: // También sale si el usuario presiona "Cancelar" en el menú principal
                ejecutando = false;
                console.clear();
                console.log("%c👋 Sistema cerrado. ¡Hasta luego!", "color: #dc3545; font-size: 16px; font-weight: bold;");
                break;

            default: // MANEJO DE ERRORES (Opción incorrecta)
                alert("⚠️ Opción no válida. Por favor, ingresa un número del 1 al 5.");
                break;
        }
    }
}

// Arrancar el programa
iniciarSistema();
