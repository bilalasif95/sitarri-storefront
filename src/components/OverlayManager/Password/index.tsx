import "./scss/index.scss";

import * as React from "react";

import ReactSVG from "react-svg";

import { Link } from "react-router-dom";

import {
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
  PasswordResetForm
} from "../..";

import logoIcon from "../../../images/logo.jpg";

import closeImg from "../../../images/x.svg";

const Password: React.FC<{ overlay: OverlayContextInterface }> = ({
  overlay,
}) => (
    <Overlay context={overlay}>
      <div className="password-reset">
        <Online>
          <div className="overlay__header">
            <Link to="/">
              <img src={logoIcon} />
            </Link>
            {/* <p className="overlay__header-text">logo</p> */}
            <ReactSVG
              path={closeImg}
              onClick={overlay.hide}
              className="overlay__header__close-icon"
            />
          </div>
          <div className="password-reset__content">
            <PasswordResetForm hide={overlay.hide} />
          </div>
        </Online>
        <Offline>
          <OfflinePlaceholder />
        </Offline>
      </div>
    </Overlay>
  );

export default Password;
