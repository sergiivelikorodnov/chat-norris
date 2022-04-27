import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { autentification } from "../service/firebase";

type Props = {
  children: ReactNode;
};

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(autentification, (user) => setUser(user));
    setLoading(false);
    if (user) navigate("/chats");
  }, [user, navigate]);

  const value = { user };

  return (
    <AuthContext.Provider value={value.user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
