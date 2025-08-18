import { BoardItem } from './BoardItem';
import styled from 'styled-components';
// import { TablesMock } from '../../mock/mock';
import { useSelector } from 'react-redux';

const StyledBoardList = styled.ul`
    display: flex;
    gap: 10px;
    flex-grow: 1;
`
type State = {
  tables: {
    tables: { id: string; title: string }[];
  };
};

export const BoardList = () => {

    const tables = useSelector((state: State) => state.tables.tables);

    return (
        <StyledBoardList>
            {
                tables.map((item: { id: string; title: string }) => (
                    <BoardItem
                        key={item.id}
                        name={item.title}
                    />
                ))
            }
        </StyledBoardList>
    )
}
