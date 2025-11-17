import { Form } from './Form'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/userSlice'


interface LoginProps {
  setIsOpenLogin: (isOpen: boolean) => void;
}

const Login = ({setIsOpenLogin}: LoginProps) => {
    const dispatch = useDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.getIdToken().then((token) => {
                    dispatch(setUser({
                        email: user.email,
                        token: token,
                        id: user.uid,
                    }));
                });
            })
            .catch((error) => {
                console.error(error);
                alert("Invalid email or password");
            });
    }

    return (
        <Form
            title="Sign In"
            handleClick={handleLogin}
            setIsOpenAuth={setIsOpenLogin}
        />
    )
}

export { Login }