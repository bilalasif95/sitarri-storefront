import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";

import { NavLink,OverlayContext,OverlayTheme,
  OverlayType,SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
// import Nav from "./Nav";

import { TypedSecondaryMenuQuery } from "./queries";

import * as appPaths from "../../app/routes";

import logoImg from "../../images/logo.jpg";

const Footer: React.FC = () => (
  <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <div className="footer" id="footer">
            <div className="container">
              <div className="footer-list">
                <div className="footer-item">
                  <div>
                    <Link to={appPaths.baseUrl}>
                      <img src={logoImg} />
                    </Link>
                  </div>
                </div>
                <div className="footer-item">
                  <div>
                    <h4>About Us</h4>
                    <ul className="quick-links">
                      <li>Add Your Business</li>
                      <li>Business Resource Center</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
                <div className="footer-item">
                  <h4>Get Help</h4>
                  <ul className="quick-links">
                    <li onClick={() =>
                                overlayContext.show(
                                  OverlayType.register,
                                  OverlayTheme.right
                                )
                              }>Sign Up</li>
                    <li onClick={() =>
                                overlayContext.show(
                                  OverlayType.login,
                                  OverlayTheme.right
                                )
                              }>Sign In</li>
                  </ul>
                </div>
              </div>
              <div className="footer__favicons">
                <div className="social-media">
                  {SOCIAL_MEDIA.map(medium => (
                    <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
                  ))}
                </div>
                <div className="dynamicPages">
                  <ul className="quick-links pages">
                    <TypedSecondaryMenuQuery>
                      {({ data }) => {
                        return data.shop.navigation.secondary.items.map(item => (
                          <>
                            <li key={item.id}><NavLink item={item}></NavLink></li>
                          </>
                        ));
                      }}
                    </TypedSecondaryMenuQuery>
                  </ul>
                  <p>© 2020 Sitari Technologies Inc.</p>
                </div>
              </div>
            </div>
            {/* <div className="footer__favicons container">
              {SOCIAL_MEDIA.map(medium => (
                <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
              ))}
            </div>
            <Nav /> */}
          </div>
        </>
      )}
  </OverlayContext.Consumer>
);

export default Footer;
