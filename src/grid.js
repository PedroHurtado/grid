import { Node } from './node.js'
import { Header } from './header.js';
import { Body } from './body.js';
export class Grid extends Node {
    constructor(options) {
        super(options);
        let {columns,selectable} = {
            columns:options.columns,
            selectable:options.selectable
        }
        if(selectable){
            columns.unshift(this.createSelectableColumn(selectable))
        }
        this.header = new Header(options.header,columns);
        this.body = new Body(options.body,columns);
        this.nodes = [this.header, this.body];

    }
    createSelectableColumn(selectable){
        return {
            visible:true,
            classList:(selectable.classList ||[]).map(c=>c),
            selectable:Object.assign({},{
                selected:selectable.selected,
                unselected:selectable.unselected,
            }),
        };
    }
    set data(value) {
        this.body.data = value;
    }

}