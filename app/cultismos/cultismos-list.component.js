System.register(['angular2/core', 'angular2/router', './cultismos-filter.pipe', './cultismo-service'], function(exports_1, context_1) {
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
    var core_1, router_1, cultismos_filter_pipe_1, cultismo_service_1;
    var CultismosListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cultismos_filter_pipe_1_1) {
                cultismos_filter_pipe_1 = cultismos_filter_pipe_1_1;
            },
            function (cultismo_service_1_1) {
                cultismo_service_1 = cultismo_service_1_1;
            }],
        execute: function() {
            CultismosListComponent = (function () {
                function CultismosListComponent(_cultismoService) {
                    this._cultismoService = _cultismoService;
                    this.pageTitle = 'Listado de cultismos';
                    this.msgCultismo = "Cultismo";
                    this.msgDcech = "DCECH";
                    this.msgOcurrencias = "Ocurrencias (CORDE)";
                }
                CultismosListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('Initializing cultismos list');
                    this._cultismoService.getCultismos().subscribe(function (cultismos) { return _this.cultismos = cultismos; }, function (error) { return _this.msgError = error; });
                };
                CultismosListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cultismos/cultismos-list.component.html',
                        pipes: [cultismos_filter_pipe_1.CultismoFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cultismo_service_1.CultismoService])
                ], CultismosListComponent);
                return CultismosListComponent;
            }());
            exports_1("CultismosListComponent", CultismosListComponent);
        }
    }
});
//# sourceMappingURL=cultismos-list.component.js.map