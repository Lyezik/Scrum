import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const StyledFormContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 50px;
    border-radius: 20px;
    background-color: rgb(0, 0, 0, 0.3);
    gap: 10px;

    & h2 {
        margin-bottom: 10px;
    }
`

const StyledButtonClose = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    top: 50px;
    right: 50px;
    height: 35px;
    width: 35px;
    cursor: pointer;
`

interface FormProps {
    title: string;
    handleClick: (email: string, password: string) => void;
    setIsOpenAuth: (isOpen: boolean) => void
}


const Form = ({ title, handleClick, setIsOpenAuth }: FormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleNavigate() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/user');
            }
        });

    }

    return (
        <StyledFormContainer>
            <StyledForm>
                <h2>{title}</h2>
                <StyledButtonClose
                    onClick={() => setIsOpenAuth(false)}>x</StyledButtonClose>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={() => {
                        handleClick(email, password)
                        handleNavigate()
                    }}

                >
                    {title}
                </button>
            </StyledForm>
        </StyledFormContainer>
    )
}

export { Form }