import {HeaderRow} from './header.row.js'
import {Node} from './node.js';
export class Header extends Node
{
    constructor(options,columns){
        super(options);
        this.columns = columns;     
    }
    render(){
        this.nodes.push(new HeaderRow(this.options.row,this.columns));
        return super.render();
    }
}