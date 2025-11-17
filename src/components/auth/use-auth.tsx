import { useSelector } from "react-redux";

interface UserState {
  user: {
    email: string;
    token: string;
    id: string;
  };
}

export function useAuth() {
    const { email, token, id } = useSelector((state: UserState) => state.user);
    return {
        isAuth: !!email,
        email,
        token,
        id
    };
}