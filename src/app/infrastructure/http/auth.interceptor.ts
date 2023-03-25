import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration/types';
import { Response } from '../../category/types';

const API_KEY = '09f328da5aa5d91f51978506a62cc80e';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<Response<unknown> | Configuration>> {
    return next.handle(
      req.clone({
        params: req.params.append('api_key', API_KEY),
      })
    );
  }
}
