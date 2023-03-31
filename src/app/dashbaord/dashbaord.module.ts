import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashbaordRoutingModule } from './dashbaord-routing.module';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { BookManagementComponent } from './components/book-management/book-management.component';
import { GroupManagementComponent } from './components/group-management/group-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ManagementTemplateComponent } from './components/management-template/management-template.component';
import { BookDetailsComponent } from './components/detailed-tables/book-details/book-details.component';
import { UserDetailsComponent } from './components/detailed-tables/user-details/user-details.component';
import { GroupDetailsComponent } from './components/detailed-tables/group-details/group-details.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    BookManagementComponent,
    GroupManagementComponent,
    DashboardComponent,
    NavigationComponent,
    ManagementTemplateComponent,
    BookDetailsComponent,
    UserDetailsComponent,
    GroupDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashbaordRoutingModule,
    FormsModule
  ]
})
export class DashbaordModule { }
