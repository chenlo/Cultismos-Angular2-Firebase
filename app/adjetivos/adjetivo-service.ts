import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IAdjetivo } from './adjetivo';

@Injectable()
export class AdjetivoService {
    private _adjetivoUrl = 'https://fiery-heat-1344.firebaseio.com/adjetivos.json';

    constructor(private _http: Http) { }

    getAdjetivos(): Observable<IAdjetivo[]> {
        return this._http.get(this._adjetivoUrl)
            .map((response: Response) => <IAdjetivo[]> response.json())
            //.do(data => console.log('Todos: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAdjetivo(id: string): Observable<IAdjetivo> {
        return this.getAdjetivos()
            .map((adjetivos: IAdjetivo[]) => adjetivos.find(a => a.adjetivo === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}