const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
}

const filtroCompletado = {
    alias: 'c',
    type: 'boolean'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualliza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Muestra en consola las tareas', {
        completado: filtroCompletado
    })
    .help()
    .argv;


module.exports = {
    argv
}