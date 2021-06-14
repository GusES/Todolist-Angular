import { Component } from '@angular/core';
import { DbConexionService } from './db-conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private dbConexion: DbConexionService) { }

  ngOnInit(): void { this.listarTareas() }

  title: string = 'todolist';
  tareas: any = [];
  tarea: any = { id: null, checked: false, title: '' };

  listarTareas(): any {
    this.dbConexion.listarTareas().subscribe(
      datos => {
        const obj: any = datos;
        const tareasTmp: any = [];
        this.tareas = tareasTmp;
        for (let i of obj) {
          if (i.estado == 0) { i.estado = false; }
          tareasTmp.push({ 'id': i.idTareas, 'checked': Boolean(i.estado), 'title': i.titulo })
        }
        this.tareas = tareasTmp;
      }
    )
  }

  crearTarea(): void {
    const title = this.tarea.title.trim();
    if (title.length !== 0) {
      this.dbConexion.crearTarea(this.tarea).subscribe()
      this.tarea.title = '';
      setTimeout(() => { this.listarTareas(); }, 100);
    } else {
      alert('El Campo no puede estar vacio.')
    }
  }

  cambiarEstadoTarea(posicionArray: number, tareaID: number): void {
    const indice = posicionArray;
    const idTarea = tareaID;
    this.tareas[indice].checked = !this.tareas[indice].checked;
    console.log(idTarea)
  }
}