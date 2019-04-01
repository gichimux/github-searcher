import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
import { Repository } from './Repository';
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
