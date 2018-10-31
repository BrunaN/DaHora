import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router, RouterModule } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RouterModule]
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  user: User;

  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    if (this.email != '' && this.password != '') {
      console.log(this.email, this.password);
      event.preventDefault();
      this.loginService.login(this.email, this.password)
        .subscribe(data => {
          this.router.navigate(['/home']);
        },
          error => {
            console.log(error);
          }
        );
    }
  }

}
