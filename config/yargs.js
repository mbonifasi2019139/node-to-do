const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
};
const completado = {
    alias: "c",
    default: false,
    desc: "Marca como completado o pendiente la tarea",
};

const argv = require("yargs")
    .command("crear", "Crea una tarea por hacer", {
        descripcion,
    })
    .command("actualizar", "Actualizar una tarea por hacer", {
        descripcion,
        completado,
    })
    .command("borrar", "Borrar una tarea por hacer", {
        descripcion,
    })
    .command("listar", "Lista las tareas", {
        completado: {
            alias: "c",
            default: false,
        },
    })
    .help().argv;

module.exports = {
    argv,
};