export const MetaData = {
    classList:['grid'],
    header: {
        classList:['grid__header','grid__row'],
        actions:[],
    },
    body:{
        classList:['grid__body'],
        actions:[],
        row:{
            classList:['grid__row','grid__row__body']
        }
    },
    columns:[
        {
            text:'Hello',
            classList:['grid__column','grid__column--20'],
            attribute:'hello',
            converter:{
                type:'dateConverter',
                params:[]
            },
            sortable:true,
            decorators:[],
            visible:true
        },
        {
            text:'World',
            //classListHeader:[],
            classList:['grid__column','grid__column--100','grid__column--right'],
            classListBody:['grid__column--bold'],
            attribute:'world',
            converter:{
                type:'dateConverter',
                params:[]
            },
            width:300,
            sortable:true,
            decorators:[],
            visible:true
        }
    ]
}