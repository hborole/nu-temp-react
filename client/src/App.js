import React from "react";

import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";

export default function App() {
  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon"> &nbsp; </span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                <span>01</span>About Nisarga Urja
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                <span>02</span>Our Benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                <span>03</span>Popular Products
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                <span>04</span>Testimonials
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                <span>05</span>Order Now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <a href="/">
            <img
              src="./img/NU Logo Transparent.png"
              alt="Logo"
              className="header__logo"
            />
          </a>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Nisarga Urja</span>
            <span className="heading-primary--sub">
              is where HEALTH happens
            </span>
          </h1>
          <div className="download-app">
            <a
              href="https://apple.co/30Hzf9c"
              className="btn btn--ios btn--white btn--animated"
            >
              <img
                className="store-icons"
                src="./img/icons8-apple-logo-90.png"
                alt="iOS Store"
              />
              Get iOS app
            </a>
            <a
              href="http://bit.ly/nisargaurja-play-store"
              className="btn bntn--android btn--white btn--animated"
            >
              <img
                className="store-icons"
                src="./img/icons8-google-play-96.png"
                alt="Play Store"
              />
              Get Android app
            </a>
          </div>
        </div>
      </header>
      <Router>
        <Switch>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <footer className="footer">
          <div className="footer__logo-box">
            <picture className="footer__logo">
              <source
                src="img/NU Logo Transparent.png"
                media="(max-width: 37.5em)"
              />
              <img
                src="img/NU Logo Transparent.png"
                alt="Full logo"
                className="footer__logo"
              />
            </picture>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      About Us
                    </a>
                  </li>
                  <li className="footer__item">
                    <Link to="/privacy" className="footer__link">
                      Privacy
                    </Link>
                  </li>
                  <li className="footer__item">
                    <a href="/" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by{" "}
                <a href="/" className="footer__link">
                  Nisarga Urja
                </a>
                . Copyright &copy;{" "}
                <a href="/" className="footer__link">
                  Nisarga Urja
                </a>
                . This application is only for commercial use only.
              </p>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}
