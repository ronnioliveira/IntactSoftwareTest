import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';

@NgModule({
    //metadata
    imports: [
        CommonModule,
    ],
    declarations: [
        EmployeeComponent
    ],
    exports:[
        EmployeeComponent
    ]
})
//export the class
export class EmployeeModule {

}