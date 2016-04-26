import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ISustantivo } from './sustantivo';

@Injectable()
export class SustantivoService {
    private _sustantivoUrl = 'https://fiery-heat-1344.firebaseio.com/sustantivos.json';

    constructor(private _http: Http) { }

    getSustantivos(): Observable<ISustantivo[]> {
        return this._http.get(this._sustantivoUrl)
            .map((response: Response) => <ISustantivo[]> response.json())
            //.do(data => console.log('Todos: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSustantivo(id: string): Observable<ISustantivo> {
        return this.getSustantivos()
            .map((sustantivos: ISustantivo[]) => sustantivos.find(s => s.sustantivo === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}