import "./scss/index.scss";

import * as React from "react";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";
// import ReactSVG from "react-svg";

import { accountConfirmUrl } from "../../../app/routes";

// import { useSocialAuth } from "@sdk/react";

// import { setAuthToken } from "@sdk/auth";

import { Button, Form, TextField } from "../..";
import { maybe } from "../../../core/utils";
import { RegisterAccount } from "./gqlTypes/RegisterAccount";
import { TypedAccountRegisterMutation } from "./queries";

import { AlertManager, useAlert } from "react-alert";

// import emailImg from "../../../images/email.svg";

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

const RegisterForm: React.FC<{ menuBack: () => void,hide: () => void }> = ({ menuBack,hide }) => {
  const alert = useAlert();
  // const [emailClick, setEmailClick] = React.useState(false);
  // const [error, setError] = React.useState("");
  // const [socialAuth] = useSocialAuth();
  // const responseGoogle = async response => {
  //   if (response.accessToken) {
  //     const authenticated = await socialAuth({ accessToken: response.accessToken, provider: "google-oauth2", email: response.profileObj.email, uid:"",authType: "REGISTER" });
  //     if (authenticated && hide && authenticated.data.socialAuth.error === null) {
  //       setAuthToken(authenticated.data.socialAuth.token);
  //       hide();
  //     }
  //     else {
  //       setError(authenticated.data.socialAuth.error.message)
  //     }
  //   }
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
  // };

  // const onEmailClick = e => {
  //   e.preventDefault();
  //   setEmailClick(true);
  // }

  // const responseFacebook = async response => {
  //   if (response.accessToken) {
  //     const authenticated = await socialAuth({ accessToken: response.accessToken, provider: "facebook", email:  "", uid:response.id,authType: "REGISTER" });
  //     if (authenticated && hide && authenticated.data.socialAuth.error === null) {
  //       setAuthToken(authenticated.data.socialAuth.token);
  //       hide();
  //     }
  //     else {
  //       setError(authenticated.data.socialAuth.error.message)
  //     }
  //   }
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
  // };

  return (
    <>
    {/* {emailClick ?
      <> */}
      <TypedAccountRegisterMutation
        onCompleted={data => showSuccessNotification(data, hide, alert)}
      >
        {(registerCustomer, { loading, data }) => {
          return (
            <>
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
                <Button type="submit" {...(loading && { disabled: true })} className="submitBtn">
                  {loading ? "Loading" : "Register"}
                </Button>
              </div>
            </Form>
            <div className="login__content__password-reminder">
              <p>
                Already have an account?&nbsp;
                <span className="u-link" onClick={()=> menuBack()}>
                  Login
                </span>
              </p>
            </div>
            </>
          );
        }}
      </TypedAccountRegisterMutation>
    {/* </>
      :
      <>
      <div className="errorMessages">{error}</div>
      <FacebookLogin
        appId="1078436535883692"
        // autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Continue with Facebook"
        // buttonText="Login"
        icon="fab fa-facebook-square"
      />
      <br /><br />
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
      <Button className="emailButton" onClick={onEmailClick}><ReactSVG path={emailImg} />Continue with Email</Button>
      </>
      } */}
    </>
  );
};

export default RegisterForm;
