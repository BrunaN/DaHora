import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/User.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.removeLocal();
  }

}
