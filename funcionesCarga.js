/**
 * 
 * @param {Texto del prompt} mensaje 
 * @returns texto valido
 */
 function validaTexto (mensaje) {
    let textoValido;
    do {
        textoValido = prompt(mensaje);
        if (textoValido == '' || textoValido == null)
        alert(`Este campo no puede queda vacío`);
    } while (textoValido == ''|| textoValido == null)
    return textoValido
}
/**
 * Valida números ingresados
 * @param {*Mensaje del prompt} mensaje 
 * @param {*Rango minimo del numero a validar} min 
 * @param {*Rango maximo del numero a valiate} max 
 * @returns numero valido
 */
function validarNumero (mensaje,min,max) {
    let numeroValido;
    let flag = false;
    do {
        numeroValido = parseInt(prompt(mensaje));
        if (isNaN(numeroValido) || numeroValido < min || numeroValido > max) {
            alert(`Debe ingresar un numero entre los valores ${min} al ${max} inclusives`);
        } else {
            flag = true;
        }
    } while (!flag);
    return numeroValido;
}
/**
 * Solicita un codigo el cual valida y lo almacena en un array de todos los codigos ingresados
 * @returns codigo unico del disco
 */
function pedirCodigo() {
    let codigoValido;
    do {
        codigoValido = validarNumero(`Ingrese el codigo único del Disco`,1,999);
    } while (!almacenaCodigos(codigoValido))
    codigos.push(codigoValido);
    return codigoValido
}
/**
 * Valida que el codigo sea unico dentro del array de codigos
 * @param {*Se le ingresa un numero valido} codigo 
 * @returns boolean
 */
function almacenaCodigos(codigo) {
    if (codigos.length == 0) {
        return true
    } else {
        for (let c of codigos) {
            if (c === codigo) {
                alert(`El codigo ${codigo} ya fue usado, debe ingresar otro valor`);
                return false;
            }
        }
    }
    return true;
}
/**
 * Solicita el nombre y la diracion de las pistas
 * @returns Objeto con nombre y duracion de una pista.
 */
function pedirPista () {
    let nombrePista = validaTexto(`ingrese el nombre de la Pista`);
    let duracionPista = validarNumero('Ingrese duración de la Pista en segundos',1,7200);
    let pista = {
        Nombre: nombrePista,
        Duracion: duracionPista
    };
    return pista
}
/**
 * Un loop que pide pistas indefinidamente
 * @returns Array de objetos con las pistas.
 */
function armarPistas() {
    pistas = [];
    do {
        pista = pedirPista()
        pistas.push(pista);
    } while (confirm(`Desea agregar otra pista?`))
    return pistas
}
/**
 * Arma objeto Disco con todos los datos ingresado
 * @param {*} nombre 
 * @param {*} autor 
 * @param {*} codigo 
 * @param {*} pistas 
 * @returns Objeto Disco
 */
function armarDisco (nombre, autor, codigo, pistas) {
    disco = {
        Nombre: nombre,
        Autor: autor,
        Codigo: codigo,
        Pistas: pistas
    };
    return disco;
}
/**
 * Arma todo el array de objetos discos
 * @returns Array de objetos 
 */
function agregarDisco (disco) {
    discos.push(disco)
    return discos;
}