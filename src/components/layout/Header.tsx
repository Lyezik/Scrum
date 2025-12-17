import styled from 'styled-components'
import HeaderNav from '../blocks/HeaderNav'

const StyledHeader = styled.div`
  display: flex;  
  gap: 100px;
  padding: 10px;
`
const HeaderTitle = styled.h1`
  min-width: max-content;
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <a href="/">Shiro's scrum</a>
      </HeaderTitle>
      <HeaderNav />
    </StyledHeader>
  )
}
