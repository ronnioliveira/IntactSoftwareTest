import { NgModule } from '@angular/core';
import { ElementListComponent } from './element-list.component';

@NgModule({
    declarations:[
        ElementListComponent
    ],
    exports:[
        ElementListComponent
    ]
})
export class ElementListModule{

}