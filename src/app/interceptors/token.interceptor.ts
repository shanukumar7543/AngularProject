import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KEYS } from '../_constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request;
    let token = localStorage.getItem(KEYS.USER_TOKEN);
    if (token) {
      newRequest = request.clone({
        setHeaders: {
          // Authorization: `${token}`,
        },
      });
    }
    return next.handle(newRequest);
  }
}
