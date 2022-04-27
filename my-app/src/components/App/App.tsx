import ChatsContainer from "components/ChatsContainer/ChatsContainer";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import Login from "../Login/Login";
import PageWrapper from "../PageWrapper/PageWrapper";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Login />} />
          <Route
            path="/chats"
            element={
              <PrivateRoute>
                <ChatsContainer />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
