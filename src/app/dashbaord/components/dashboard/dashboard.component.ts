import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showLogoutConfirmation = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleLogout(): void{
    if(this.showLogoutConfirmation == true){
      this.showLogoutConfirmation = false;
    }
    else{
      this.showLogoutConfirmation = true;
    }
  }


}
