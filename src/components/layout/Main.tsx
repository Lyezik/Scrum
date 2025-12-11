import { Menu } from '../blocks/Menu'
import { Board } from '../blocks/Board'
import styled from 'styled-components'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/userSlice'

const MainContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-grow: 1;
  height: 100%;
`
export const Main = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  return (
    <MainContainer>
      <Menu />
      <Board />
      <button
        onClick={() => {
          dispatch(removeUser())
          signOut(auth);
        }}
      >Выйти</button>
    </MainContainer>
  )
}
