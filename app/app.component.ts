/**
 * Created by berni on 22/04/16.
 */
import { Component } from 'angular2/core';
import { CultismosListComponent } from './cultismos/cultismos-list.component';

@Component ({
    selector: 'cultismo-app',
    template: `
        <div class="page-header">
            <h1 class="text-center">{{ pageTitle }}</h1>
        </div>
        <div class="container">
            <cultismos-list></cultismos-list>
        </div>
    `,
    directives: [CultismosListComponent]
})
export class AppComponent {
    pageTitle : string = 'Cultismos en la Historia de la Lengua Española';
}
