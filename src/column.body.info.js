import {ColumnBody} from './column.body.js'
import { Node } from './node.js';
import {Grid} from './grid.js'

export class ColumnBodyInfo extends ColumnBody{
    constructor(options,index) {
        options.text = '+';
        super(options,index);
        this.span = this.nodes[0];
        this.span.options.events = {
            click:this.open.bind(this)
        };
        this.open = false;
        this.span.classList.push('grid__column--info');
        this.subGrid = null;
    }
    open(ev){
        ev.stopPropagation();
        this.open=!this.open;
        if(this.open){
            
            this.span.options.text = '-';
            this.createSubGrid();
            
            
        }else{
            this.span.options.text = '+';
            if(this.subGrid){
                this.subGrid.remove();
            }
        }
        this.toggleInfoClass();
        this.span.changes = true;
       
    }
    toggleInfoClass(){
        let _class = 'grid__column--info-open'
        let index = this.span.classList.indexOf(_class);
        if(index>-1){
            this.span.classList.splice(index, 1);
        }else{
            this.span.classList.push(_class);
        }
    }
    createSubGrid(){
        let parent = this.span.__node.parentNode.parentNode.parentNode; // Body Row
        let subGrid = new Grid(this.options.grid);
       
        let element = subGrid.render();
        element.style.marginLeft = `${this.span.__node.getBoundingClientRect().x-(this.span.__node.getBoundingClientRect().width/2)}px`;
        subGrid.data = this.options.data;
        parent.appendChild(element);
        this.subGrid = element;
    }
   
   
}