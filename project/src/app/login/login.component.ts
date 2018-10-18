import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  user: User;

  constructor( private loginService: LoginService ) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    if (this.email != '' && this.password != '') {
      console.log(this.email, this.password);
      event.preventDefault();
      this.loginService.login(this.email, this.password)
        .subscribe(data => {
          // colocar pra retornar pra página onde o usuário tava antes
        },
          error => {
            console.log(error);
          }
        );
    }
  }

}
