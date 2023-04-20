import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService, public router: Router) {
  }

  ngOnInit(): void {
  }
  
  sendLoginData(form: NgForm){
    this.service.login(form.value.email,form.value.password);
  }
}
