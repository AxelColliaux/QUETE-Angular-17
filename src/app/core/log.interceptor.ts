import { Injectable } from  '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from  '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.urlWithParams); // J'affiche l'url avec les params
        const debut = new Date().getTime();
       // Je passe la requête à la suite des interceptors cachés d'angular
       // Et je retourne ce résultat pour que la requête ait bien lieu
        return next.handle(req).pipe(
        // tap est un observable qui indique : "Je fais des actions sans modifier la réponse"
        tap((response) => {
            // On s'assure qu'il s'agit bien d'une réponse http
            if (response instanceof HttpResponse) {
                // Ici sera le code exécuté à la réponse du serveur
                // Dans le cas où tout s'est bien passé
                const fin = new Date().getTime();
                console.log((fin - debut)/1000  + 'sec');
            }
        })
    );
    }
}