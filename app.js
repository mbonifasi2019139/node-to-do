const argv = require("./config/yargs.js").argv;
const colors = require("colors");
const colorsSafe = require("colors/safe");
const porHacer = require("./to-do/to-do.js");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado(argv.completado);

        console.log("================== Por Hacer ==================".rainbow);
        for (const tarea of listado) {
            console.log("Tarea: ", colorsSafe.bgBlue(tarea.descripcion));
            console.log(`Estado: ${tarea.completado}`);
        }
        console.log("===============================================".rainbow);

        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
        break;
}