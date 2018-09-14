import {createElement,classList,appendChilds}  from './domutil.js'
export class Node{
    constructor(nodeType='div'){
        this.nodeType = nodeType;
        this.classList = [];
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