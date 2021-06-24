import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./home/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-usaurio',
    loadChildren: () => import('./home/registro-usaurio/registro-usaurio.module').then( m => m.RegistroUsaurioPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./home/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'registrar-egresos',
    loadChildren: () => import('./home/registrar-egresos/registrar-egresos.module').then( m => m.RegistrarEgresosPageModule)
  },
  {
    path: 'listar-egresos',
    loadChildren: () => import('./home/listar-egresos/listar-egresos.module').then( m => m.ListarEgresosPageModule)
  },
  {
    path: 'selector-egresos',
    loadChildren: () => import('./home/selector-egresos/selector-egresos.module').then( m => m.SelectorEgresosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
