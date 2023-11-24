import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpClientService {
    responseData: any;
    returnReponse: any;

    constructor(
        private http: HttpClient,
        private spinner: NgxSpinnerService,
    ) { }

    /**
     * post method to get data from api
     * @param url
     * @param data
     * @returns return response from api
     */
    post(url: any, data: any): Observable<any> {
        this.spinner.show();
        return this.http.post(url, data).pipe(map(res => {
            return res;
        }), catchError((error) => {
            return throwError(error);
        }));
    }

    /**
     * get method to get data from api
     * @param url
     * @returns return response from api
     */
    get(url: any): Observable<any> {
        this.spinner.show();
        return this.http.get(url).pipe(map(res => {
            return res;
        }), catchError((error) => {
            return throwError(error);
        }));
    }

    /**
     * delete method to delete data from api
     * @param url
     * @returns return response from api
     */
    delete(url: any) {
        this.spinner.show();
        this.returnReponse = new Promise((resolve, reject) => {
            this.http.delete(url).subscribe((res: any) => {
                this.responseData = res;
                if (this.responseData.status === 'fail') {
                    reject(this.responseData.message = 'some error occure');
                }
                resolve(this.responseData);
            }, error => {
                reject(error);
            });
        });
        return this.returnReponse;
    }
}