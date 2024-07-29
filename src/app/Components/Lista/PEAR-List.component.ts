import { Component } from "@angular/core";
import { ITarea } from "src/app/Interfaces/PEAR-Todolist.interface";
import { TareasService } from "src/app/Services/PEAR.TareasService.Services";

@Component({
    selector: 'lista',
    templateUrl: 'PEAR-Lista.component.html'
})

export class ListaComponent{
    tareas = this.tareasService.obtenerTareas()
    tareaEditar: ITarea | null = null
    editarimagenvar = true;

    constructor(
        private tareasService: TareasService
    ) {}
        
    eliminarTarea(indice: number) {
        this.tareas.splice(indice,1)
    }

    editarImagen(){
        this.editarimagenvar = false
    }
}