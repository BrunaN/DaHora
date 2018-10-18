import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    url: string = 'http://localhost:3000/api/user/login';
    user: User;

    constructor ( private http: Http ) {  }

    setToken(token) {
        localStorage.setItem("token", token);
    }

    getToken() {
        return localStorage.getItem("token");
    }

    hasToken() {
        if (localStorage.getItem("token")) {
            return localStorage.getItem("token");
        }
    }

    removeToken() {
        localStorage.removeItem("token");
    }

    login(email, password){
        return this.http.post(this.url, {
            email,
            password
        }).map((response: Response) => {
            let res =  response.json();
            console.log(res.token);
            this.setToken(res.token);
            return res
        });
    }

}
