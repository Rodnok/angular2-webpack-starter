import { Injectable } from '@angular/core';

@Injectable()

export class UsersService {
    private _users; //class property
    constructor(){
        this._users = [{
            id: 34,
            username: 'spiderman',
            roles: ['admin', 'user']
        }, {
            id: 67,
            username: 'batman',
            roles: ['user']
        }];
    }
    get() {
        return this._users;
    }
}
