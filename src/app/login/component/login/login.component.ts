import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userEmail='';
  public userPassword='';
  constructor(service:LoginService,
    public router: Router
    ) {

   }

  ngOnInit(): void {
  }


  sendLoginData(){
    this.router.navigate(['dashboard']);
  }
}
