import {Row} from './row.js';
import {ColumnBody} from './column.body.js';

export class BodyRow extends Row
{
    constructor(options,columns,rowData){
        super(options,columns);
        this.rowData = rowData || {};
    }
    render(){
        let columns = this.columns;
        this.nodes = columns.map((c,index)=>{
            let text = this.rowData[c.attribute];
            let newColumn = Object.assign({},c,{text:text});
            return new ColumnBody(newColumn,index);
        })
        return super.render();
    }
}