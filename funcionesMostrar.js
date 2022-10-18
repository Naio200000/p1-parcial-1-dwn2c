/**
 * Lista los discos que ya fueron ingresados con su nombre, autor y codigo
 * llama a la funcion que genera el boton para buscar un disco en particular
 */
function listarDiscos () {
    for (i = 0; i < discos.length; i++) {
        let table_row = document.createElement('tr');
        let table_nombre = document.createElement('td');
        let table_autor = document.createElement('td');
        let table_codigo = document.createElement('td');
        let table_boton = generaBoton(discos[i].Codigo)
        table_nombre.innerHTML = discos[i].Nombre;
        table_autor.innerHTML = discos[i].Autor;
        table_codigo.innerHTML = discos[i].Codigo;
        table_row.appendChild(table_codigo);
        table_row.appendChild(table_nombre);
        table_row.appendChild(table_autor);
        table_row.appendChild(table_boton);
        listaDiscos.appendChild(table_row)
    }
}
/**
 * Genera el listado de las pistas de cada disco mostrado
 * @param {Array de objetos} array 
 */
function listarPistas(array){
    let listaPistas = document.getElementById('info_pistas-tabla');
    listaPistas.innerHTML = '<tr><th>Pista</th><th>Duración</th></tr>';
    for (i = 0; i < array.length; i++) {
        let table_row = document.createElement('tr');
        let table_nombre= document.createElement('td');
        let table_duracion = document.createElement('td');
        table_nombre.innerHTML = array[i].Nombre;
        table_duracion.innerHTML = array[i].Duracion;
        if (array[i].Duracion > 180) {
            table_row.setAttribute('class','rojo')
        }
        table_row.appendChild(table_nombre);
        table_row.appendChild(table_duracion);
        listaPistas.appendChild(table_row)     
    }
}
/**
 * Se ingresa el codigo del disco y genera un boton cuya ID es la misma que el codigo
 * @param {Numero ID del disco} dato 
 * @returns Boton con ID del disco y el la clase boton
 */
function generaBoton(dato) {
    let td = document.createElement('td');
    let boton = document.createElement('button');
    boton.id = dato
    boton.innerHTML = `Ver disco`
    boton.setAttribute('onclick', `buscarDisco(${dato})`)
    boton.setAttribute('class', `boton`)
    td.appendChild(boton)
    return td
}
/**
 * Se ingresa un codigo de un boton y lo muestra
 */
function buscarDisco(numero) {
    for (i = 0; i < discos.length; i++) {
        if (discos[i].Codigo == numero) {
            mostrarDisco(discos[i]);
            break
        }
    }
    document.getElementById('info_disco-nombre').innerHTML = 'No se encontró disco con ese código';
}
/**
 * Se ingresa el array de las mistas y se calcula suma la duracion de cada pista
 * @param {Array de objetos} array 
 * @returns Suma de todas las pistas
 */
function calcularDuracion (array){
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i].Duracion;
    }
    return total
}/**
 * Se llama a la funcion calcular duracion por cada disco que se encuentra en el array discos y se suma para sacar el promedio de la duracion
 * @returns 
 */
function calcularPromedio() {
    let total = 0;
    for (i = 0; i < discos.length; i++) {
        total += calcularDuracion(discos[i].Pistas)
    }
    return total / discos.length
}

/*Se ejecutan estas funciones al iniciar el programa por si hay discos cargados. */
mostrarDiscos()
mostrarDisco (discos[0])