import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {
  @Input() selectedUser: any = false;
  @Output() updatedUser: any = new EventEmitter<any>();
  editedUser: any = null;
  isChanged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedUser'] && this.selectedUser){
      this.editedUser = JSON.parse(JSON.stringify(this.selectedUser))
    }
  }

  onInputChange(): void {
    this.isChanged = JSON.stringify(this.selectedUser) !== JSON.stringify(this.editedUser)
  }
  saveChanges(): void {
    this.selectedUser = JSON.parse(JSON.stringify(this.editedUser))
    this.updatedUser.emit(this.selectedUser)
    //update DB
    this.isChanged = false;
  }

}
