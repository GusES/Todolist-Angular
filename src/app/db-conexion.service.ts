import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DbConexionService {
  constructor(private http: HttpClient) { }

  URL = "http://localhost/PHPConexinoDB/";

  crearTarea(tarea: any) {
    return this.http.post(`${this.URL}crearTarea.php`, JSON.stringify(tarea));
  }

  listarTareas() {
    return this.http.get(`${this.URL}listarTareas.php`);
  }

  cambiarEstadoTarea(tareaID: number) {
    return this.http.post(`${this.URL}cambiarEstadoTarea.php`, JSON.stringify({ id: tareaID }));
  }
}
