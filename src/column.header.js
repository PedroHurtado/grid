import { Column } from './column.js';
import { Node } from './node.js'

export class ColumnHeader extends Column {
    constructor(options, index) {
        super(options, index);
        if (options.classListHeader) {
            this.classList = this.classList.concat(options.classListHeader);
        }
        if (this.options.sortable) {
            this.nodes.push(this.createSort())
        }
    }
    createSort() {
        let down = new Node({ classList: ['grid__column__sort__column'] }, 'p',
            new Node({
                classList: ['grid__column__sort__column__i',
                    'grid__column__sort__column__i--down']
            }, 'i')
        );

        let up = new Node({ classList: ['grid__column__sort__column'] }, 'p',
            new Node({
                classList: ['grid__column__sort__column__i',
                    'grid__column__sort__column__i--up']
            }, 'i')
        );
        
        let sort = new Node({ classList: ['grid__column__sort'] }, 'div',up,down);
        return sort;
    }
}