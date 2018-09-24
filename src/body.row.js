import { Row } from './row.js';
import { ColumnBody } from './column.body.js';
import {ColumnBodyInfo} from './column.body.info.js';
import { Node } from './node.js';

export class BodyRow extends Row {
    constructor(options, columns, rowData) {
        super(options, columns);
        this.rowData = rowData || {};
    }
    render() {

        let columns = this.options.columns.map((c, index) => {
            if (c.grid){
                let data = this.rowData[c.attribute] || [];
                let newColumn = Object.assign({}, c, { data: data });
                return new ColumnBodyInfo(newColumn,index);
            }
            else {
                let text = this.rowData[c.attribute];
                let newColumn = Object.assign({}, c, { text: text });
                return new ColumnBody(newColumn, index);
            }

        });
        let rowColumns = new Node({ classList: ['grid__body__row__columns'] }, 'div', columns);
        this.nodes.push(rowColumns);
        return super.render();
    }
}