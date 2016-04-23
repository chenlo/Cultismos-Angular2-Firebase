System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CultismosListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CultismosListComponent = (function () {
                function CultismosListComponent() {
                    this.pageTitle = 'Listado de cultismos';
                    this.cultismos = [
                        {
                            "cultismo": "ACAÇIA0",
                            "dcech": " a.1490",
                            "ocurrencias": [" a.1250 AToledo", " a.1350 Montería", " a.1450 ACCirugía; acacia a. 1250 AToledo", " a.1493 TCGCauliaco  "]
                        },
                        {
                            "cultismo": "ACCIDENTE",
                            "dcech": " 1300",
                            "ocurrencias": [" a.1254 Judizios", " a. 1259 AlfonsoX LCruces"]
                        }
                    ];
                    this.noResultsMessage = "No se han encontrado resultados";
                }
                CultismosListComponent = __decorate([
                    core_1.Component({
                        selector: 'cultismos-list',
                        templateUrl: 'app/cultismos/cultismos-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CultismosListComponent);
                return CultismosListComponent;
            }());
            exports_1("CultismosListComponent", CultismosListComponent);
        }
    }
});
//# sourceMappingURL=cultismos-list.component.js.map