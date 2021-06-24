import { Component, OnInit } from '@angular/core';
import { $, $$ } from 'protractor';
import { RegistroEgresosService } from '../../servicios/registro-egresos.service'

export class EnviarEgresos{

  constructor(
  public descripcion: string,
  public precio: number,
){}
}

@Component({
  selector: 'app-registrar-egresos',
  templateUrl: './registrar-egresos.page.html',
  styleUrls: ['./registrar-egresos.page.scss'],
})
export class RegistrarEgresosPage implements OnInit {

  datos_egresos;

  constructor(private registroEgresosService: RegistroEgresosService) { 
    this.datos_egresos = new EnviarEgresos("", 0);
  }

  ngOnInit() {
  }

  enviarEgresos(){
    this.registroEgresosService.registroEgresos(this.datos_egresos).subscribe(
      (Response:any)=>{
        if(Response.egreso){
          alert("Datos registrados correctamente")
        }else{
          alert("Datos no registrados")
        }
      },
      error=>{
        alert("Error en registrar datos")
      }
    )
    console.log("Datos de egresos: ", this.datos_egresos);
  }

}
