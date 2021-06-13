import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../shared/shared';

@Injectable({ providedIn: 'root' })
export class ApiInterceptor implements HttpInterceptor {
  constructor(@Inject(ENVIRONMENT) protected env: any) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = req.url;

    if (!req.url.includes('assets') && !req.url.includes('assets/config')) {
      const { baseUrl, token } = this.env;
      url = `${baseUrl}/${req.url}?token=${token}`;
    }

    url = url.replace(/([^:]\/)\/+/g, '$1'); // remove double slash

    const apiReq = req.clone({
      url,
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/json; charset=utf-8'
      ),
    });

    return next.handle(apiReq);
  }
}
