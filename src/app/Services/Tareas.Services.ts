import { Injectable } from "@angular/core";
import { ITarea } from "../Interfaces/To_Do_List.interface";


@Injectable({
    providedIn: "root"
})
export class TareasService{
    tareas: ITarea[] = []
    agregarTarea (titulo: string, descripcion: string, fecha: string, hora: string) {
        this.tareas.push({titulo, descripcion, fecha, hora})
    }

    obtenerTareas() {
        return this.tareas
    }
}