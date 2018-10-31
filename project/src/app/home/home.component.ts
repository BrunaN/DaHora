import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/User.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor( private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.userService.getUser(this.loginService.getToken(), this.loginService.getId())
        .subscribe(data => {
          this.user = data;
        },
          error => {
            console.log(error);
          }
        );
  }

}
