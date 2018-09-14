import { Node } from './node.js'
import { Header } from './header.js';
import { Body } from './body.js';
export class Grid extends Node {
    constructor(options) {
        super(options);
        this.header = new Header(options.header,options.columns);
        this.body = new Body(options.body,options.columns);
        this.nodes = [this.header, this.body];

    }
    set data(value) {
        this.body.data = value;
    }

}