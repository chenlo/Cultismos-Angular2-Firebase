/**
 * Created by berni on 22/04/16.
 */
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { CultismosListComponent } from './cultismos/cultismos-list.component';
import { CultismoService } from './cultismos/cultismo-service';
import { AdjetivosListComponent } from './adjetivos/adjetivos-list.component';
import { AdjetivoService } from './adjetivos/adjetivo-service';
import { VerbosListComponent } from './verbos/verbos-list.component';
import { VerboService } from './verbos/verbo-service';
import { SustantivosListComponent } from './sustantivos/sustantivos-list.component';
import { SustantivoService } from './sustantivos/sustantivo-service';
import { WelcomeComponent } from './home/welcome.component';



@Component ({
    selector: 'cultismo-app',
    template: `
        <div>
        <nav class='navbar navbar-inverse '>
            <div class='container-fluid'>
                <ul class='nav navbar-nav pull-right'>
                    <li><a [routerLink]="['Inicio']">Inicio</a></li>
                    <li><a [routerLink]="['Cultismos']">Cultismos</a></li>
                    <li><a [routerLink]="['Adjetivos']">Adjetivos</a></li>
                    <li><a [routerLink]="['Verbos']">Verbos</a></li>
                    <li><a [routerLink]="['Sustantivos']">Sustantivos</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CultismoService, AdjetivoService, VerboService, SustantivoService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/index', name: 'Inicio', component: WelcomeComponent, useAsDefault: true },
    { path: '/cultismos-lexicos-espanol', name: 'Cultismos', component: CultismosListComponent },
    { path: '/adjetivos-cultismos-lexicos-espanol', name: 'Adjetivos', component: AdjetivosListComponent },
    { path: '/verbos-cultismos-lexicos-espanol', name: 'Verbos', component: VerbosListComponent },
    { path: '/sustantivos-cultismos-lexicos-espanol', name: 'Sustantivos', component: SustantivosListComponent }
])
export class AppComponent {
    pageTitle : string = 'Cultismos léxicos del Español (Nuevos testimonios)';
}
