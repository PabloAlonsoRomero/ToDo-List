import { Component } from '@angular/core';
import { TareasService } from './Services/PEAR.TareasService.Services';

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

  agregarTarea(titulo: string, descripcion: string) {
    this.tareasService.agregarTarea(titulo, descripcion);
    }
    
    obtenerTareas() {
    return this.tareasService.obtenerTareas();
    }

  
}
