import { Employee } from './employee.model';
import { ElementList } from '../element/element-list.model'

const list: ElementList[] = [
    {
        template: "<text item=\"item\" pipeline=\"pipeline\"></text>",
        label: "Name",
        name: "employeeName",
        id: "d27596e2-a7ba-4826-af33-41bb58df6275",
        value: "John Smith"
    },
    {
        template: "<eldate item=\"item\" pipeline=\"pipeline\"></eldate>",
        label: "Birthday",
        name: "employeeBirthday",
        id: "d27596e2-a7ba-4826-af33-41bb58df1111",
        value: "new Date(1970, 01, 01)"
    },
    {
        template: "<command item=\"item\" pipeline=\"pipeline\"></command>",
        text: "Update",
        id: "d27596e2-a7ba-4826-af33-41bb58df6266"
    }
]

export const EMPLOYEE_LIST_DETAILS: Employee[] = [
    {
        title: "Employee Form",
        id: "B47B298A-D09D-4BA1-8BEC-2688532668CF",
        elementList: list
        // [
        //     {
        //         template: "<text item=\"item\" pipeline=\"pipeline\"></text>",
        //         label: "Name",
        //         name: "employeeName",
        //         id: "d27596e2-a7ba-4826-af33-41bb58df6275",
        //         value: "John Smith"
        //     },
        //     {
        //         template: "<eldate item=\"item\" pipeline=\"pipeline\"></eldate>",
        //         label: "Birthday",
        //         name: "employeeBirthday",
        //         id: "d27596e2-a7ba-4826-af33-41bb58df1111",
        //         value: "new Date(1970, 0, 01)"
        //     },
        //     {
        //         template: "<command item=\"item\" pipeline=\"pipeline\"></command>",
        //         text: "Update",
        //         id: "d27596e2-a7ba-4826-af33-41bb58df6266"
        //     }
        // ]
    }
]