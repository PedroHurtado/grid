import { Row } from './row.js';
import { ColumnBody } from './column.body.js';
import {ColumnBodyInfo} from './column.body.info.js';
import {ColumnBodyBoolen} from './column.body.boolean.js';
import { Node } from './node.js';
import { ColumnSelectable } from './column.selectable.js';

export class BodyRow extends Row {
    constructor(options, columns, rowData) {
        super(options, columns);
        this.rowData = rowData || {};
    }
    render() {
        let columns = this.options.columns.map((c, index) => {
            let text = this.rowData[c.attribute];
            if(c.selectable){
                let newColumn = Object.assign({},c);
                return new ColumnSelectable(newColumn,index)
            }
            else if (c.grid){
                let data = text || [];
                let newColumn = Object.assign({}, c, { data: data });
                return new ColumnBodyInfo(newColumn,index);
            }else if(c.type==='Boolean'){
                let newColumn = Object.assign({}, c, { text: text });
                return new ColumnBodyBoolen(newColumn,index);
            }
            else {
                let newColumn = Object.assign({}, c, { text: text });
                return new ColumnBody(newColumn, index);
            }

        });
        let rowColumns = new Node({ classList: ['grid__body__row__columns'] }, 'div', columns);
        this.nodes.push(rowColumns);
        return super.render();
    }
}