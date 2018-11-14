import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Attested } from '../models/attested.model';
import { User } from '../models/user.model';


@Injectable()
export class AttestedService {

    url: string = 'http://localhost:3000/api/attesteds';
    urlAttestedsFromUser: string = 'http://localhost:3000/api/user/';

    attesteds: Attested[] = [];

    constructor(private http: Http) { }

    insertAttested(attested: Attested) {

        let formData = new FormData();
        if (attested.file) {
            formData.append('file', attested.file);
        }

        for (let key in attested) {
            if (key != 'file' && attested[key]) {
                console.log(key, attested[key]);
                formData.append(key, attested[key]);
            }
        }

        return this.http.post(this.url, attested)
            .map((response: Response) => {
                let res = response.json();
                let attested = new Attested(res._id, res.user, res.title, res.type, res.hours, res.file);
                console.log(attested);
                this.attesteds.push(attested);
                return attested;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    getAttestedsFromUser(user: User) {
        return this.http.get(this.urlAttestedsFromUser + user._id + "/attesteds")
        .map((response: Response) => {
            console.log(response);
            this.attesteds = [];
            for (let attested of response.json()) {
                this.attesteds.push(new Attested(attested._id, user, attested.title, attested.type, attested.hours, attested.file));
            }
            return this.attesteds;
        })
        .catch((error: Response) => Observable.throw(error));
    }
}
