import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { RegistroEgresosService } from '../../servicios/registro-egresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector-egresos',
  templateUrl: './selector-egresos.page.html',
  styleUrls: ['./selector-egresos.page.scss'],
})
export class SelectorEgresosPage implements OnInit {
  datos_egresos;
  datos_Registros;


  constructor(private registroEgresosService: RegistroEgresosService,private registroUsuarioService: RegistroUsuarioService, private router:Router) { }

  ngOnInit() {
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

  obtenerEgresos(){
    console.log(this.datos_egresos)
    this.registroEgresosService.obtenerEgresos().subscribe(
      (response:any)=>{
        if(response.egresos){
          this.datos_egresos = new response.egresos ("", 0 ,"")
          this.router.navigateByUrl('/inicio')
      }
        console.log("Datos de egresos: ",this.datos_egresos);
      },
      error=>{
        alert("Error en la peticion");
      }
    );
  }

}
