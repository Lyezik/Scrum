import styled from 'styled-components'
import { TablesList } from './TablesList'

// import { useDispatch } from 'react-redux'
// import { addTables } from '../../store/tablesSlice'

const StyledBoard = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-grow: 1;
  background-color: #171b34;
  border-radius: 20px;
  padding: 10px;
`
const BoardTitle = styled.h2`
  color: #f1f5f4;
`

export const Board = () => {
  // const dispatch = useDispatch();

  // const addTable = () => dispatch(addTables({ name: 'Новая таблица' }))

  return (
    <StyledBoard>
      <BoardTitle>Название</BoardTitle>
      {/* <button onClick={addTable}>Добавить</button> */}
      <TablesList />
    </StyledBoard>
  )
}
