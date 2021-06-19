import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarEgresosPage } from './registrar-egresos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarEgresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarEgresosPageRoutingModule {}
