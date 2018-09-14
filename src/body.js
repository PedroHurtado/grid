import {Node} from './node.js';
import {BodyRow} from './body.row.js'
export class Body extends Node{
    constructor(options,columns){
        super(options);
        this.columns = columns;
        this.options = options;
        this._data = [];
        
    }
    set data(value){
        this._data =  value || [];
    }    
    render(){
        this.nodes = this._data.map(row=>{
            return new BodyRow(this.options.row,this.columns,row);             
        });
        return super.render();
    }
}