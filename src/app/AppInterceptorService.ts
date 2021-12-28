import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppInterceptorService implements HttpInterceptor{

  etag : string | undefined
  getEtag(etag : string) {

    if(etag) {
      this.etag = etag;
      console.log("Etag from Interceptor :"+ etag)  // "40"
    }
    else {
      this.etag = '*'
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptetag : " + this.etag)    // Undefined
    return new Observable<any>();
  }
}
