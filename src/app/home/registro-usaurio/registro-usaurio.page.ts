import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';

export class EnviarDatos{

  constructor(
  public nombre: string,
  public apellido: string,
  public rut: string,
  public correo: string,
  public password: string,
){}
}

@Component({
  selector: 'app-registro-usaurio',
  templateUrl: './registro-usaurio.page.html',
  styleUrls: ['./registro-usaurio.page.scss'],
})
export class RegistroUsaurioPage implements OnInit {

datos_formulario;
constructor(private registroUsuarioService: RegistroUsuarioService) {
  this.datos_formulario = new EnviarDatos("","","","","");
 }

  ngOnInit() {
  }

  enviarDatos(){
    this.registroUsuarioService.registroFormulario(this.datos_formulario).subscribe(
      (Response:any)=>{
        if(Response.usuario){
          alert("Datos registrados correctamente")
        }else{
          alert("Datos no registrados")
        }
      },
      error=>{
        alert("Error en registrar datos")
      }
    )
    console.log("Datos del formulario: ", this.datos_formulario);
  }

}
