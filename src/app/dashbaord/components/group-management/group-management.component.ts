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
  Filters: string[] = ["id", "name"]
  Headers: string[] = ["Name", "ID", "Members ", "Date Added"]
  Items: Group[] = [
    {
      name: "GroupQ",
      groupLink: "link.sh/122124",
      id: 2018, 
      groupMembers: ["User1", "User2", "User3"], 
      dateAdded: "2019/3/20"
    },
    {
      name: "GroupA",
      groupLink: "link.sh/35468",
      id: 2022,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2022/08/15"
    },
    {
      name: "GroupB",
      groupLink: "link.sh/32145",
      id: 2020,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2020/06/23"
    },
    {
      name: "GroupC",
      groupLink: "link.sh/98456",
      id: 2019,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2019/03/12"
    },
    {
      name: "GroupD",
      groupLink: "link.sh/73264",
      id: 2023,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2023/01/28"
    },
    {
      name: "GroupE",
      groupLink: "link.sh/54628",
      id: 2021,
      groupMembers: ["User1", "User2", "User3"],
      dateAdded: "2021/11/05"
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
interface Group {
  name: string;
  groupLink: string;
  id: number;
  groupMembers: String[];
  dateAdded: string;
}
