import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICultismo } from './cultismo';

@Injectable()
export class CultismoService {
    private _cultismoUrl = 'https://fiery-heat-1344.firebaseio.com/cultismos.json';

    constructor(private _http: Http) { }

    getCultismos(): Observable<ICultismo[]> {
        return this._http.get(this._cultismoUrl)
            .map((response: Response) => <ICultismo[]> response.json())
            .do(data => console.log('Todos: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCultismo(id: string): Observable<ICultismo> {
        return this.getCultismos()
            .map((cultismos: ICultismo[]) => cultismos.find(c => c.cultismo === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}