import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUsaurioPage } from './registro-usaurio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUsaurioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUsaurioPageRoutingModule {}
