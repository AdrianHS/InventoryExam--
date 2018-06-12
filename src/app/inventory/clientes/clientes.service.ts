import { Injectable } from '@angular/core';
import { Cliente } from './clientes';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ClientesService {
  api: string = "http://192.168.1.78:3000/";
  constructor(
    private http: HttpClient) { }

  consultarClientes() {
    return this.http.get(this.api.concat('clientes'), { responseType: 'json' });
  }
  insertarCliente(clientes: Cliente): Observable<Cliente> {
    console.log(clientes);
    return this.http.post<Cliente>(this.api.concat('crearClientes'), clientes, { responseType: 'json' })
  }
  modificarCliente(clientes: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.api.concat('actualizarClientes'), clientes, { responseType: 'json' })
  }
  borrarClientes(cedula: string): Observable<{}> {
    return this.http.delete(this.api.concat('eliminarClientes/' + cedula))
  }
}