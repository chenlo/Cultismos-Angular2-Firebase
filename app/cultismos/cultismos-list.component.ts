import { Component } from 'angular2/core';
import { ICultismo } from './cultismo';

@Component ({
    selector: 'cultismos-list',
    templateUrl : 'app/cultismos/cultismos-list.component.html'
})

export class CultismosListComponent {
    pageTitle : string = 'Listado de cultismos';
    cultismos: ICultismo[] = [ 
        { 
            "cultismo" : "ACAÇIA0", 
            "dcech" : " a.1490", 
            "ocurrencias" : [ " a.1250 AToledo", " a.1350 Montería", " a.1450 ACCirugía; acacia a. 1250 AToledo", " a.1493 TCGCauliaco  " ]
        }, 
        {
            "cultismo" : "ACCIDENTE",
            "dcech" : " 1300",
            "ocurrencias" : [ " a.1254 Judizios", " a. 1259 AlfonsoX LCruces" ]
        }
    ];
    listFilter : string;
    noResultsMessage : string = "No se han encontrado resultados";
}