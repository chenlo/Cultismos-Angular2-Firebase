/**
 * Created by berni on 22/04/16.
 */
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { CultismosListComponent } from './cultismos/cultismos-list.component';
import { CultismoService } from './cultismos/cultismo-service';
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
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CultismoService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/index', name: 'Inicio', component: WelcomeComponent, useAsDefault: true },
    { path: '/cultismos-lexicos-espanol', name: 'Cultismos', component: CultismosListComponent }
])
export class AppComponent {
    pageTitle : string = 'Cultismos léxicos del Español (Nuevos testimonios)';
}
