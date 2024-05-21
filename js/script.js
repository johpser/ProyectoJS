/* Algoritmo con condicional de calcular la edad de una persona y si es mayor de edad o menor de edad */

function calcularEdad(anio, anioNacimiento) { 
    return anio - anioNacimiento;
}

function verificarEdad() {
    let anio = 2024;
    let nombre = prompt("Ingrese el nombre");
    let anioNacimiento = parseInt(prompt("Ingrese año de nacimiento")); 
    let resultado = calcularEdad(anio, anioNacimiento);

    if (resultado >= 18) { 
        alert("Bienvenido " + nombre + ", usted tiene " + resultado + " años y es mayor de edad");
        console.log("Bienvenido " + nombre + ", usted tiene " + resultado + " años y es mayor de edad.");
    } else {
        alert(nombre + ", usted tiene " + resultado + " años y es menor de edad.");
    }
}

verificarEdad();

/* Algoritmo con ciclo de Turnos */
function turnos() {
    let turnos = 1;
    while (turnos <= 10) {
        alert("Vamos por el turno número " + turnos);
        turnos++;
    }
}

turnos();

/* Programa Interactivo Reservar una Cita */

function mostrarOpciones() {
    let opcion = prompt("Seleccione una opción:\n1. Registrarme \n2. Seleccionar una Cita \n3. Salir");

    switch (opcion) {
        case '1':
            let nombre = prompt("Ingrese su Nombre y Apellido");

            if (nombre === null || nombre.trim() === "") {
                alert("Ingrese datos correctamente");
                mostrarOpciones();
            } else {
                alert("Bienvenido " + nombre);
                mostrarOpciones();
            }
            break;
        case '2':
            let horario = prompt("Seleccione un horario para la cita:\n1. 10:00AM - 11:00AM \n2. 11:00AM - 12:00PM \n3. 12:00PM - 01:00PM");
            
            switch (horario) {
                case '1':
                    let dia1 = prompt("Ingrese el día de su cita");
                    alert("Su cita es el " + dia1 + " de 10:00AM - 11:00AM");
                    mostrarOpciones();
                    break;
                case '2':
                    let dia2 = prompt("Ingrese el día de su cita");
                    alert("Su cita es el " + dia2 + " de 11:00AM - 12:00PM");
                    mostrarOpciones();
                    break;
                case '3':
                    let dia3 = prompt("Ingrese el día de su cita");
                    alert("Su cita es el " + dia3 + " de 12:00PM - 01:00PM");
                    mostrarOpciones();
                    break;
                default:
                    alert("Elija una opción correcta");
                    mostrarOpciones();
            }
            break;
        case '3':
            alert('Gracias por usar el sistema. ¡Hasta luego!');
            break;
        default:
            alert('Ingrese una opción válida');
            mostrarOpciones();
    }
}

mostrarOpciones();