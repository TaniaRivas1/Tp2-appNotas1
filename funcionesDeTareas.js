const fs = require('fs');

let notas = require('./tareas.json');
const guardarJson = (notas) => {
    fs.writeFileSync('./tareas.json', JSON.stringify(notas, null, 3));
};

module.exports = {

    agregarNota : (nota) => {
        notas.push(nota);
        guardarJson(notas);
    return console.log("Agregado a notas");
    },

    actualizarNota : (titulo) =>{
        for (let index = 0; index < notas.length; index++) {
            let buscar = (titulo) =>{
                notas.titulo === titulo.toLowerCase();
                buscar.filter === 0 ? "No se encuentra el titulo" : "Titulo encontrado";
            } 
            let notasActualizadas = notas.map(nota => {
                if (nota.titulo.toLowerCase() === titulo.toLowerCase()){
                    nota.estado = "Terminado"
                     return nota
                    }
                    return nota
            })
         guardarJson(notasActualizadas);
         return console.log("Notas actualizadas");
        }
        },

        eliminarNota : (titulo) => {
            let resultado = notas.filter(nota=> 
                {for (let index = 0; index < notas.length; index++) {
                    let sin = nota.titulo.toLowerCase() === titulo.toLowerCase();
                    return !sin 
                }
                return nota
                })
            guardarJson(resultado);
        return console.log("Libro eliminado");
        },
         
        listarNotas : () =>{
            for (let a = 0 ; a <= 1; a++) {
                    return console.log(notas)
                    }
                }
            }
