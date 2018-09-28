import { Node } from "./node.js";
import { Paginator } from './paginator/paginator.js'

export class Footer extends Node {
    constructor() {
        super({ classList: ['grid__footer'] });
        this.nodes = this.createNodes()
    }
    createNodes() {
        return [new Paginator(1500,25)];
    }
}
