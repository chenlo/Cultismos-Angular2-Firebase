import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ISustantivo } from './sustantivo';
import { SustantivoFilterPipe } from './sustantivos-filter.pipe';
import { SustantivoService } from './sustantivo-service';
@Component ({
    templateUrl : 'app/sustantivos/sustantivos-list.component.html',
    pipes: [SustantivoFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class SustantivosListComponent {
    pageTitle : string = 'Listado de sustantivos';
    sustantivos: ISustantivo[];
    listFilter : string;
    msgSustantivo : string = "Sustantivo";
    msgArea : string = "Área";
    msgCronologia : string = "Siglo";
    msgOcurrencias : string = "Ocurrencias (CORDE)";
    msgError : string;
    
    constructor(private _sustantivoService: SustantivoService) {}
    
    ngOnInit() : void {
        console.log('Initializing sustantivos list');
        this._sustantivoService.getSustantivos().subscribe(
            sustantivos => this.sustantivos = sustantivos,
            error =>  this.msgError = <any>error
        );
    }
        
}