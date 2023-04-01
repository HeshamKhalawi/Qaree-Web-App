import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges  } from '@angular/core';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnChanges {
  @Input() selectedBook: any = false;
  @Output() updatedBook: any = new EventEmitter<any>();
  editedBook: any = null;
  isChanged: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedBook'] && this.selectedBook){
      this.editedBook = JSON.parse(JSON.stringify(this.selectedBook))
    }
  }

  //Genre: String[] = this.selectedBook.Genre;
  constructor() { }

  ngOnInit(): void {
    
  }
  onInputChange(): void {
    this.isChanged = JSON.stringify(this.selectedBook) !== JSON.stringify(this.editedBook)
  }
  saveChanges(): void {
    this.selectedBook = JSON.parse(JSON.stringify(this.editedBook))
    this.updatedBook.emit(this.selectedBook)
    //update DB
    this.isChanged = false;
  }

}
