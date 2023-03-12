import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './commonServices/auth.service';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashbaord/dashbaord.module').then((m) => m.DashbaordModule),
    canActivate: [AuthService],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
