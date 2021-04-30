import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(
        private http:HttpClient,
    ) {
    }

    public sendGetRequest(
      endpoint: string,
      observe: string = 'response',
		  params?: HttpParams
    ){
        let options = { observe: 'response'};
        return this.http.get( endpoint, { observe: 'response', params: params } );
    }

    public sendPostRequest(
      endpoint: string,
		  params?: HttpParams,
      observe: string = 'response'
    ){
        let options = { observe: 'response'};
        return this.http.post( endpoint, params, { observe: 'response' } );
    }
}