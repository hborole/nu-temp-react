/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Health and Hygiene for all</h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Your Going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam animi architecto culpa delectus dolorem eaque ex hic,
                illo inventore iusto optio quam quas qui recusandae suscipit
                temporibus veritatis voluptatibus? Sit.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam animi architecto culpa delectus dolorem eaque ex hic.
              </p>

              <a href="/" className="btn-text">
                Learn More &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src="img/nat-1.jpg"
                  srcSet="img/nat-1.jpg 300w, img/nat-1.jpg 1000w"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                />

                <img
                  srcSet="img/nat-2.jpg 300w, img/nat-2.jpg 1000w"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                />

                <img
                  srcSet="img/nat-3.jpg 300w, img/nat-3.jpg 1000w"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam animi architecto.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam animi architecto.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam animi architecto.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam animi architecto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Popular Categories</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Fruits
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Banana</li>
                      <li>Elaichi Banana</li>
                      <li>Amla</li>
                      <li>Imported Apple</li>
                      <li>& More...</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back--1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="/" className="btn btn--white">
                      Order now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      Vegetables
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Beetroot</li>
                      <li>Carrot</li>
                      <li>Garlic</li>
                      <li>Capsicum</li>
                      <li>& More...</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back--2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$497</p>
                    </div>
                    <a href="/" className="btn btn--white">
                      Order now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Exotic Vegetables
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Babycorn</li>
                      <li>Broccoli</li>
                      <li>Bell Peppers</li>
                      <li>Cherry Tomatoes</li>
                      <li>& More...</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back--3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$897</p>
                    </div>
                    <a href="/" className="btn btn--white">
                      Order now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--4">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Peeled Vegetables
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Fresh Grated Coconut</li>
                      <li>Green Peas Peeled</li>
                      <li>Garlic Peeled</li>
                      <li>Pavata Peeled</li>
                      <li>& More...</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back--1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="/" className="btn btn--white">
                      Order now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--5">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      Bakery
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Almond Coffee Tea Cake</li>
                      <li>Blueberry Tea Cake</li>
                      <li>Multigrain Bread</li>
                      <li>Ladi Pav</li>
                      <li>& More...</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back--2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$497</p>
                    </div>
                    <a href="/" className="btn btn--white">
                      Order now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--6">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Organic Products
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Organic Besan</li>
                      <li>Organic Chana Dal</li>
                      <li>Organic Green Whole Moong</li>
                      <li>Organic Honey</li>
                      <li>& More...</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back--3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$897</p>
                    </div>
                    <a href="/" className="btn btn--white">
                      Order now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="https://apple.co/30Hzf9c" className="btn btn--green">
              Discover More &rarr;
            </a>
          </div>
        </section>

        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="img/video.mp4" type="video/mp4" />
              <source src="img/video.webm" type="video/webm" />
              Your browser is not supported :(
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="img/icons8-man.png"
                  alt="Person on a tour"
                  className="story__image"
                />
                <figcaption className="story__caption">Testimonial</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="img/icons8-man.png"
                  alt="Person on a tour"
                  className="story__image"
                />
                <figcaption className="story__caption">Testimonial</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore.
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="/" className="btn-text">
              Read more stories &rarr;
            </a>
          </div>
        </section>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <div className="u-margin-bottom-med">
                  <h2 className="heading-secondary">
                    Download App and Order Today!
                  </h2>
                </div>
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
                <br />
                <br />
                <a
                  href="http://bit.ly/nisargaurja-play-store"
                  className="btn btn--ios btn--white btn--animated"
                >
                  <img
                    className="store-icons"
                    src="./img/icons8-google-play-96.png"
                    alt="Android Store"
                  />
                  Get Android app
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
