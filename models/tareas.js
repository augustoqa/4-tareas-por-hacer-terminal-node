const Tarea = require("./tarea");
require("colors");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => (this._listado[tarea.id] = tarea));
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, index) => {
      const id = `${index + 1}`.green;
      const estado = tarea.completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${id}. ${tarea.desc} :: ${estado}`);
    });
  }
}

module.exports = Tareas;
