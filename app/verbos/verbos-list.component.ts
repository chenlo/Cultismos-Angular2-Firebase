import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IVerbo } from './verbo';
import { VerboFilterPipe } from './verbos-filter.pipe';
import { VerboService } from './verbo-service';
@Component ({
    templateUrl : 'app/verbos/verbos-list.component.html',
    pipes: [VerboFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class VerbosListComponent {
    pageTitle : string = 'Listado de verbos';
    verbos: IVerbo[];
    listFilter : string;
    msgVerbo : string = "Verbo";
    msgCronologia : string = "Siglo";
    msgError : string;
    
    constructor(private _verboService: VerboService) {}
    
    ngOnInit() : void {
        console.log('Initializing verbos list');
        this._verboService.getVerbos().subscribe(
            verbos => this.verbos = verbos,
            error =>  this.msgError = <any>error
        );
    }    
}