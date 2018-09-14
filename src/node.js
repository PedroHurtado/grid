import {createElement,classList,appendChilds,textContent}  from './domutil.js'
export class Node{
    constructor(options,nodeType='div',...nodes){
        this.nodeType = nodeType;
        if(options.classList && Array.isArray(options.classList)){
            this.classList=options.classList.map(c=>c);
        }
        else{
            this.classList = [];
        }
        this.nodes = nodes;
        this.options = options;
        this.changes = false;
    }
    render(){
        if(this.__node){
            if(this.changes){
                let parent = this.__node.parentElement;
                this.__node.remove();
                this.__node = createElement(this.nodeType);
                parent.appendChild(this.__node);
                this.changes = false;
                this.decorateNode();
            }
        }else{
            this.__node = createElement(this.nodeType);
            this.decorateNode();
        }
        return this.__node;
    }

    decorateNode() {
        if (this.options.text !== undefined) {
            textContent(this.__node, this.options.text);
        }
        classList(this.__node, this.classList);
        appendChilds(this.__node, this.nodes);
        this.__node.__pelikan = this;
    }
}