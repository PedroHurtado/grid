import {Node} from './node.js';
import {BodyRow} from './body.row.js'
export class Body extends Node{
    constructor(options,columns){
        super(options);
        this._data = [];
        this.columns = columns;
    }
    set data(value){
        this._data =  value || [];
        this.changes = true;
    }    
    render(){
        this.nodes = this._data.map(row=>{
            return new BodyRow(this.options.rows,this.columns,row);             
        });
        return super.render();
    }
}