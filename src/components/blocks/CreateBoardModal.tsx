import styled from 'styled-components'
import { useState } from 'react';
import store from '../../store/store';
import { useAddBoardMutation } from '../../store/boardsSlice';


const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledModalForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
  gap: 10px;
`

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

interface Props {
  setIsOpenCreateBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateBoardModal: React.FC<Props> = ({ setIsOpenCreateBoard }) => {
  const [nameBoard, setNameBoard] = useState('')
  const Uid = store.getState().user.uid; // Uid текущего пользователя

  const [addBoard] = useAddBoardMutation();
  const createBoard = async () => {
    await addBoard({
      name: nameBoard,
      ownerUid: Uid,
    });
    setIsOpenCreateBoard(false); // закрывает модальное окно
  };

  return (
    <StyledModalContainer>
      <StyledModalForm>
        <h1>Новый проект</h1>
        <span >Название доски</span>
        <input
          type="text"
          value={nameBoard}
          onChange={(e) => setNameBoard(e.target.value)} />
        <button onClick={createBoard}>Создать</button>
        <StyledCloseButton onClick={() => setIsOpenCreateBoard(false)}>X</StyledCloseButton>
      </StyledModalForm>
    </StyledModalContainer>
  )
}