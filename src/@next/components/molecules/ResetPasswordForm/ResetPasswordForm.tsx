import React from "react";
import ReactSVG from "react-svg";

import { Button } from "@components/atoms";
import { TextField } from "../TextField";

import * as S from "./styles";
import { IProps } from "./types";

import removeImg from "../../../../images/pass-invisible.svg";
import removeImgg from "../../../../images/pass-visible.svg";

export const ResetPasswordForm: React.FC<IProps> = ({
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  tokenError,
  passwordError,
  errors,
}: IProps) => {
  const [passwordType, setPasswordType] = React.useState(true);
  const [confirmPasswordType, setConfirmPasswordType] = React.useState(true);
  const onPasswordEyeIconClick = () => {
    if (passwordType) {
      return setPasswordType(false);
    }
    setPasswordType(true);
  };
  const onConfirmPasswordEyeIconClick = () => {
    if (confirmPasswordType) {
      return setConfirmPasswordType(false);
    }
    setConfirmPasswordType(true);
  };
  return (
    <S.Wrapper>
      <h3>Reset your password</h3>

      <p>Your password must be at least 8 characters long.</p>
      <p>Don't use a password you've used before.</p>
      <br/>
      {tokenError && (
        <S.GeneralError>
          It seems that token for password reset is not valid anymore.
        </S.GeneralError>
      )}
      <form onSubmit={handleSubmit}>
        <S.InputFields>
          {passwordType ? (
            <>
              <TextField
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                errors={
                  errors.password || passwordError
                    ? [
                      {
                        field: "password",
                        message: errors.password || passwordError,
                      },
                    ]
                    : undefined
                }
              />
              <ReactSVG
                path={removeImg}
                className="passwordEye"
                onClick={onPasswordEyeIconClick}
              />
            </>
          ) : (
              <>
                <TextField
                  label="Password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.password}
                  errors={
                    errors.password || passwordError
                      ? [
                        {
                          field: "password",
                          message: errors.password || passwordError,
                        },
                      ]
                      : undefined
                  }
                />
                <ReactSVG
                  path={removeImgg}
                  className="passwordEye"
                  onClick={onPasswordEyeIconClick}
                />
              </>
            )}
        </S.InputFields>
        <S.InputFields>
          {confirmPasswordType ? (
            <>
              <TextField
                label="Retype password"
                onBlur={handleBlur}
                name="retypedPassword"
                onChange={handleChange}
                type="password"
                value={values.retypedPassword}
                errors={
                  errors.retypedPassword
                    ? [
                      {
                        field: "retypedPassword",
                        message: errors.retypedPassword,
                      },
                    ]
                    : undefined
                }
              />
              <ReactSVG
                path={removeImg}
                className="passwordEye"
                onClick={onConfirmPasswordEyeIconClick}
              />
            </>
          ) : (
              <>
                <TextField
                  label="Retype password"
                  onBlur={handleBlur}
                  name="retypedPassword"
                  onChange={handleChange}
                  type="text"
                  value={values.retypedPassword}
                  errors={
                    errors.retypedPassword
                      ? [
                        {
                          field: "retypedPassword",
                          message: errors.retypedPassword,
                        },
                      ]
                      : undefined
                  }
                />
                <ReactSVG
                  path={removeImgg}
                  className="passwordEye"
                  onClick={onConfirmPasswordEyeIconClick}
                />
              </>
            )}
        </S.InputFields>
        <S.Btn>
          <Button type="submit" fullWidth={true}>
            Confirm New Password
        </Button>
        </S.Btn>
      </form>
    </S.Wrapper>
  );
};
