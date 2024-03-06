import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';

  //getTareas () obtiene las tareas almacenadas en el Local Storage, si no hay ninguna devuelve una lista vacía.
  constructor() { }

  getListaDeTareas():string[]{
    let listaDeTareas = JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
    return listaDeTareas;
  }

  agregarTarea(tarea: string){
    const tareas = this.getListaDeTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(indice: number){
    const tareas = this.getListaDeTareas();
    tareas.splice(indice, 1);
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas))
  }
}
