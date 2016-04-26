import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IAdjetivo } from './adjetivo';
import { AdjetivoFilterPipe } from './adjetivos-filter.pipe';
import { AdjetivoService } from './adjetivo-service';
@Component ({
    templateUrl : 'app/adjetivos/adjetivos-list.component.html',
    pipes: [AdjetivoFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class AdjetivosListComponent {
    pageTitle : string = 'Listado de adjetivos';
    adjetivos: IAdjetivo[];
    listFilter : string;
    msgAdjetivo : string = "Adjetivo";
    msgCronologia : string = "Siglo";
    msgOcurrencias : string = "Ocurrencias (CORDE)";
    msgError : string;
    
    constructor(private _adjetivoService: AdjetivoService) {}
    
    ngOnInit() : void {
        console.log('Initializing adjetivos list');
        this._adjetivoService.getAdjetivos().subscribe(
            adjetivos => this.adjetivos = adjetivos,
            error =>  this.msgError = <any>error
        );
    }    
}