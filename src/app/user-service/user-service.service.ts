import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {Repository} from "../repository";

import {SearchRequestService} from "../api.service";

@Injectable()
export class UserServiceService {

    constructor(private api: ApiService) {

    }


    getUsers(filter?: string): Observable<User[]> {

        let endPoint = '/users';

        return this.api.get(endPoint).map(res => res.json() as User[]).catch(err => Observable.throw(err));
    }

    search(q: string): Observable<any> {
        let endPoint = '/search/users?q=' + q;
        return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));

    }

    getUserFollowers(user: string): Observable<any> {

        let endPoint = '/users/' + user + '/followers';
        return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    }

}
