import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './types';
import { Configuration } from '../configuration/types';

const API_URL_SHORTHAND = 'api/v3/';
const API_URL = 'https://api.themoviedb.org/3/';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<Response<unknown> | Configuration>> {
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
