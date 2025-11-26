import { Menu } from '../blocks/Menu'
import { Board } from '../blocks/Board'
import styled from 'styled-components'

const MainContainer = styled.div `
  display: flex;
  gap: 15px;
  flex-grow: 1;
  height: 100%;
`
export const Main = () => {
  return (
    <MainContainer>
      Зарегистрируйтесь или войдите
      {/* <Menu /> */}
      {/* <Board /> */}
    </MainContainer>
  )
}
