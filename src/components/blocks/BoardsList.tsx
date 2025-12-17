// import { useSelector } from "react-redux";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import store from "../../store/store";

const StyledBoardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledButton = styled.button`
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 25px 0;
    cursor: pointer;
`

interface IBoard {
    id: string;
    name: string;
    ownerUid: string;
    tables: []
}

export const BoardsList = () => {
    const [boards, setBoards] = useState<IBoard[]>([]);
    const Uid = store.getState().user.uid;


    useEffect(() => {
        async function getBoards() {
            const querySnapshot = await getDocs(collection(db, "boards")); //массив всех документов boards
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                tables: doc.data().tables || [],
                ownerUid: doc.data().ownerUid,
            }));
            setBoards(data);
        }
        getBoards();
    }, []);

    return (
        <StyledBoardList>
            {
                boards.map((item) => {

                    if (Uid === item.ownerUid) {
                        return (
                            <StyledButton
                                key={item.id}
                            // onClick={() => { navigate(`/projects/${item.id}`) }}
                            >{item.name}
                            </StyledButton>
                        )
                    }
                })
            }
        </StyledBoardList>
    )
}