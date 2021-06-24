import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarEgresosPageRoutingModule } from './registrar-egresos-routing.module';

import { RegistrarEgresosPage } from './registrar-egresos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarEgresosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistrarEgresosPage]
})
export class RegistrarEgresosPageModule {}
