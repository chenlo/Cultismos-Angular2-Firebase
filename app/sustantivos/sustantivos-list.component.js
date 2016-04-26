System.register(['angular2/core', 'angular2/router', './sustantivos-filter.pipe', './sustantivo-service'], function(exports_1, context_1) {
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
    var core_1, router_1, sustantivos_filter_pipe_1, sustantivo_service_1;
    var SustantivosListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sustantivos_filter_pipe_1_1) {
                sustantivos_filter_pipe_1 = sustantivos_filter_pipe_1_1;
            },
            function (sustantivo_service_1_1) {
                sustantivo_service_1 = sustantivo_service_1_1;
            }],
        execute: function() {
            SustantivosListComponent = (function () {
                function SustantivosListComponent(_sustantivoService) {
                    this._sustantivoService = _sustantivoService;
                    this.pageTitle = 'Listado de sustantivos';
                    this.msgSustantivo = "Sustantivo";
                    this.msgArea = "Área";
                    this.msgCronologia = "Siglo";
                    this.msgOcurrencias = "Ocurrencias (CORDE)";
                }
                SustantivosListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('Initializing sustantivos list');
                    this._sustantivoService.getSustantivos().subscribe(function (sustantivos) { return _this.sustantivos = sustantivos; }, function (error) { return _this.msgError = error; });
                };
                SustantivosListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/sustantivos/sustantivos-list.component.html',
                        pipes: [sustantivos_filter_pipe_1.SustantivoFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [sustantivo_service_1.SustantivoService])
                ], SustantivosListComponent);
                return SustantivosListComponent;
            }());
            exports_1("SustantivosListComponent", SustantivosListComponent);
        }
    }
});
//# sourceMappingURL=sustantivos-list.component.js.map