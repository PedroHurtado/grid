import {Column} from './column.js';
export class ColumnBody extends Column{
    constructor(options,index){
        super(options,index);
        if(options.classListBody){
            this.classList = this.classList.concat(options.classListBody);
        }
    }
}