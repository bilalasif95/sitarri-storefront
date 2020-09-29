import "../globalStyles/scss/index.scss";

import React from "react";
import CookieBanner, { Cookies } from "react-cookie-banner";
import { Link } from "react-router-dom";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { generatePageUrl } from "../core/utils";
import cookieImage from "../images/cookie.png";
import { Routes } from "./routes";

const App: React.FC = () => {
  const styles = {
    banner: {
      alignItems: 'center',
      background: `rgba(52, 64, 81, 0.88) url(${cookieImage}) 20px 50% no-repeat`,
      backgroundColor: '',
      backgroundSize: '30px 30px',
      bottom: 0,
      display: 'flex',
      fontFamily: 'Source Sans Pro',
      fontSize: '15px',
      fontWeight: 600,
      height: 57,
      left: 0,
      position: 'fixed',
      width: '100%',
      zIndex: 999,
    },
    button: {
      background: 'transparent',
      border: '1px solid white',
      borderRadius: 4,
      color: 'white',
      fontSize: '14px',
      fontWeight: 600,
      height: 32,
      lineHeight: '32px',
      marginTop: -18,
      opacity: 1,
      right: 20,
      width: 66,
    },
    link: {
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    message: {
      color: 'white',
      display: 'block',
      lineHeight: 1.3,
      marginRight: 244,
      padding: '9px 67px',
      textAlign: 'left',
    },
  }
  const [state, setState] = React.useState({
    accepted: false,
  });
  const cookies = new Cookies();

  React.useEffect(() => {
    return !state.accepted && cookies.get('accepts-cookies') && cookies.remove('accepts-cookies');
  },[])
  
  const message = "By using our website you agree to our";
  return (
    <>
      <MetaConsumer />
      <header>
        <MainMenu />
      </header>
      <Routes />
      <Footer />
      <CookieBanner
        buttonMessage='Close'
        dismissOnScroll={false}
        dismissOnClick={false}
        link={<Link to={generatePageUrl("cookie-policy")}>Cookie policy</Link>}
        message={message}
        onAccept={() => setState({ accepted: true })}
        styles={styles}
      />
      <OverlayManager />
    </>
  );
};

export default App;
