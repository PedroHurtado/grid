import {Node} from './node.js'
import {setWidth} from './domutil.js'
export class Column extends Node{
    constructor(options,index){
        super(options,'div');
        if (index===0){
            this.classList.push('grid__column--first')
        }
        this.width = options.width || 0;
        this.nodes=[this.createSpan()];
        this.options.text = '';
    }
    createSpan(){
        let span = new Node({text:this.options.text || ''},'span');
        return span;
    }
    render(){
        let node = super.render();
        if(this.width){
            setWidth(node,this.width);
        }
        return node;
    }
}