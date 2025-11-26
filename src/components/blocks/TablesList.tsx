import { TablesItem } from './TablesItem';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';

// import { Routes, Route } from 'react-router-dom';

const StyledTablesList = styled.ul`
    display: flex;
    gap: 10px;
    flex-grow: 1;
`

export const TablesList = () => {

    return (
        <StyledTablesList>
            <TablesItem
                // key={item.id}
                title={'Новая таблица'}
            />
        </StyledTablesList>
    )
}
