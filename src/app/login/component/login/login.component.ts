import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {LoginService} from '../../service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
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
