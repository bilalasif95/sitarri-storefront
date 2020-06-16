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
    if (response.accessToken) {
      alert("successfully login...")
    }
    else {
      alert("Error try agin...")
    }
    console.log(response, "google response");
  };

  const responseFacebook = response => {
    if (response.accessToken) {
      alert("successfully login...")
    }
    else {
      alert("Error try agin...")
    }
    console.log(response, "facebook response");
  };

  return (
    <div className="login-form">
     <br /><br />
      <GoogleLogin
        clientId="501755889014-btls89ktsuijoj5c1lrrjvtr3jmg1fba.apps.googleusercontent.com"
        buttonText="Continue with google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <br /><br />
      <FacebookLogin
        appId="250845706205535"
        // autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        className="facebookLoginButton"
        textButton="Continue with Facebook"
        // buttonText="Login"
        icon="fab fa-facebook-square"
      />
       <br /><br />
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
