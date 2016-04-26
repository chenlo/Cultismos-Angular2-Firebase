System.register(['angular2/core', 'angular2/router', './adjetivos-filter.pipe', './adjetivo-service'], function(exports_1, context_1) {
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
    var core_1, router_1, adjetivos_filter_pipe_1, adjetivo_service_1;
    var AdjetivosListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adjetivos_filter_pipe_1_1) {
                adjetivos_filter_pipe_1 = adjetivos_filter_pipe_1_1;
            },
            function (adjetivo_service_1_1) {
                adjetivo_service_1 = adjetivo_service_1_1;
            }],
        execute: function() {
            AdjetivosListComponent = (function () {
                function AdjetivosListComponent(_adjetivoService) {
                    this._adjetivoService = _adjetivoService;
                    this.pageTitle = 'Listado de adjetivos';
                    this.msgAdjetivo = "Adjetivo";
                    this.msgDcech = "DCECH";
                    this.msgOcurrencias = "Ocurrencias (CORDE)";
                }
                AdjetivosListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('Initializing adjetivos list');
                    this._adjetivoService.getAdjetivos().subscribe(function (adjetivos) { return _this.adjetivos = adjetivos; }, function (error) { return _this.msgError = error; });
                };
                AdjetivosListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/adjetivos/adjetivos-list.component.html',
                        pipes: [adjetivos_filter_pipe_1.AdjetivoFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [adjetivo_service_1.AdjetivoService])
                ], AdjetivosListComponent);
                return AdjetivosListComponent;
            }());
            exports_1("AdjetivosListComponent", AdjetivosListComponent);
        }
    }
});
//# sourceMappingURL=cultismos-list.component.js.map