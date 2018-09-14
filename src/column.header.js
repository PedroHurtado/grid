import {Column} from './column.js';
import {Node} from './node.js'

export class ColumnHeader extends Column
{
    constructor(options,index){
        super(options,index);
        if(options.classListHeader){
            this.classList = this.classList.concat(options.classListHeader);
        }
    }
}