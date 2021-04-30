import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'autenticacion', 
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },*/
  {
    path: '', 
    loadChildren: () => import('./components/page/page.module').then(m => m.PageModule)
  },
  {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
