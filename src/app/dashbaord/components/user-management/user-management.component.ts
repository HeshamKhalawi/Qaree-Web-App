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
  Filters: string[] = ["id", "name", "Email"]
  Headers: string[] = ["Name", "ID", "Email", "Date Added"]
  Items: User[] = [
    {
      name: "User1", 
      firstName: "Khaled", 
      lastName: "Ahmed", 
      Email: "hesham1@gmail.com", 
      id: 2018, 
      dateAdded: "2019/3/20"
    },
    {
      name: "User2",
      firstName: "Megan",
      lastName: "Smith",
      Email: "megan.smith@example.com",
      id: 2022,
      dateAdded: "2022/11/02"
    },
    {
      name: "User3",
      firstName: "Juan",
      lastName: "Gonzalez",
      Email: "jgonzalez@mail.com",
      id: 2020,
      dateAdded: "2020/07/12"
    },
    {
      name: "User4",
      firstName: "Emily",
      lastName: "Jones",
      Email: "emjones@example.com",
      id: 2019,
      dateAdded: "2019/05/11"
    },
    {
      name: "User5",
      firstName: "Mark",
      lastName: "Johnson",
      Email: "markjohnson@mail.com",
      id: 2023,
      dateAdded: "2023/02/15"
    },
    {
      name: "User6",
      firstName: "Sarah",
      lastName: "Brown",
      Email: "sarahbrown@example.com",
      id: 2021,
      dateAdded: "2021/09/18"
    }
]

  constructor() { }
  ngOnInit(): void {
  }
}

interface User {
  name: string;
  firstName: string;
  lastName: string;
  Email: string;
  id: number;
  dateAdded: string;
}