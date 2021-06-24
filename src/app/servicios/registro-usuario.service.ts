import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  server = environment.server+ "/usuario";

  constructor( private http: HttpClient) { }

  registroFormulario(datos_formulario){
    return this.http.post(`${this.server}/crear-usuario`, datos_formulario);
  }
  
  obtenerFormulario(){
    return this.http.get(`${this.server}/obtener-usuarios`);
  }

}


   

