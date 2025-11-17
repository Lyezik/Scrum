import styled from "styled-components"
import { useState } from "react"
import { SignUp } from "../auth/SignUp"
import { Login } from "../auth/Login"

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
    // const [isOpenAuth, setIsOpenAuth] = useState(false);

    return (
        <nav>
            <StyledNavButtons>
                <StyledHeaderButton
                    onClick={() => setIsOpenLogin(!isOpenLogin)}
                >Login
                </StyledHeaderButton>
                <StyledHeaderButton
                    onClick={() => setIsOpenRegister(!isOpenRegister)}
                >Register
                </StyledHeaderButton>
            </StyledNavButtons>

            {isOpenRegister && <SignUp
                setIsOpenRegister={setIsOpenRegister}
            />}
            {isOpenLogin && <Login
                setIsOpenLogin={setIsOpenLogin}
            />}
        </nav>
    )
}

export default HeaderNav