import {Component, ViewEncapsulation} from '@angular/core';
import {AngularModuleStarterService} from './angular-module-starter.service'

@Component({
    selector: 'angular-module-starter',
    templateUrl: './angular-module-starter.component.html',
    styleUrls: ['./angular-module-starter.component.scss']
})
export class AngularModuleStarterComponent {

    public message: string;

    constructor(private service: AngularModuleStarterService) {
        this.message = this.service.getMessage()
    }

}
