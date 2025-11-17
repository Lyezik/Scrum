import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from './Form'
import { setUser } from "../../store/userSlice";

interface SignUpProps {
  setIsOpenRegister: (isOpen: boolean) => void;
}

const SignUp = ({setIsOpenRegister}: SignUpProps) => {
    const dispatch = useDispatch();
    // const push = useNavigate();
 
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.getIdToken().then((token) => {
                    dispatch(setUser({
                        email: user.email,
                        token: token,
                        id: user.uid,
                    }));
            })
                // push('/');
            })
            .catch(console.error);

    }
    
    return (
        <Form
            title='Register'
            handleClick={handleRegister}
            setIsOpenAuth={setIsOpenRegister}
        />
    )
}

export { SignUp }