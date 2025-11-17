// interface BoardList {
//     id: number,
//     name: string,
// };

export const BoardsMock = [
    {
        boardId: 1,
        boardName: 'Доска 1',
        tables: [
            {
                id: 1,
                name: 'Таблица 1',
                tasks: [
                    {
                        id: 1,
                        name: 'Задача 1',
                        description: 'Описание задачи 1',
                        status: 'todo'
                    }
                ]
            },
            {
                id: 2,
                name: 'Таблица 2',
                tasks: []
            },
            {
                id: 3,
                name: 'Таблица 3',
                tasks: []
            },
        ]
    }
];