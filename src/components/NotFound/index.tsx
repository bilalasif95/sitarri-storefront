import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../core/config";
import Button from "../Button";

import PageNotImage from "../../images/404Image.svg"

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = () => (
  <div className="not-found-page">
    <h2 className="not-found-page__header">
      <img src={PageNotImage} alt="Page not found"/>
    </h2>
    <div className="not-found-page__ruler" />
    <div className="not-found-page__message">
      <b>Oops. We can't seem to find the page you are looking for</b>
      <p>This page may have moved or does not exist. </p>
    </div>
    <div className="not-found-page__button">
      <Link to={BASE_URL}>
        <Button secondary>Back to home</Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
