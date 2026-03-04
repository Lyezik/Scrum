import styled from "styled-components";
import { useSubscribeAllBoardsQuery } from "../../store/boardsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const StyledBoardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: #252b35;
`

const StyledButton = styled.button`
    width: 100%;
    color: #e7ebf1;
    border-radius: 5px;
    border: none;
    background-color: #252b35;
    cursor: pointer;
     &&:hover {
        background-color: #3c424f;
    }
`
export const BoardsList = () => {
    const uid = useSelector((state: RootState) => state.user.uid);

    const { data, isLoading, isError } = useSubscribeAllBoardsQuery();

    const navigate = useNavigate();

    if (isLoading) return <p>Загрузка...</p>;
    if (isError) return <p>Ошибка: {isError}</p>;

    return (
        <StyledBoardList>
            {
                data?.map((board) => {

                    if (uid === board.ownerUid) {
                        return (
                            <StyledButton
                                key={board.id}
                                onClick={() => { navigate(`/user/${board.id}`) }}
                            >{board.name}
                            </StyledButton>
                        )
                    }
                }
                )
            }
        </StyledBoardList>
    )
}