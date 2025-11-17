import styled from "styled-components"

const StyledTablesItem = styled.li`
     background-color: #31324e;
     border-radius: 10px;
     padding: 10px;
`

interface TablesListProps {
    title: string,
};


export const TablesItem: React.FC<TablesListProps> = ({ title }) => {
    return (
        <StyledTablesItem>{title}</StyledTablesItem>
    )
}
