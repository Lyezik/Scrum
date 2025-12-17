import styled from "styled-components"
import { useState } from "react"
import { SignUp } from "../auth/SignUp"
import { Login } from "../auth/Login"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const StyledNav = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
`

const StyledHeaderButton = styled.button`
  
`
const StyledNavButtons = styled.div`
    display: flex;
    gap: 5px;
    margin-right: 20px;
`

const HeaderNav = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const isAuth = useSelector((state: RootState) => state.user.uid);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <StyledNav>
            <a href="/user">Мои проекты</a>
            <StyledNavButtons>

                {!isAuth ? (
                    <>
                        <StyledHeaderButton
                            onClick={() => setIsOpenLogin(!isOpenLogin)}
                        >Login
                        </StyledHeaderButton>
                        <StyledHeaderButton
                            onClick={() => setIsOpenRegister(!isOpenRegister)}
                        >Register
                        </StyledHeaderButton>
                    </>
                ) : (
                    <StyledHeaderButton
                        onClick={() => {
                            dispatch(removeUser())
                            signOut(auth);
                            navigate('/');
                        }}
                    >Выйти
                    </StyledHeaderButton>
                )}
            </StyledNavButtons>

            {isOpenRegister && <SignUp
                setIsOpenRegister={setIsOpenRegister}
            />}
            {isOpenLogin && <Login
                setIsOpenLogin={setIsOpenLogin}
            />}
        </StyledNav>
    )
}

export default HeaderNav