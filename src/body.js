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
        this.render();
    }    
    render(){
        this.nodes = this._data.map(row=>{
            return new BodyRow(this.options.row,this.columns,row);             
        });
        return super.render();
    }
}