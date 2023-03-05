import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagementComponent } from './components/book-management/book-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupManagementComponent } from './components/group-management/group-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        component: UserManagementComponent
      },
      {
        path: 'books',
        component: BookManagementComponent
      },
      {
        path: 'groups',
        component: GroupManagementComponent
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
     ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbaordRoutingModule {}
