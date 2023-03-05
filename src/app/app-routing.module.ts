import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './commonServices/auth.service';

const routes: Routes = [
  {
    path: 'dashbaord',
    loadChildren: () =>
      import('./dashbaord/dashbaord.module').then((m) => m.DashbaordModule),
    canActivate: [AuthService],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/dashbaord', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashbaord' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
