import {Node} from './node.js'
export class Row extends Node{
    constructor(options,columns){
        super(options);
        this.classList=options.classList;
        this.columns = columns.filter(c=>c.visible);
    }
}