import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  //Set these information later from the DB
  Title: string = 'User Management'
  Type: string = 'Users'
  Filters: string[] = ["ID", "Name", "Email"]
  Headers: string[] = ["Name", "ID", "Email", "Date Added"]
  Items: User[] = [
    {
      Name: "User1", 
      firstName: "Khaled", 
      lastName: "Ahmed", 
      Email: "hesham1@gmail.com", 
      ID: 2018, 
      dateAdded: "2019/3/20"
    },
    {
      Name: "User2",
      firstName: "Megan",
      lastName: "Smith",
      Email: "megan.smith@example.com",
      ID: 2022,
      dateAdded: "2022/11/02"
    },
    {
      Name: "User3",
      firstName: "Juan",
      lastName: "Gonzalez",
      Email: "jgonzalez@mail.com",
      ID: 2020,
      dateAdded: "2020/07/12"
    },
    {
      Name: "User4",
      firstName: "Emily",
      lastName: "Jones",
      Email: "emjones@example.com",
      ID: 2019,
      dateAdded: "2019/05/11"
    },
    {
      Name: "User5",
      firstName: "Mark",
      lastName: "Johnson",
      Email: "markjohnson@mail.com",
      ID: 2023,
      dateAdded: "2023/02/15"
    },
    {
      Name: "User6",
      firstName: "Sarah",
      lastName: "Brown",
      Email: "sarahbrown@example.com",
      ID: 2021,
      dateAdded: "2021/09/18"
    }
]

  constructor() { }
  ngOnInit(): void {
  }
}

interface User {
  Name: string;
  firstName: string;
  lastName: string;
  Email: string;
  ID: number;
  dateAdded: string;
}