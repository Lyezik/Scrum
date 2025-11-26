import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledBoardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledButton = styled.button`
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 25px 0;
    cursor: pointer;
`

interface State {
    boards: {
        boards: { id: string; name: string; tables: [] }[];
    };
}

export const BoardsList = () => {
    const boards = useSelector((state: State) => state.boards.boards);
    const navigate = useNavigate();

    return (
        <StyledBoardList>
            {
                boards.map((item) => {
                    return (
                        <StyledButton
                            key={item.id}
                            onClick={() => { navigate(`/projects/${item.id}`) }}
                        >Доска
                        </StyledButton>
                    )
                })
            }
        </StyledBoardList>
    )
}
