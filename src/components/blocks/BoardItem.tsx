import styled from "styled-components"

const StyledBoardItem = styled.li`
     
`

interface BoardListProps {
    name: string,
};




export const BoardItem: React.FC<BoardListProps> = ({ name }) => {
    return (
        <StyledBoardItem>{name}</StyledBoardItem>
    )
}
