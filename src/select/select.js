import { Node } from '../node.js'
import { List } from './list.js'
export class Select extends Node {
    constructor(options, data) {
        super(options);
        this.options.events = {
            click: this.handerClick.bind(this), 
        }
       
        let {columns,selectable} = {
            columns:options.columns,
            selectable:options.selectable
        }
        if(selectable){
            columns.unshift(this.createSelectableColumn(selectable))
        }

        this._data = data || [];
        this.open = false;
        
        this.nodes = [this.createNodes()];

        this.list = new List(Object.assign({},
            this.options.list,
            { columns: this.options.columns }
        ), this._data);

        this.__listNode = null;
    }
    set data(value) {
        this._data = value || [];
        this.changes = true;

    }
  
    handerClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.open = !this.open;
        if (!this.__listNode) {
            this.__listNode = this.list.render();
        }
        if (this.open) {
            this.showListNode()
        } else {
            this.__listNode.remove();
        }
    }
    showListNode() {
        let rect = this.__node.getBoundingClientRect();
        this.__listNode.style.position = 'absolute';
        this.__listNode.style.right = `${rect.right-rect.width}px`;
        //this.__listNode.style.left = `${rect.left}px`;
        this.__listNode.style.top = `${rect.bottom}px`;
        document.body.appendChild(this.__listNode);
    }
    createNodes() {
        return new Node({
            classList: ['select__header']
        }, 'div',
            new Node({
                classList: ['select__header__span'],
                text: this._data[0].text,
            }, 'span'),
            new Node({
                classList: ['select__header__img'],
                attributes: {
                    src: '/assets/img/arrow-dropdown.svg'
                }
            }, 'img')
        );
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
    render(){
        let node = super.render();
        if(this.options.width){
            node.style.width = `${this.options.width}px`;
        }
        return node;
    }
}