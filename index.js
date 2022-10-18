'use strict';

/*
 * Alsinet, Nicolas
 */

//Declaración de variables globales
let discos = [];
let codigos = [];
let pistas = [];


// Función Cargar:
/**
 * Hace todo el llamado a los prompts para perdir los datos y genera el disco
 * el cual se pushea en el array de discos
 * @returns Array de discos 
 */
function Cargar() {
    let nombre = validaTexto('Ingrese el Nombre del Disco', true);
    let autor = validaTexto('Ingrese el Nombre del Autor');
    let codigo = pedirCodigo();
    let pistas = armarPistas();
    let disco = armarDisco(nombre, autor, codigo, pistas);
    agregarDisco(disco);
    mostrarDiscos();
    mostrarDisco(disco)
    return discos;
}
/**
 * Una ves cargado un disco se ejecuta para mostrar el listado de todos los discos
 * @returns 
 */
function mostrarDiscos () {
    listaDiscos.innerHTML = '<tr><th>Codigo</th><th>Disco</th><th>Artista</th></tr>';
    let discosTotal = document.getElementById('total-disc');
    if (discos.length == 0) {
        discosTotal.innerHTML = 0;
        return
    }
    discosTotal.innerHTML = discos.length;
    document.getElementById('total-disc_promedio').innerHTML = calcularPromedio();
    listarDiscos();
}
/**
 * Ingresa el objeto disco desde el cual se toman todos los datos a ser mostrados y llama a la funcion que lista las pistas
 
 * @param {objeto disco} disco 
 * @returns 
 */
function mostrarDisco(disco) {
    if (discos.length == 0) {
        document.getElementById('info_disco-nombre').innerHTML = 'No hay discos'
        return
    } 
    document.getElementById('info_disco-nombre').innerHTML = disco.Nombre;
    document.getElementById('info_disco-autor').innerHTML = disco.Autor;
    document.getElementById('info_disco-codigo').innerHTML = disco.Codigo;
    document.getElementById('info_disco-pistas').innerHTML = disco.Pistas.length;
    document.getElementById('info_disco-duracion').innerHTML = calcularDuracion(disco.Pistas);
    listarPistas(disco.Pistas)
}
/**
 * Llama a la funcion buscar disco y valida el ingreso de un valor apropiado.
 */
function Buscar () {
    buscarDisco(validarNumero('Ingrese el codigo del Disco a buscar', 1, 999));
}
