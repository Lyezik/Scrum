import { ColumnsItem } from "./ColumnsItem";
import styled from 'styled-components';
import { useSubscribeAllColumnsQuery } from "../../store/boardsSlice";
import { useParams } from "react-router-dom";


const StyledTablesList = styled.ul`
    display: flex;
    gap: 10px;
    flex-grow: 1;
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
