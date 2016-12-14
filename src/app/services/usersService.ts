import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class UsersService {
    private _users; //class property
    http;
    constructor(http: Http){
        this.http = http;
        // this._users = [{
        //     id: 34,
        //     username: 'spiderman',
        //     roles: ['admin', 'user']
        // }, {
        //     id: 67,
        //     username: 'batman',
        //     roles: ['user']
        // }];
    }
    get() {
       return this.http.get('/assets/users.json')
           .map(response => response.json().users);
    }
}
