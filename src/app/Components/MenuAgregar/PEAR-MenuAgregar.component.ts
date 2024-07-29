import { Component } from "@angular/core";
import { TareasService } from "src/app/Services/PEAR.TareasService.Services";


@Component({
    selector: 'MenuAgregar',
    templateUrl: 'PEAR-MenuAgregar.component.html'
})

export class MenuAgregarComponent{
    titulo = ""
    descripcion = ""

    constructor(
        private tareasService: TareasService
    ) {}

    agregarTarea() {
        this.tareasService.agregarTarea(this.titulo, this.descripcion);
        this.titulo = "";
        this.descripcion = "";
    }
        
}