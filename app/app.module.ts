import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { ElementListModule } from './modules/element/element-list.module';
import { EmployeeModule } from './modules/employee/employee.module';

@NgModule({
    imports: [
        BrowserModule,
        EmployeeModule,
        ElementListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}