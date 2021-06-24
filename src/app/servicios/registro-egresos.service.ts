import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistroEgresosService {

  server = environment.server+ "/egreso";

  constructor(private http: HttpClient) { }

  registroEgresos(datos_egresos){
    return this.http.post(`${this.server}/crear-egreso`, datos_egresos);
  }

  obtenerEgresos(){
    return this.http.get(`${this.server}/obtener-egresos`);
  }

}
