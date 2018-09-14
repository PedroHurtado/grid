import {Row} from './row.js'
import {ColumnHeader} from './column.header.js'
import {Node} from './node.js';
export class Header extends Row
{
    constructor(options,columns){
        super(options,columns);
        this.nodes = this.columns.map((c,index)=>{
            if (c.sortable){
                let down = new Node({classList:['triangle']},'p');
                down.nodes.push(new Node({classList:['down']},'i'));
                let up = new Node({classList:['triangle']},'p');
                up.nodes.push(new Node({classList:['up']},'i'));
                let sort = new Node({classList:['sort']},'div');
                sort.nodes=[up,down]
                return [new ColumnHeader(c,index),sort];
            }
            else{
                return new ColumnHeader(c,index);
            }
            
        });
    }
}