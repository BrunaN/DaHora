import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    url: string = 'http://localhost:3000/api/users';
    user: User;

    constructor ( private http: Http ) {  }

    initial(){
        let text = window.localStorage.getItem("user");
        if(text){
            let res = JSON.parse(text);
            this.user = new User(res._id, res.name, res.email, res.graduation, res.enrollment, res.password);
        }
    }

    local(user:User){
        this.user = user;
        window.localStorage.setItem("user", JSON.stringify(user));
    }

    login(email, password){
        return this.http.post(this.url, {'email': email, 'password': password})
            .map((response: Response) => {
                let res = response.json();
                let user = new User(res._id, res.name, res.email, res.graduation, res.enrollment, res.password);
                this.local(user);
                return user;
            })
            .catch((error: Response) => Observable.throw(error));
    };

    userLogged(){
        return this.user;
    };

    logout(){
        this.user = undefined;
        window.localStorage.removeItem('user');
    };

}
