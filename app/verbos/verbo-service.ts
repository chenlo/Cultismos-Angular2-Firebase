import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IVerbo } from './verbo';

@Injectable()
export class VerboService {
    private _verboUrl = 'https://fiery-heat-1344.firebaseio.com/verbos.json';

    constructor(private _http: Http) { }

    getVerbos(): Observable<IVerbo[]> {
        return this._http.get(this._verboUrl)
            .map((response: Response) => <IVerbo[]> response.json())
            //.do(data => console.log('Todos: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVerbo(id: string): Observable<IVerbo> {
        return this.getVerbos()
            .map((verbos: IVerbo[]) => verbos.find(a => a.verbo === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}