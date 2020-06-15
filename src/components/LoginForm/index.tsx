import "./scss/index.scss";

import * as React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { useSignIn } from "@sdk/react";
import { maybe } from "@utils/misc";

import { Button, Form, TextField } from "..";

interface ILoginForm {
  hide?: () => void;
}

const LoginForm: React.FC<ILoginForm> = ({ hide }) => {
  const [signIn, { loading, error }] = useSignIn();

  const handleOnSubmit = async (evt, { email, password }) => {
    evt.preventDefault();
    const authenticated = await signIn({ email, password });
    if (authenticated && hide) {
      hide();
    }
  };

  const responseGoogle = response => {
    console.log(response,'========');
  };

  const responseFacebook = response => {
    console.log(response,"====++++++++++");
  };

  return (
    <div className="login-form">
      <GoogleLogin
        clientId="501755889014-btls89ktsuijoj5c1lrrjvtr3jmg1fba.apps.googleusercontent.com"
        buttonText="Continue with google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="1007814429617488"
        // autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        className="facebookLoginButton"
        textButton="Continue with Facebook"
        // buttonText="Login"
        icon="fab fa-facebook-square"
      />
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
    </div>
  );
};

export default LoginForm;
