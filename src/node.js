import {createElement,classList,appendChilds}  from './domutil.js'
export class Node{
    constructor(options,nodeType='div'){
        this.nodeType = nodeType;
        if(options.classList && Array.isArray(options.classList)){
            this.classList=options.classList.map(c=>c);
        }
        else{
            this.classList = [];
        }
        this.nodes = [];
    }
    render(){
        let node = createElement(this.nodeType);
        classList(node,this.classList);
        appendChilds(node,this.nodes);
        node.__pelikan = this;
        return node;
    }
}