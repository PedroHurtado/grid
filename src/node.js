import {
    createElement,
    classList,
    setAttributes,
    appendChilds,
    createTextContent,
    updateElement,
    removeNode,
    createEvent,
    removeEvent
} from './domutil.js'
export class Node {
    constructor(options, nodeType = 'div', ...nodes) {
        this.nodeType = nodeType;
        if (options.classList && Array.isArray(options.classList)) {
            this.classList = options.classList.map(c => c);
        }
        else {
            this.classList = [];
        }
        this.nodes = nodes;
        this.options = options;
        this._changes = false;
    }
    render() {
        if (this.__node) {
            if (this._changes) {
                let newNode = createElement(this.nodeType);
                this.decorateNode(newNode);
                updateElement(this.__node, newNode);
                this.removeEvent(this.options.events,this.__node);
                removeNode(this.__node);
                this.__node = newNode;
                this.changes = false;

            }
        } else {
            this.__node = createElement(this.nodeType);
            this.decorateNode(this.__node);
        }
        return this.__node;
    }
    set changes(value){
        if(value){
            this._changes= true;
            this.render();
        }
        else{
            this._changes = false;
        }
    }

    decorateNode(node) {
        if (this.options.text !== undefined) {
            createTextContent(node, this.options.text);
        }
        classList(node, this.classList);
        setAttributes(node,this.options.attributes);
        appendChilds(node, this.nodes);
        this.createEvents(this.options.events,node);
        node.__pelikan = this;
    }
    createEvents(events,node){
        if(events){
            Object.keys(events).forEach(key=>{
                let handler = events[key];
                if(typeof handler === 'function'){
                    createEvent(node,key,handler);
                }
            });
        }
    }
    removeEvent(events,node){
        if(events){
            Object.keys(events).forEach(key=>{
                let handler = events[key];
                if(typeof handler === 'function'){
                    removeEvent(node,key,handler);
                }
            });
        }
    }
}