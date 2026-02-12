import { Menu } from '../blocks/Menu'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const MainContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-grow: 1;
  height: 100%;
`
export const Main = () => {
  return (
    <MainContainer>
      <Menu />
      <Outlet />  {/* подставляется <Board /> */}
    </MainContainer>
  )
}
