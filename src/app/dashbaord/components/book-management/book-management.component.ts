import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {
  //Set these information later from the DB
  Title: string = 'User Management';
  Type: string = "Books" 
  Count: number = 0;
  Filters: string[] = ["ID", "Name", "Email"]; 
  Headers: string[] = [" Name", "ID", "Email", "Date Added"]
  Items: any[][] = [["User1", 2018, "Hesham@gmail.com", "2019/3/20"], ["User2", 2010, "Hesham42@gmail.com","2018/2/5"]]

  constructor() { }

  ngOnInit(): void {
  }

}
