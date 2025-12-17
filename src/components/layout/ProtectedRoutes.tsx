import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1920px;
    min-width: 320px;
    padding: 0 40px;
    margin: 0 auto;
    background-color:#31324e;
    color: #babfc5;
  `
const ProtectedRoutes = () => {

    const dispatch = useDispatch();
    const auth = getAuth();
    // const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    email: user.email,
                    uid: user.uid
                }));
            } else {
                dispatch(removeUser());
            }
        });
        return () => unsubscribe();
    }, [auth, dispatch]);

    const isAuth = useSelector((state: RootState) => state.user.uid);

    // useEffect(() => {
    //     console.log(isAuth)
    //     if (isAuth === null) {
    //         navigate("/");           
    //     }
    // }, [isAuth]);

    if (isAuth) {
        return (
            <StyledContainer>
                <Header />
                <Outlet />
                <Footer />
            </StyledContainer>
        )
    }
}

export { ProtectedRoutes } 