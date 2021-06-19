import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsaurioPageRoutingModule } from './registro-usaurio-routing.module';

import { RegistroUsaurioPage } from './registro-usaurio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUsaurioPageRoutingModule
  ],
  declarations: [RegistroUsaurioPage]
})
export class RegistroUsaurioPageModule {}
