import { inject, TestBed } from '@angular/core/testing';

import { AngularModuleStarterService } from './../../index';

describe('SumService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AngularModuleStarterService
            ]
        });
    });

    it('should return hello message',
        inject([AngularModuleStarterService],
            (starterService: AngularModuleStarterService) => {
                expect(starterService.getMessage()).toEqual('Hello from the Service Angular lib!!!!!!');
            })
    );

});
