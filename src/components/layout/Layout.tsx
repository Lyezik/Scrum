import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
// import type { Root } from "react-dom/client";
import type { RootState } from "../../store/store";

const Layout = () => {

    const dispatch = useDispatch();
    const auth = getAuth();


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

    if (isAuth) {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    } 
}

export { Layout } 