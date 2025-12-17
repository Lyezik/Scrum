import styled from 'styled-components'
import { db } from '../../firebase'
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import store from '../../store/store';


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

export const NewBoardModal: React.FC<Props> = ({ setIsOpenCreateBoard }) => {
  const [nameBoard, setNameBoard] = useState('')
  const Uid = store.getState().user.uid; // Uid текущего пользователя

  async function createBoard() {
    try {
      await addDoc(collection(db, "boards"), {
        name: nameBoard,
        ownerUid: Uid,
        tables: []
      });
      setIsOpenCreateBoard(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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