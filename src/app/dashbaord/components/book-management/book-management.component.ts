import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Book } from './Interfaces/book.interface';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {
  
  //Set these information later from the DB
  Title: string = 'Book Management'
  Type: string = 'Books'
  Filters: string[] = ["id", "name", "isbn"]
  Headers: string[] = ["Name", "ID", "ISBN", "Publish Date"]
  Items: Book[]=[];

  constructor(private service:DashboardService) { }

  ngOnInit(): void {
    this.service.getAll('Books').subscribe((res)=>{
      console.log(res)
      this.Items=res
    })
  }

}
