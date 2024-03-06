import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  listaTareas:string[] = [];
  nuevaTarea:string = '';

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getListaDeTareas();
  }

  //agregar tarea  a la lista de tareas
  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getListaDeTareas();
  };

  //eliminar tarea   de la lista de tareas
  eliminarTarea(index:number){
    this._tareasService.eliminarTarea(index)
    this.listaTareas = this._tareasService.getListaDeTareas();
  }
}
