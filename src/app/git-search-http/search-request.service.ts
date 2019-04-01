import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { User } from './user'
import { Repository } from './Repository'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  constructor(private http: HttpClient) {

        this.headers.set("Content-Type", "application/json");


        this.requestOptions.headers = this.headers;

        constructor(private http: Http) {

                this.headers.set("Content-Type", "application/json");


                this.requestOptions.headers = this.headers;


            }

            export class User {
    public login?: string;
    public id?: string;
    public avatar_url?: string;
    public url?: string;
    public followers_url?: string;
    public email?: string;
    public followers?: User[];


}



    } }


    head(endPoint: string, options?: RequestOptionsArgs): Observable<Response> {

        return this.http.head(this.createUrl(endPoint), this.getRequestOptions(options));
    }


    options(endPoint: string, options?: RequestOptionsArgs): Observable<Response> {

        return this.http.post(this.createUrl(endPoint), this.getRequestOptions(options));
    }

    createUrl(endPoint): string {

        let url = this.apiServer + endPoint;
        if (!endPoint.startsWith('/')) {
            url = this.apiServer + '/' + endPoint;
        }


        return url;
    }

    getRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        this.requestOptions.headers = this.headers;
        if (options) {
            Object.assign(options, this.requestOptions);
        }

        return this.requestOptions;
    }


}
/*import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";
import {ApiService} from "./api.service";

@Injectable()
export class UserService {

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

}*/
