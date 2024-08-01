import { Component } from '@angular/core';
import { TareasService } from './Services/Tareas.Services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundoparcial';

  constructor(
    private tareasService: TareasService
  ) {}

  agregarTarea(titulo: string, descripcion: string, fecha: string, hora: string) {
    this.tareasService.agregarTarea(titulo, descripcion, fecha, hora);
    }
    
    obtenerTareas() {
    return this.tareasService.obtenerTareas();
    }

  
}
