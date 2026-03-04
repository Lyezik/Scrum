import { ColumnsItem } from "./ColumnsItem";
import styled from 'styled-components';
import { useSubscribeAllColumnsQuery } from "../../store/boardsSlice";
import { useParams } from "react-router-dom";


const StyledTablesList = styled.ul`
    display: flex;
    flex-grow: 1;
    gap: 10px;
    padding: 10px 10px 0 10px;
    background-color: #2b3f62;
    overflow-x: auto;
    overflow-y: auto;
`

export const ColumnsList = () => {
    const params = useParams();
    const boardId = params.id;

    const { data } = useSubscribeAllColumnsQuery({ boardId: boardId || '' });
    
    return (
        <StyledTablesList>
            {data &&
                data.map((column) => (

                    <ColumnsItem
                        key={column.id}
                        columnId={column.id}
                        title={column.name}
                    />
                ))
            }
        </StyledTablesList>
    )
}
