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
    }
    render(){
        let node = createElement(this.nodeType);
        if(this.options.text!==undefined){
            textContent(node,this.options.text);
        }
        classList(node,this.classList);
        appendChilds(node,this.nodes);
        node.__pelikan = this;
        return node;
    }
}