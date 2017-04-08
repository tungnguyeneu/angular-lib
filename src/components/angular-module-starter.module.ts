import {ModuleWithProviders, NgModule} from '@angular/core';

import {AngularModuleStarterService} from './angular-module-starter.service';
import {AngularModuleStarterComponent} from './angular-module-starter.component';

export function angularModuleStarterFactory() {
    return new AngularModuleStarterService();
}

@NgModule({
    declarations: [
        AngularModuleStarterComponent,
    ],
    exports: [
        AngularModuleStarterComponent,
    ]
})
export class AngularModuleStarterModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AngularModuleStarterModule,
            providers: [{
                provide: AngularModuleStarterService,
                useFactory: angularModuleStarterFactory
            }]
        };
    }
}
