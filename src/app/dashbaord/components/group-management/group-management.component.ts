import { Component, OnInit } from '@angular/core';
import { Group } from './Interfaces/group.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  //Set these information later from the DB
  Title: string = 'Group Management'
  Type: string = 'Groups'
  Filters: string[] = ["ID", "Name"]
  Headers: string[] = ["Name", "ID", "Members ", "Date Added"]
  Items: Group[] = []

  constructor(private service:DashboardService) { }

  ngOnInit(): void {
    this.service.getAll('Groups').subscribe((res)=>{
      this.Items=res
      this.Items.forEach((group)=> {
        group.createdAtFormatted = new Date(group.createdAt.seconds*1000)
      })
    })
  }

}
