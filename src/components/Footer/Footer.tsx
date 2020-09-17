import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { NavLink,OverlayContext,SocialMediaIcon } from "..";
import { ADMIN_PANEL_LINK,SOCIAL_MEDIA } from "../../core/config";
// import Nav from "./Nav";

import { TypedSecondaryMenuQuery } from "./queries";

import * as appPaths from "../../app/routes";

import logoImg from "../../images/SitarriWhiteLogo.svg";

const Footer: React.FC = () => (
  <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <div className="footer" id="footer">
            <div className="container">
              <div className="footer-list">
                <div className="sideLeft">
                  <div>
                    <Link to={appPaths.baseUrl}>
                      <ReactSVG path={logoImg} />
                    </Link>
                  </div>
                </div>
                <div className="sideRight">
                <div className="footer-item">
                  <div>
                    <h4>About Us</h4>
                    <ul className="quick-links">
                      <li onClick={() => window.open(ADMIN_PANEL_LINK)}>Add Your Business</li>
                      <Link to={appPaths.businessResourceCenterUrl}><li>Business Resource Center</li></Link>
                      <Link to={appPaths.contactUsUrl}><li>Contact Us</li></Link>
                    </ul>
                  </div>
                </div>
                <div className="footer-item">
                  <h4>Get Help</h4>
                  <ul className="quick-links">
                    <li onClick={() => window.open(ADMIN_PANEL_LINK)}>Sign Up</li>
                    <li onClick={() => window.open(ADMIN_PANEL_LINK)}>Sign In</li>
                  </ul>
                </div>
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
                  <p>© 2020 Sitarri Technologies Inc.</p>
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
