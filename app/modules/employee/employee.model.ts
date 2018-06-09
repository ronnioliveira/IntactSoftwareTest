import { ElementList } from '../element/element-list.model';

export class Employee {
    constructor(
        public id: string,
        public title: string,
        public elementList: ElementList[]
    ) { }
}