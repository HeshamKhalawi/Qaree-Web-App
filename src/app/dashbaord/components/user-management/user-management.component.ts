import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  checkToggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(){
    this.checkToggle = !this.checkToggle;
  }
}
