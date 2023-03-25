import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbaordRoutingModule } from './dashbaord-routing.module';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { BookManagementComponent } from './components/book-management/book-management.component';
import { GroupManagementComponent } from './components/group-management/group-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ManagementTemplateComponent } from './components/management-template/management-template.component';
import { ItemTableComponent } from './components/item-table/item-table.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    BookManagementComponent,
    GroupManagementComponent,
    DashboardComponent,
    NavigationComponent,
    ManagementTemplateComponent,
    ItemTableComponent
  ],
  imports: [
    CommonModule,
    DashbaordRoutingModule
  ]
})
export class DashbaordModule { }
