// import { TablesItem } from './TablesItem';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

const StyledTablesList = styled.ul`
    display: flex;
    gap: 10px;
    flex-grow: 1;
`
// type State = {
//     tables: {
//         tables: { id: string; title: string }[];
//     };
// };

export const TablesList = () => {

    // const tables = useSelector((state: State) => state.tables.tables);

    return (
        <StyledTablesList>
            <Routes>
                <Route path='/projects'>
                    {
                        // tables.map((item: { id: string; title: string }) => (
                        //     <Route path={item.id}
                        //         element={
                        //             <TablesItem
                        //                 key={item.id}
                        //                 title={item.title}
                        //             />}
                        //     />
                        // ))
                    }
                </Route>
            </Routes>
        </StyledTablesList>
    )
}
