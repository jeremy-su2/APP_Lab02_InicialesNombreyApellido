import { Component, OnInit } from '@angular/core';
import { RegistroEgresosService } from '../../servicios/registro-egresos.service';


@Component({
  selector: 'app-listar-egresos',
  templateUrl: './listar-egresos.page.html',
  styleUrls: ['./listar-egresos.page.scss'],
})
export class ListarEgresosPage implements OnInit {

  constructor(private registroEgresosService: RegistroEgresosService) { }
  datos_egresos;

  ngOnInit() {
  }

  ionVieWillEnter(){
    this.obtenerEgresos();
  }

  obtenerEgresos(){
    this.registroEgresosService.obtenerEgresos().subscribe(
      (response:any)=>{
        if(response.egreso){this.datos_egresos = response.egresos}
        console.log("Datos de egresos: ",this.datos_egresos);
      },
      error=>{
        alert("Error en la peticion");
      }
    );
  }
}
