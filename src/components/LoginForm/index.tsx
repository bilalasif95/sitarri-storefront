import "./scss/index.scss";

import * as React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { useSignIn } from "@sdk/react";
import { maybe } from "@utils/misc";

import ForgottenPassword from "../OverlayManager/Login/ForgottenPassword";

import { Button, Form, OverlayTheme, OverlayType, TextField } from "..";

interface ILoginForm {
  hide?: () => void;
  show?: any;
}

const LoginForm: React.FC<ILoginForm> = ({ hide,show }) => {
  const [signIn, { loading, error }] = useSignIn();
  const [emailClick,setEmailClick] = React.useState(false);

  const handleOnSubmit = async (evt, { email, password }) => {
    evt.preventDefault();
    const authenticated = await signIn({ email, password });
    if (authenticated && hide) {
      hide();
    }
  };

  const responseGoogle = response => {
    if (response.accessToken) {
      alert("successfully login...")
    }
    else {
      alert("Error try agin...")
    }
    // console.log(response, "google response");
  };

  const onEmailClick = e => {
    e.preventDefault();
    setEmailClick(true);
  }

  const responseFacebook = response => {
    if (response.accessToken) {
      alert("successfully login...")
    }
    else {
      alert("Error try agin...")
    }
    // console.log(response, "facebook response");
  };

  return (
    <div className="login-form">
      {emailClick ?
      <>
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
        <TextField
          name="password"
          autoComplete="password"
          label="Password"
          type="password"
          required
        />
        <div className="login-form__button">
          <Button type="submit" {...(loading && { disabled: true })}>
            {loading ? "Loading" : "Sign in"}
          </Button>
        </div>
      </Form>
      <ForgottenPassword
        onClick={() => {
          show(OverlayType.password, OverlayTheme.right);
        }}
      />
      </>
      :
      <>
      <FacebookLogin
        appId="250845706205535"
        // autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Continue with Facebook"
        // buttonText="Login"
        icon="fab fa-facebook-square"
      />
      <br /><br />
      <GoogleLogin
        clientId="501755889014-btls89ktsuijoj5c1lrrjvtr3jmg1fba.apps.googleusercontent.com"
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="googleLoginButton"
        cookiePolicy={"single_host_origin"}
      />
      <br /><br />
      <div className="line"><span>OR</span></div>
      <Button className="emailButton" onClick={onEmailClick}>Continue with Email</Button>
      </>
      }
    </div>
  );
};

export default LoginForm;
