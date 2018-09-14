import {Node} from './node.js'
import {textContent,setWidth} from './domutil.js'
export class Column extends Node{
    constructor(options,index){
        super('span');
        this.classList = options.classList || [];
        if (index===0){
            this.classList.push('grid__column--first')
        }
        this.text = options.text;
        this.width = options.width || 0;
    }
    render(){
        let node = super.render();
        textContent(node,this.text);
        if(this.width){
            setWidth(node,this.width);
        }
        return node;
    }
}