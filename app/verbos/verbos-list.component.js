System.register(['angular2/core', 'angular2/router', './verbos-filter.pipe', './verbo-service'], function(exports_1, context_1) {
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
    var core_1, router_1, verbos_filter_pipe_1, verbo_service_1;
    var VerbosListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (verbos_filter_pipe_1_1) {
                verbos_filter_pipe_1 = verbos_filter_pipe_1_1;
            },
            function (verbo_service_1_1) {
                verbo_service_1 = verbo_service_1_1;
            }],
        execute: function() {
            VerbosListComponent = (function () {
                function VerbosListComponent(_verboService) {
                    this._verboService = _verboService;
                    this.pageTitle = 'Listado de verbos';
                    this.msgVerbo = "Verbo";
                    this.msgCronologia = "Siglo";
                }
                VerbosListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('Initializing verbos list');
                    this._verboService.getVerbos().subscribe(function (verbos) { return _this.verbos = verbos; }, function (error) { return _this.msgError = error; });
                };
                VerbosListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/verbos/verbos-list.component.html',
                        pipes: [verbos_filter_pipe_1.VerboFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [verbo_service_1.VerboService])
                ], VerbosListComponent);
                return VerbosListComponent;
            }());
            exports_1("VerbosListComponent", VerbosListComponent);
        }
    }
});
//# sourceMappingURL=verbos-list.component.js.map