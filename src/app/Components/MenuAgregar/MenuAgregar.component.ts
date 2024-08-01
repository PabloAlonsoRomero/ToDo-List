import { Component } from "@angular/core";
import { TareasService } from "src/app/Services/Tareas.Services";


@Component({
    selector: 'MenuAgregar',
    templateUrl: 'MenuAgregar.component.html'
})

export class MenuAgregarComponent{
    titulo = ""
    descripcion = ""
    fecha = "";
    hora = "";

    constructor(
        private tareasService: TareasService
    ) {}

    agregarTarea() {
        this.tareasService.agregarTarea(this.titulo, this.descripcion, this.fecha, this.hora);
        this.titulo = "";
        this.descripcion = "";
        this.fecha = "";
        this.hora = "";
    }
        
}