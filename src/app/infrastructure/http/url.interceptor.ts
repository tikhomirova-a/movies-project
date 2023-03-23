import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL_SHORTHAND = 'api/v3/';
const API_URL = 'https://api.themoviedb.org/3/';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestUrl = req.url;

    if (requestUrl.startsWith(API_URL_SHORTHAND)) {
      requestUrl = requestUrl.replace(API_URL_SHORTHAND, API_URL);
    }

    return next.handle(
      req.clone({
        url: requestUrl,
      })
    );
  }
}
