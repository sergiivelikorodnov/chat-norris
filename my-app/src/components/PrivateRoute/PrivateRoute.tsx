import Login from "components/Login/Login";
import { useAuth } from "contexts/AuthContext";
import { useSelector } from "react-redux";
import { getActiveUser } from "store/activeUserSlice/selectors";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAuth();

  if (authorizationStatus === null) {
    return <Login />;
  } else {
    return children;
  }
}

export default PrivateRoute;
