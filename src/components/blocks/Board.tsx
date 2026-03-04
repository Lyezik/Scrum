import styled from 'styled-components'
import { ColumnsList } from './ColumnsList'
import { useParams } from 'react-router-dom'
import { useSubscribeAllBoardsQuery, useAddColumnMutation, useDeleteBoardMutation } from '../../store/boardsSlice'
import { useState } from 'react'


const StyledBoard = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
  background-color: #252b35;
  overflow-x: hidden;
`

const StyledBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 10px;
`

const BoardTitle = styled.h2`
  color: #f1f5f4;
`

const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export const Board = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [columnName, setColumnName] = useState('');
  const [deleteBoard] = useDeleteBoardMutation();
  const params = useParams();
  const boardId = params.id;

  const { data } = useSubscribeAllBoardsQuery();
  const [addColumn] = useAddColumnMutation();

  const handkeEnterDown = (e: KeyboardEvent | React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {

      addColumn({ boardId, columnName: columnName || 'Новая колонка' });
      setIsOpen(false);
      setColumnName('');
    }
  }

  if (data) {
    const currentBoard = data.find((board) => board.id === boardId);

    if (currentBoard) {
      return (
        < StyledBoard >

          <StyledBoardHeader>
            <BoardTitle>{currentBoard.name}</BoardTitle>
            {
              isOpen ? (
                <input
                  type="text"
                  placeholder="Название колонки"
                  value={columnName}
                  onChange={(e) => setColumnName(e.target.value)}
                  onKeyDown={handkeEnterDown}

                />
              ) : (
                <StyledButton onClick={() => setIsOpen(!isOpen)}>Добавить колонку</StyledButton>
              )
            }

            <StyledButton
              onClick={() => boardId && deleteBoard({ boardId })}
            >
              Удалить доску
            </StyledButton>

          </StyledBoardHeader>

          <ColumnsList />
        </StyledBoard >
      )
    }
  }
}
