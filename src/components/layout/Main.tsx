import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const MainContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
`
export const Main = () => {
  return (
    <MainContainer>
      <Outlet />  {/* подставляется <Board /> */}
    </MainContainer>
  )
}
