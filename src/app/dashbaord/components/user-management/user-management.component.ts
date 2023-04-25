import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  //Set these information later from the DB
  Title: string = 'User Management'
  Type: string = 'Users'
  Filters: string[] = ["id", "name", "Email"]
  Headers: string[] = ["Name", "ID", "Email", "Date Added"]
  Items: User[] = []

  constructor(private service:DashboardService) { }
  ngOnInit(): void {
    this.service.getAll('Users').subscribe((res)=>{
      this.Items=res
    })
  }
}

