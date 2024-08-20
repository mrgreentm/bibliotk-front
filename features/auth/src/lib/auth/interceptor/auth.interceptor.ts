import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log('estou aqui')
    const reqWithToken = req.clone({
        headers: req.headers.append('Authorization', localStorage.getItem('token') || '')
    })
    return next(reqWithToken);
}