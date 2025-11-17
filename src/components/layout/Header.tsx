import styled from 'styled-components'
import HeaderNav from '../blocks/HeaderNav'

const StyledHeader = styled.div`
  display: flex;  
  justify-content: space-between;
  padding: 10px;
`
const HeaderTitle = styled.h1`
  
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle>Shiro's scrum</HeaderTitle>
      <HeaderNav />
    </StyledHeader>
  )
}
