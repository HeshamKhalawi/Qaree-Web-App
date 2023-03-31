import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {
  
  //Set these information later from the DB
  Title: string = 'Book Management'
  Type: string = 'Books'
  Filters: string[] = ["ID", "Name", "ISBN"]
  Headers: string[] = ["Name", "ID", "ISBN", "Date Added"]
  Items: Book[] = [
    {
      Name: "Book1",
      authors: "Author1, Author2", 
      description: "This is a great book", 
      ID: 2018, 
      ISBN: "982-0-9232-1122-4",
      Genre: ["Comedy", "Drama", "Adventure", "Sci-fi"], 
      dateAdded: "2019/3/20"
    }
    , 
    {
      Name: "Book2", 
      authors: "Author3", 
      description: "A thrilling mystery novel", 
      ID: 2021, 
      ISBN: "978-3-16-148410-0",
      Genre: ["Comedy", "Drama", "Adventure", "Sci-fi"],  
      dateAdded: "2021/12/15"
    },{Name: "Book4", authors: "Author6", description: "A guIDe to becoming financially independent", ID: 2019, ISBN: "978-4-12-147915-1",Genre: ["Comedy", "Drama", "Adventure", "Sci-fi"],  dateAdded: "2019/05/11"},
    {Name: "Book5", authors: "Author7, Author8", description: "A comprehensive introduction to artificial intelligence", ID: 2022, ISBN: "978-1-09-950262-2",Genre: ["Comedy", "Drama", "Adventure", "Sci-fi"],  dateAdded: "2022/06/30"},
    {Name: "Book6", authors: "Author9", description: "A cookbook filled with delicious and healthy recipes", ID: 2023, ISBN: "978-6-32-712840-1",Genre: ["Comedy", "Drama", "Adventure", "Sci-fi"],  dateAdded: "2023/09/18"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
interface Book {
  Name: string;
  authors: string;
  description: string;
  ID: number;
  ISBN: string;
  Genre: string[];
  dateAdded: string;
}