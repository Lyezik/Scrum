import styled from 'styled-components'
import { BoardsList } from './BoardsList'

import { useDispatch } from 'react-redux'
import { addBoards } from '../../store/boardsSlice'

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 25%;
  background-color: #171b34;
  border-radius: 20px;
  padding: 15px 11px;
`

const StyledMenuButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export const Menu = () => {
  const dispatch = useDispatch()

  const addBoard = () => { dispatch(addBoards({ name: 'Новая доска' })) }

  return (
    <StyledMenu>
      <StyledMenuButton onClick={addBoard}>Создать новую доску</StyledMenuButton>
      <BoardsList />
    </StyledMenu>
  )
}
