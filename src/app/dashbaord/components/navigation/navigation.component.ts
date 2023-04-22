import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../login/service/login.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showLogoutConfirmation = false;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.service.SignOut();
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
