import { Component, OnInit } from '@angular/core';

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
  Items: Group[] = [
    {
      Name: "GroupQ",
      groupLink: "link.sh/122124",
      ID: 2018, 
      groupMembers: ["User1", "User2", "User3"], 
      dateAdded: "2019/3/20"
    },
    {
      Name: "GroupA",
      groupLink: "link.sh/35468",
      ID: 2022,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2022/08/15"
    },
    {
      Name: "GroupB",
      groupLink: "link.sh/32145",
      ID: 2020,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2020/06/23"
    },
    {
      Name: "GroupC",
      groupLink: "link.sh/98456",
      ID: 2019,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2019/03/12"
    },
    {
      Name: "GroupD",
      groupLink: "link.sh/73264",
      ID: 2023,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2023/01/28"
    },
    {
      Name: "GroupE",
      groupLink: "link.sh/54628",
      ID: 2021,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2021/11/05"
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
interface Group {
  Name: string;
  groupLink: string;
  ID: number;
  groupMembers: String[];
  dateAdded: string;
}
