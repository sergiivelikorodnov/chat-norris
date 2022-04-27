import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { autentification } from "../../service/firebase";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import cn from "classnames";

import classes from "./Login.module.scss";
const googleCn = cn(classes.login_button, classes.google);
const facebookCn = cn(classes.login_button, classes.facebook);

function Login(): JSX.Element {
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(autentification, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(autentification, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={classes.login_page}>
      <div className={classes.login_card}>
        <h2>Welcome to Chat Norris Chat!</h2>

        <div className={googleCn} onClick={signInWithGoogle}>
          <GoogleOutlined /> Sign In with Google
        </div>

        <br />
        <br />

        <div className={facebookCn} onClick={signInWithFacebook}>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
