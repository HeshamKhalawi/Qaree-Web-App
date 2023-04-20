import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, Renderer2, ElementRef  } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-management-template',
  templateUrl: './management-template.component.html',
  styleUrls: ['./management-template.component.scss'],
  providers: [DatePipe]
})
export class ManagementTemplateComponent implements OnInit {
  @Input() title?: string;
  @Input() type?: string;
  @Input() filterBy?: string[];
  @Input() header?: string[];
  @Input() items: any[]=[];
  @Input() isLoading: boolean = false;
  @Output() loadMore = new EventEmitter<void>();

  constructor(private datePipe: DatePipe, private renderer: Renderer2, private el: ElementRef){
  }

  //Search items in the main table
  searchTerm: string = '';
  filteredItems: any[]= this.items;
  filterItems() {
    const searchTerm = this.searchTerm.toLowerCase();
    if (!this.searchTerm) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm) ||
        item.id.toString().toLowerCase().includes(searchTerm) ||
        (item.isbn[0] && item.isbn[0].toLowerCase().includes(searchTerm)) ||
        (item.groupMembers && item.groupMembers.some((member: string) => member.toLowerCase().includes(searchTerm))) ||
        (item.Email && item.Email.toLowerCase().includes(searchTerm));
      })
    } 
  }

  // Select table item
  selectedItem: any;
  onUserRowClick(item: any) {
    this.selectedItem = item;
  }
  

  // filter table based on dropdown menu option
  currentFilter: string = "";
  sortTable(filter: string): void {
    this.currentFilter = filter;
    this.filteredItems.sort((a, b) => {
      if (a[filter] < b[filter]) {
        return -1;
      }
      if (a[filter] > b[filter]) {
        return 1;
      }
      return 0;
    });   
  }

  // # of books, users, groups
  get Count(): number {
    return this.items?.length ?? 0;
  }

  //Handle delete modal
  openDeleteModal(item: any){
    this.selectedItem = item;
    const modal = this.el.nativeElement.querySelector('#delete-modal');
    if (modal) {
      this.renderer.addClass(modal, 'modal-open');
    }
  }
  closeDeleteModal() {
    const modal = this.el.nativeElement.querySelector('#delete-modal');
    if(modal)
      this.renderer.removeClass(modal, 'modal-open');
  }
  deleteItem() {
    this.items = this.items.filter(i => i.id !== this.selectedItem.id);
    this.filteredItems = this.filteredItems.filter(i => i.id !== this.selectedItem.id);
    this.closeDeleteModal();
    this.selectedItem = null;
    this.filterItems(); 
  }

  //Handle add user Modal
  username: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  openUserModal(){
    const modal = this.el.nativeElement.querySelector('#new-user-modal');
    if (modal) {
      this.renderer.addClass(modal, 'modal-open');
    }
  }
  closeUserModal() {
    const modal = this.el.nativeElement.querySelector('#new-user-modal');
    if(modal)
      this.renderer.removeClass(modal, 'modal-open');
  }
  addUser(usernameProp: string, firstNameProp: string, lastNameProp: string, emailProp: string, passwordProp: string){
    //update database & assign an ID to the user
    const currentDateObject = new Date();
    const currentDate = this.datePipe.transform(currentDateObject, 'yyyy/MM/dd')
    const IDProp = 10210 //dummy ID 
    this.items.push(
      {name: usernameProp, 
        firstName: firstNameProp, 
        lastName: lastNameProp, 
        Email: emailProp, 
        id: IDProp, 
        dateAdded: currentDate 
      }
      )
    console.log(this.items)
    this.closeUserModal();
  }

  //Handle add book Modal
  bookName: string = "";
  bookDescription: string = "";
  publishDate: string = "";
  authors: string = "";
  pages: number = 0;
  genres: string = "";
  image: string = "";


  openBookModal(){
    const modal = this.el.nativeElement.querySelector('#new-book-modal');
    if (modal) {
      this.renderer.addClass(modal, 'modal-open');
    }
  }
  closeBookModal() {
    const modal = this.el.nativeElement.querySelector('#new-book-modal');
    if(modal)
      this.renderer.removeClass(modal, 'modal-open');
  }
  //Handle image upload
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image = reader.result as string;
      };
    }
  }
  addBook(bookNameProp: string,bookDescriptionProp: string, publishDateProp: string, authorsProp: string, pagesProp: number, genresProp: string){
    //update database & assign an ID to the book
    const currentDate = this.datePipe.transform(publishDateProp, 'yyyy/MM/dd')
    const IDProp = 20144 // Get the ID of the book from the database
    const genreArray = genresProp.split(',').map(genre => genre.trim())
    const authorsArray = authorsProp.split(',').map(authors => authors.trim())
    this.items.push(
      { name: bookNameProp, 
        authors: authorsArray, 
        description: bookDescriptionProp, 
        id: IDProp, 
        genres: genreArray, 
        publishDate: currentDate,
        image: this.image
      }
      )
    this.closeBookModal();
  }

  //Get updated item from detailed table
  onUpdatedItem(item: any): void{
    console.log(item);
    const index = this.items.findIndex(i => i.id === item.id);
    if(index !== -1)
      this.items[index] = item;
  }

  ngOnInit(): void {
    this.filterItems();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'] && changes['items'].currentValue) {
      this.filterItems();
    }
  }
}
