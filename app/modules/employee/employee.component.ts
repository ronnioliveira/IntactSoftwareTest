import { Component } from '@angular/core';
import { EMPLOYEE_LIST_DETAILS } from './employee.mock';
import { Employee } from './employee.model';
import { ElementList } from '../element/element-list.model';

@Component({
    moduleId: module.id, //to find html reference
    selector: 'employee-form',
    templateUrl: 'employee.component.html'
})
export class EmployeeComponent{
    employee: Employee[] = EMPLOYEE_LIST_DETAILS; 

    findStringInElementTemplate(template: string, strToMach: string) {
        return template.indexOf(strToMach) >= 0;
    };

    getFormattedDate(date: string){
        var year = date.substring(9,13);
        var month = date.substring(15,17);
        var day = date.substring(19,21);

        return `${year}-${month}-${day}`;
    }
}