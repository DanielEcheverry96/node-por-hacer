const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado(argv.completado);
        for (const tarea of listado) {
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${ tarea.completado  ? 'Completada' : 'Sin completar'}`);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea por hacer');
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado)
            console.log('Tarea actualizada');
        else
            console.log('La tarea no existe');
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}