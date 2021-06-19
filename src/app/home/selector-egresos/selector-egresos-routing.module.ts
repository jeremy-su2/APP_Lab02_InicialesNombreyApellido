import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectorEgresosPage } from './selector-egresos.page';

const routes: Routes = [
  {
    path: '',
    component: SelectorEgresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectorEgresosPageRoutingModule {}
