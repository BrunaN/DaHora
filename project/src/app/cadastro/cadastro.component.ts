import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/User.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  _id: string;
  name: string;
  email: string;
  graduation: number;
  enrollment: number;
  password: string;
  confirmPassword: string;

  constructor( private service: UserService, private loginService: LoginService ) {  }

  ngOnInit() {  }

  addUser(event) {
    event.preventDefault();
    if (this.name != '' && this.email != '' && this.graduation != undefined  && this.enrollment != undefined && this.password != '' && this.confirmPassword != '') {
      if (this.password == this.confirmPassword) {
        let user = new User(this._id, this.name, this.email, this.graduation, this.enrollment, this.password);
        console.log(user);
      }
    }
  }
}
