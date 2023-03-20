import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
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
