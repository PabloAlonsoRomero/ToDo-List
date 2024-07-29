import { Injectable } from "@angular/core";
import { ITarea } from "../Interfaces/PEAR-Todolist.interface";


@Injectable({
    providedIn: "root"
})
export class TareasService{
    tareas: ITarea[] = []
    agregarTarea (titulo: string, descripcion: string) {
        this.tareas.push({titulo, descripcion})
    }

    obtenerTareas() {
        return this.tareas
    }
}