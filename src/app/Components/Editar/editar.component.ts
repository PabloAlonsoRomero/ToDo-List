import { Component } from "@angular/core";
import { TareasService } from "src/app/Services/PEAR.TareasService.Services";

@Component({
    selector: 'editar',
    templateUrl: './editar.component.html'
})

export class EditarComponent{
    nuevotitulo = ""
    nuevadescripcion = ""


    constructor(
        private tareasService: TareasService
    ) {}

}