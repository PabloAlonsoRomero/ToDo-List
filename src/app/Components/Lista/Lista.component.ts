import { Component } from "@angular/core";
import { ITarea } from "src/app/Interfaces/To_Do_List.interface";
import { TareasService } from "src/app/Services/Tareas.Services";

@Component({
    selector: 'lista',
    templateUrl: 'Lista.component.html'
})

export class ListaComponent{
    tareas = this.tareasService.obtenerTareas()
    tareaEditar: ITarea | null = null

    constructor(
        private tareasService: TareasService
    ) {}
        
    eliminarTarea(indice: number) {
        this.tareas.splice(indice,1)
    }

    editarTarea(indice: number){
        this.tareaEditar = this.tareas[indice];
    }

    cerrarEditor() {
        this.tareaEditar = null;
    }
}