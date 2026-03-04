import styled from 'styled-components'
import HeaderNav from '../blocks/HeaderNav'

const StyledHeader = styled.div`
  display: flex;  
  width: 210px;
  min-width: 210px;
  flex-direction: column;
  border-right: 1px solid #dcdde2;
`
const HeaderTitle = styled.h1`
  min-width: max-content;
  font-size: 1.5rem;
  padding: 25px 10px;
  border-bottom: 1px solid #dcdde2;
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <a href="/">Shiro's scrum</a>
      </HeaderTitle>
      <StyledHeaderWrapper>
        <HeaderNav />
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}
