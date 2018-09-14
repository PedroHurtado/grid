import {Row} from './row.js'
import {ColumnHeader} from './column.header.js'
export class Header extends Row
{
    constructor(options,columns){
        super(options,columns);
        this.nodes = this.columns.map((c,index)=>{
            return new ColumnHeader(c,index);
        });
    }
}