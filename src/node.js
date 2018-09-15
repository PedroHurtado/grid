import {
    createElement,
    classList,
    appendChilds,
    createTextContent,
    updateElement,
    removeNode
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
        this.changes = false;
    }
    render() {
        if (this.__node) {
            if (this.changes) {
                let newNode = createElement(this.nodeType);
                this.decorateNode(newNode);
                updateElement(this.__node, newNode);
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


    decorateNode(node) {
        if (this.options.text !== undefined) {
            createTextContent(node, this.options.text);
        }
        classList(node, this.classList);
        appendChilds(node, this.nodes);
        node.__pelikan = this;
    }
}