import {Column} from './column.js';
export class ColumnBody extends Column{
    constructor(options,index,text){
        super(options,index);
        this.text = text;
        if(options.classListBody){
            this.classList = this.classList.concat(options.classListBody);
        }
    }
}