import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ICultismo } from './cultismo';
import { CultismoFilterPipe } from './cultismos-filter.pipe';
import { CultismoService } from './cultismo-service';
@Component ({
    templateUrl : 'app/cultismos/cultismos-list.component.html',
    pipes: [CultismoFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class CultismosListComponent {
    pageTitle : string = 'Listado de cultismos';
    cultismos: ICultismo[];
    listFilter : string;
    msgCultismo : string = "Cultismo";
    msgDcech : string = "DCECH";
    msgOcurrencias : string = "Ocurrencias (CORDE)";
    msgError : string;
    
    constructor(private _cultismoService: CultismoService) {}
    
    ngOnInit() : void {
        console.log('Initializing cultismos list');
        this._cultismoService.getCultismos().subscribe(
            cultismos => this.cultismos = cultismos,
            error =>  this.msgError = <any>error
        );
    }
}