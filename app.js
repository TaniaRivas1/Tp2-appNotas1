const process = require('process');

const {agregarNota, actualizarNota, eliminarNota, listarNotas} = require('./funcionesDeTareas');

const accion = process.argv[2];

switch (accion) {
    case "agregar":
        let titulo = process.argv[3];
        let listaDeLibros = {
            titulo,
            estado: 'pendiente',
        }
        agregarNota(listaDeLibros)
        break;

    case "actualizar":
        actualizarNota(process.argv[3])
        break;

    case "eliminar" :
        eliminarNota(process.argv[3])
        break;
    case "listar" :
        listarNotas(process.argv[3])
        break;
    case undefined :
            console.log("Debes colocar una accion");
        break;
    default :
            console.log("Esta accion no esta disponible, por favor utiliza cualquiera de las siguientes(agregar, actualizar, eliminar, listar");
        break;
}



