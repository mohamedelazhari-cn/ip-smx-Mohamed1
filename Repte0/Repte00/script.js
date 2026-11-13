// ERROR 1: Error provocado por el código

function errorCodigo() {

    try {

        let numero = 10;

        if (numero === 10) {
            throw new Error("Se ha producido un error en el código.");
        }

    } catch (error) {

        console.error("ERROR 1:", error.message);

        alert("Error de código: " + error.message);

    }

}


// ERROR 2: Opción incorrecta

function comprobarOpcion() {

    try {

        let opcion = prompt("Elige una opción: 1, 2 o 3");

        if (opcion !== "1" && opcion !== "2" && opcion !== "3") {
            throw new Error("La opción introducida no es válida.");
        }

        alert("Has seleccionado la opción " + opcion);

    } catch (error) {

        console.error("ERROR 2:", error.message);

        alert("Error de opción: " + error.message);

    }

}