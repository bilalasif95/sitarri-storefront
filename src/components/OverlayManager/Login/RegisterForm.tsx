import "./scss/index.scss";

import * as React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { accountConfirmUrl } from "../../../app/routes";

import { Button, Form, TextField } from "../..";
import { maybe } from "../../../core/utils";
import { RegisterAccount } from "./gqlTypes/RegisterAccount";
import { TypedAccountRegisterMutation } from "./queries";

import { AlertManager, useAlert } from "react-alert";

const showSuccessNotification = (
  data: RegisterAccount,
  hide: () => void,
  alert: AlertManager
) => {
  const successful = maybe(() => !data.accountRegister.errors.length);

  if (successful) {
    hide();
    alert.show(
      {
        title: data.accountRegister.requiresConfirmation
          ? "Please check your e-mail for further instructions"
          : "New user has been created",
      },
      { type: "success", timeout: 5000 }
    );
  }
};

const RegisterForm: React.FC<{ hide: () => void }> = ({ hide }) => {
  const alert = useAlert();
  const [emailClick,setEmailClick] = React.useState(false);

  const responseGoogle = response => {
    if (response.accessToken) {
      alert.show("successfully login...")
    }
    else {
      alert.show("Error try agin...")
    }
    // console.log(response, "google response");
  };

  const onEmailClick = e => {
    e.preventDefault();
    setEmailClick(true);
  }

  const responseFacebook = response => {
    if (response.accessToken) {
      alert.show("successfully login...")
    }
    else {
      alert.show("Error try agin...")
    }
    // console.log(response, "facebook response");
  };

  return (
    <>
    {emailClick ?
      <>
      <TypedAccountRegisterMutation
        onCompleted={data => showSuccessNotification(data, hide, alert)}
      >
        {(registerCustomer, { loading, data }) => {
          return (
            <Form
              errors={maybe(() => data.accountRegister.errors, [])}
              onSubmit={(event, { email, password }) => {
                event.preventDefault();
                const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
                registerCustomer({ variables: { email, password, redirectUrl } });
              }}
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
              <div className="login__content__button">
                <Button type="submit" {...(loading && { disabled: true })}>
                  {loading ? "Loading" : "Register"}
                </Button>
              </div>
            </Form>
          );
        }}
      </TypedAccountRegisterMutation>
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
      </>
  );
};

export default RegisterForm;
