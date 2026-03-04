import styled from 'styled-components'
import { BoardsList } from './BoardsList'
import { useState } from 'react'
import { CreateBoardModal } from './CreateBoardModal'

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledMenuButton = styled.button`
  width: 100%;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`

export const Menu = () => {
  const [isOpenCreateBoard, setIsOpenCreateBoard] = useState(false) //открывает окно создания доски

  return (
    <StyledMenu>
      <StyledMenuButton onClick={()=>setIsOpenCreateBoard(true)}>Создать новую доску</StyledMenuButton>
      <BoardsList />

      { 
        isOpenCreateBoard && (                         // окно создания доски
          <CreateBoardModal 
            setIsOpenCreateBoard={setIsOpenCreateBoard}
          />
        )
      }
    </StyledMenu>
  )
}
