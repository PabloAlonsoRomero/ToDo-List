import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ITarea } from "src/app/Interfaces/To_Do_List.interface";
import { TareasService } from "src/app/Services/Tareas.Services";

@Component({
    selector: 'editar',
    templateUrl: './Editar.component.html'
})

export class EditarComponent{
    @Input() tarea: ITarea | null = null;
    @Output() cerrar = new EventEmitter<void>();

    nuevotitulo = ""
    nuevadescripcion = ""
    nuevaFecha = "";
    nuevaHora = ""

    constructor(
        private tareasService: TareasService
    ) {}

    ngOnChanges() {
        if (this.tarea) {
            this.nuevotitulo = this.tarea.titulo;
            this.nuevadescripcion = this.tarea.descripcion;
        }
    }

    guardarCambios() {
        if (this.tarea) {
            this.tarea.titulo = this.nuevotitulo;
            this.tarea.descripcion = this.nuevadescripcion;
        }
        this.cerrar.emit();
    }

    cancelar() {
        this.cerrar.emit();
    }
}