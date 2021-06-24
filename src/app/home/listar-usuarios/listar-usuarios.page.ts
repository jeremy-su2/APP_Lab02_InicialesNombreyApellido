import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {
  
  constructor(private registroUsuarioService: RegistroUsuarioService) { }
  datos_Registros;

  ngOnInit() {
  }

  ionVieWillEnter(){
    this.obtenerFormulario();
  }

  obtenerFormulario(){
    this.registroUsuarioService.obtenerFormulario().subscribe(
      (response:any)=>{
        console.log(response)
        this.datos_Registros = response.usuarios;
      },
      error=>{
        alert("Error en la peticion");
      }
    );
  }

}
