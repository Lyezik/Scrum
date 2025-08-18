import styled from 'styled-components'

const StyledHeader = styled.div `
  padding: 10px;
`
const HeaderTitle = styled.h1 `
  
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle>Shiro's scrum</HeaderTitle>
    </StyledHeader>
  )
}
