import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectorEgresosPageRoutingModule } from './selector-egresos-routing.module';

import { SelectorEgresosPage } from './selector-egresos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectorEgresosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectorEgresosPage]
})
export class SelectorEgresosPageModule {}
