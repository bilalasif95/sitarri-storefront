import "./scss/index.scss";

import * as React from "react";
import { useAlert } from "react-alert";
import { Button, Form, TextField } from "..";
import { maybe } from "../../core/utils";

import { TypedPasswordResetMutation } from "./queries";

import { passwordResetUrl } from "../../app/routes";


const PasswordResetForm: React.FC<{ hide?: () => void }> = ({ hide }) => {
  const alert = useAlert();
  return <div className="password-reset-form">
    <p>
      Please provide us your email address so we can share you a link to reset
      your password.
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
                .then((resp: any) => {
                  if (resp.data.requestPasswordReset.errors.length === 0) {
                    hide()
                    alert.show(
                      {
                        title: "Please check your email.",
                      },
                      {
                        timeout: 5000,
                        type: "info",
                      }
                    );
                  }
                  else {
                    hide()
                    alert.show(
                      {
                        title: resp.data.requestPasswordReset.errors.message,
                      },
                      {
                        timeout: 5000,
                        type: "info",
                      }
                    );

                  }
                })
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
              <Button type="submit" {...(loading && { disabled: true })} className="submitBtn">
                {loading ? "Loading" : "Continue"}
              </Button>
            </div>
          </Form>
        );
      }}
    </TypedPasswordResetMutation>
  </div>
}
  ;

export default PasswordResetForm;
