export const MetaData = {
    classList: ['grid'],
    header: {
        classList: ['grid__header'],
        actions: [],
        row: {
            classList: ['grid__header__row'],
        }
    },
    body: {
        classList: ['grid__body'],
        actions: [],
        rows: {
            row: {
                classList: ['grid__body__row'],
            },
            rowColumns: {
                classList: ['grid__body__row__columns'],
            },
        },
        row: {
            classList: ['grid__body__row'],
        }
    },
    columns: [
        {
            text: 'Hello',
            classList: ['grid__column', 'grid__column--100'],
            attribute: 'hello',
            converter: {
                type: 'dateConverter',
                params: []
            },
            sortable: true,
            sort: 'desc',
            decorators: [],
            visible: true,
        },
        {
            text: 'info.',
            classList: ['grid__column', 'grid__column--100', 'grid__column--center'],
            classListBody: ['grid__column--bold'],
            attribute: 'subgrid',
            visible: true,
            grid: {

                classList: ['grid'],
                header: {
                    classList: ['grid__header'],
                    actions: [],
                    row: {
                        classList: ['grid__header__row','subgrid__header__row'],
                    }
                },
                body: {
                    classList: ['grid__body'],
                    actions: [],
                    rows: {
                        row: {
                            classList: ['grid__body__row'],
                        },
                        rowColumns: {
                            classList: ['subgrid__body__row__columns'],
                        },
                    },
                    row: {
                        classList: ['grid__body__row'],
                    }
                },
                columns: [
                    {
                        text: 'Hello',
                        classList: ['grid__column', 'grid__column--100'],
                        attribute: 'hello',
                        converter: {
                            type: 'dateConverter',
                            params: []
                        },
                        sortable: false,
                        visible: true,
                    }
                ]
            },
        },
        {
            text: 'World',
            //classListHeader:[],
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            classListBody: ['grid__column--bold'],
            attribute: 'world',
            converter: {
                type: 'dateConverter',
                params: []
            },
            width: 300,
            sort: 'asc',
            sortable: true,
            decorators: [],
            visible: true,
        }
    ]
}