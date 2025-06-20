import "./scss/index.scss";

import * as React from "react";



import { Link } from "react-router-dom";
import ReactSVG from "react-svg";


import {
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
  // OverlayTheme,
  // OverlayType
} from "../..";

import logoIcon from "../../../images/sittari.svg";
import RegisterForm from "./RegisterForm";


import closeImg from "../../../images/x.svg";
// import ForgottenPassword from "./ForgottenPassword";

class Login extends React.Component<
  { overlay: OverlayContextInterface; active?: "login" | "register" },
  { active: "login" | "register" }
> {
  static defaultProps = {
    active: "login",
  };
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  changeActiveTab = (active: "login" | "register") => {
    this.setState({ active });
  };

  render() {
    const { overlay } = this.props;
    const { show, hide } = overlay;

    return (
      <Overlay context={overlay}>
        <div className="login">
          <Online>
            <div className="overlay__header">
              <Link to="/">
                <ReactSVG
                  path={logoIcon}
                />
                {/* <img src={logoIcon} /> */}
              </Link>
              {/* <p className="overlay__header-text">logo</p> */}
              <ReactSVG
                path={closeImg}
                onClick={hide}
                className="overlay__header__close-icon"
              />
            </div>
            {/* <div className="login__tabs">
              <span
                onClick={() => this.changeActiveTab("login")}
                className={this.state.active === "login" ? "active-tab" : ""}
              >
                Sign in
              </span>
              <span
                onClick={() => this.changeActiveTab("register")}
                className={this.state.active === "register" ? "active-tab" : ""}
              >
                Register
              </span>
            </div> */}
            <div className="login__content">
              {this.state.active === "login" ? (
                <>
                  <LoginForm hide={hide} show={show} />
                  {/* <ForgottenPassword
                    onClick={() => {
                      show(OverlayType.password, OverlayTheme.right);
                    }}
                  /> */}
                </>
              ) : (
                <RegisterForm hide={hide} menuBack={()=> null} />
              )}
            </div>
          </Online>
          <Offline>
            <OfflinePlaceholder />
          </Offline>
        </div>
      </Overlay>
    );
  }
}

export default Login;
