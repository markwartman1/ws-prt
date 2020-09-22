import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const modReq = req.clone({withCredentials: true});

        return next.handle(modReq);

            // This could be chained on to return statement
            // .pipe(

            //     filter(val => val.type === HttpEventType.Sent),
                
            //     tap(val => {
            //     if (val.type === HttpEventType.Sent) {
            //         console.log('Request sent to server');
            //     }

            //     if (val.type === HttpEventType.Response) {
            //         console.log('Got a response from the API', val);
            //     }

            // }));
    }
}
