import "./scss/index.scss";

import * as React from "react";
import { withRouter } from "react-router-dom";

import { Button, Form, TextField } from "..";
import { maybe } from "../../core/utils";
import { TypedPasswordResetMutation } from "./queries";

import { passwordResetUrl } from "../../app/routes";

const PasswordResetForm: React.FC = (props) => (
  <div className="password-reset-form">
    <p>
      Please provide us your email address so we can share you a link to reset
      your password
    </p>
    <TypedPasswordResetMutation>
      {(passwordReset, { loading, data }) => {

        return (
          <Form
            errors={maybe(() => data.requestPasswordReset.errors, [])}
            onSubmit={(event, { email }) => {
              event.preventDefault();
              passwordReset({
                variables: {
                  email,
                  redirectUrl: `${window.location.origin}${passwordResetUrl}`,
                },
              })
              
              // .then((resp) => {
              //   console.log("rpooooooooooooooooo", resp, "error length", resp.data.requestPasswordReset.errors.length)
              //   setTimeout(() => {
              //     if (resp.data.requestPasswordReset.errors.length === 0) {
              //       console.log("histroy before", props)
              //       props.history.push("/checkout")
              //       console.log("updat histero", props)
              //     }
              //   }, 2000)

              // })


            }}
          >
            <TextField
              name="email"
              autoComplete="email"
              label="Email Address"
              type="email"
              required
            />
            <div className="password-reset-form__button">
              <Button type="submit" {...(loading && { disabled: true })}>
                {loading ? "Loading" : "Reset password"}
              </Button>
            </div>
          </Form>
        );
      }}
    </TypedPasswordResetMutation>
  </div>
);

export default withRouter(PasswordResetForm);
