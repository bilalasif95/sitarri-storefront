import "./scss/index.scss";

import * as React from "react";
// import { useAlert } from "react-alert";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { useSignIn, useSocialAuth } from "@sdk/react";
import { maybe } from "@utils/misc";
import removeImg from "../../images/pass-invisible.svg";
import removeImgg from "../../images/pass-visible.svg";
// import ForgottenPassword from "../OverlayManager/Login/ForgottenPassword";

import { Button, Form, OverlayTheme, OverlayType, TextField } from "..";

import { setAuthToken } from "@sdk/auth";

import emailImg from "../../images/email.svg";
import backicon from "../../images/iconmonstr-arrow-72.svg";

import RegisterForm from "../OverlayManager/Login/RegisterForm";

interface ILoginForm {
  hide?: () => void;
  show?: any;
}

const LoginForm: React.FC<ILoginForm> = ({ hide, show }) => {
  const [signIn, { loading, error }] = useSignIn();
  const [socialAuth] = useSocialAuth();
  const [emailClick,setEmailClick] = React.useState(false);
  const [registerClick,setRegisterClick] = React.useState(false);
  const [errors,setErrors] = React.useState("");
  const [passwordType, setPasswordType] = React.useState(true);
  // const alert = useAlert();
  const handleOnSubmit = async (evt, { email, password }) => {
    evt.preventDefault();
    const authenticated = await signIn({ email, password });
    if (authenticated && hide) {
      hide();
    }
  };

  const responseGoogle = async response => {
    if (response.accessToken) {
      const authenticated = await socialAuth({ accessToken: response.accessToken, provider: "google-oauth2", email: response.profileObj.email, uid: "" });
      if (authenticated && hide && authenticated.data.socialAuth.error === null) {
        setAuthToken(authenticated.data.socialAuth.token);
        hide();
      }
      else {
        setErrors(authenticated.data.socialAuth.error.message)
      }
    }
    // else {
    //   alert.show(
    //     {
    //       title: "Error with Google login. Please try again.",
    //     },
    //     {
    //       timeout: 5000,
    //       type: "error",
    //     }
    //   );
    // }
  };

  const responseFacebook = async response => {
    if (response.accessToken) {
      const authenticated = await socialAuth({ accessToken: response.accessToken, provider: "facebook", email: "", uid: response.id });
      if (authenticated && hide && authenticated.data.socialAuth.error === null) {
        setAuthToken(authenticated.data.socialAuth.token);
        hide();
      }
      else {
        setErrors(authenticated.data.socialAuth.error.message)
      }
    }
    // else {
    //   alert.show(
    //     {
    //       title: "Error with Facebook login. Please try again.",
    //     },
    //     {
    //       timeout: 5000,
    //       type: "error",
    //     }
    //   );
    // }
  };

  const menuBack = () => {
    setEmailClick(true)
  };

  const onPasswordEyeIconClick = () => {
    if (passwordType) {
      return setPasswordType(false);
    }
    setPasswordType(true);
  };
  return (
    <div className="login-form">
      {emailClick ?
      <>
      <Button onClick={()=>{setEmailClick(false);setRegisterClick(false)}} className="backBtn">
      <ReactSVG
              path={backicon}
            />
      </Button>
      <Form
        errors={maybe(() => error.extraInfo.userInputErrors, [])}
        onSubmit={handleOnSubmit}
      >
        <TextField
          name="email"
          autoComplete="email"
          label="Email Address"
          type="email"
          required
        />
        {passwordType ? (
          <div className="passwordInput">
            <TextField
              name="password"
              autoComplete="password"
              label="Password"
              type="password"
              required
            />
            <ReactSVG
              path={removeImg}
              className="passwordEye"
              onClick={onPasswordEyeIconClick}
            />
          </div>
        ) : (
          <div className="passwordInput">
            <TextField
              name="password"
              autoComplete="password"
              label="Password"
              type="text"
              required
            />
            <ReactSVG
              path={removeImgg}
              className="passwordEye"
              onClick={onPasswordEyeIconClick}
            />
          </div>
        )}
        <div className="login-form__button">
          <Button type="submit" {...(loading && { disabled: true })} className="submitBtn">
            {loading ? "Loading" : "Sign in"}
          </Button>
        </div>
        <Button onClick={() => {
          show(OverlayType.password, OverlayTheme.right);
        }} className="forgotBtn">Forgot Password?</Button>
      </Form>
      <div className="login__content__password-reminder">
        <p>
          Don't have an account?&nbsp;
          <span className="u-link" onClick={()=> {setRegisterClick(true);setEmailClick(false)}}>
            Sign up
          </span>
            </p>
          </div>
          {/* <ForgottenPassword
        onClick={() => {
          show(OverlayType.password, OverlayTheme.right);
        }}
      /> */}
        </>
        :
        <>
          {registerClick ?
            <RegisterForm menuBack={menuBack} hide={hide} />
            :
            <>
              <div className="errorMessages">{errors}</div>
              <FacebookLogin
                appId="1078436535883692"
                // autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                textButton="Continue with Facebook"
                // buttonText="Login"
                icon="fab fa-facebook-square"
              />
              <GoogleLogin
                clientId="325319904531-ce20k86al4d3rtqhjd6heg9s551ksirg.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="googleLoginButton"
                cookiePolicy={"single_host_origin"}
              />
              <br /><br />
              <div className="line"><span>OR</span></div>
              <Button className="emailButton" onClick={() => setEmailClick(true)}>
                <span><ReactSVG path={emailImg} /></span>
              <p className="ce">Continue with Email</p></Button>
              <p className="tc">By continuing you agree to our <Link to="" className="statementSection">T&Cs</Link> and<Link to="" className="statementSection"> Privacy Policy</Link>.</p>
            </>
          }
        </>
      }
    </div>
  );
};

export default LoginForm;
