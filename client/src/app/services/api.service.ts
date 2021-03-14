import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';



export interface IResponse {
  data: any
  isSuccess: boolean
  message: string
  statusCode: number
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  baseURL: string = 'http://localhost:5000/';

  constructor(
    private __httpClient: HttpClient,
    private __toastService: ToastService
  ) { }

  request(method: string, route: string, data = {}) {
    const requestOptions = {
      headers: this.getHeaders(),
      // // method: endpoint.method,
      body: data,
      // search: this.getQueryParams(params)
    };

    let path = this.baseURL + '' + route;
    return this.__httpClient.request(method, path, requestOptions).pipe(catchError(this.catchBadResponse))
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('cbtToken');
    let requestHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    if (token && !requestHeaders.has('Authorization')) {
      requestHeaders = requestHeaders.append('Authorization', token);
    }
    return requestHeaders;
  }


  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    const res = errorResponse;
    const err = res;
    const emsg = err ?
      (err.error.message ? err.error.message : JSON.stringify(err.message)) :
      (res.statusText || 'unknown error');

    this.__toastService.showError(`Error- ${emsg}`);
    return throwError(err); // TODO: We should NOT swallow error here.
    // return Observable.of(null);
  }

}




