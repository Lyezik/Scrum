import styled from "styled-components";
import { useSubscribeAllBoardsQuery } from "../../store/boardsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
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