import { Grid } from './grid.js';
import { MetaData } from './fakegrid.js'

let grid = new Grid(MetaData);

let element = grid.render();
document.addEventListener('DOMContentLoaded',function(){
    element.addEventListener('click', function () {
        grid.data = [
            { hello: 1, world: 'hello world' },
            { hello: 2, world: 'hello world' },
            { hello: 3, world: 'hello world' },
            { hello: 4, world: 'hello world' },
            { hello: 5, world: 'hello world' },
            { hello: 6, world: 'hello world' },
            { hello: 1, world: 'hello world' },
            { hello: 2, world: 'hello world' },
            { hello: 3, world: 'hello world' },
            { hello: 4, world: 'hello world' },
            { hello: 5, world: 'hello world' },
            { hello: 6, world: 'hello world' },
            { hello: 1, world: 'hello world' },
            { hello: 2, world: 'hello world' },
            { hello: 3, world: 'hello world' },
            { hello: 4, world: 'hello world' },
            { hello: 5, world: 'hello world' },
            { hello: 6, world: 'hello world' },
            { hello: 1, world: 'hello world' },
            { hello: 2, world: 'hello world' },
            { hello: 3, world: 'hello world' },
            { hello: 4, world: 'hello world' },
            { hello: 5, world: 'hello world' },
            { hello: 6, world: 'hello world' },
            { hello: 1, world: 'hello world' },
            { hello: 2, world: 'hello world' },
            { hello: 3, world: 'hello world' },
            { hello: 4, world: 'hello world' },
            { hello: 5, world: 'hello world' },
            { hello: 6, world: 'hello world' },
            { hello: 1, world: 'hello world' },
            { hello: 2, world: 'hello world' },
            { hello: 3, world: 'hello world' },
            { hello: 4, world: 'hello world' },
            { hello: 5, world: 'hello world' },
            { hello: 6, world: 'hello world end' },
        ];
    }, false)
    document.body.appendChild(element);
})

