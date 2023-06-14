import React from "react";

const InteractTestimonials = () => {
  return (
    <section
      className="testimonial-3 pt-95 pb-95"
      style={{ backgroundImage: "url('img/bg/bg-2.jpg')" }}
      data-overlay="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 z-5 text-center text-lg-left">
            <div className="fancy-head left-al">
              <h5 className="line-head mb-15">
                <span className="line before d-lg-none"></span>
                Testimonials
                <span className="line after"></span>
              </h5>
              <h1 className=" white">What Our Clients Say About Us</h1>
              <p className="white mt-10 pr-60 pr-md-00">
                Nullam porttitor nulla et risus tempor, eu aliquet dui
                scelerisque. Vestibulum quis dignissim velit, ac faucibus
                ligula. Morbi convallis arcu in lorem.
              </p>
              <div className="quote-icon relative">
                <i className="fas fa-quote-right green"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 mt-md-60">
            <div className="owl-carousel owl-theme testimonial-3-slide z-5">
              <div className="item">
                <div className="client-says text-center text-lg-left">
                  <ul className="stars-rate mb-25" data-starsactive="5">
                    <li className="text-lg-left text-center">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <h3 className="green mb-15 fs-24 f-700 italic lh-18">
                    “Best Business Service Ever”
                  </h3>
                  <p className="white mb-45 lh-20 fs-15">
                    Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                    Proin eleifend sit amet ligula et mattis. Morbi al iquam
                    vitae metus at aliquam. Etiam dui felis, tempus id ligula et
                    mattis. Morb
                  </p>
                  <div className="client-2-img d-flex align-items-center justify-content-lg-start justify-content-center">
                    <div className="img-div mr-30 pb-10">
                      <div className="client-image">
                        <img
                          src="img/testimonial/client1.jpg"
                          className=" rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="client-text-2 text-left mb-10">
                      <h6 className="client-name green fs-17 f-700">
                        John Doe
                      </h6>
                      <p className="mb-0 fs-13 f-500 white">CEO, Abc Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="client-says text-center text-lg-left">
                  <ul className="stars-rate mb-25" data-starsactive="5">
                    <li className="text-lg-left text-center">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <h3 className="green mb-15 fs-24 f-700 italic lh-18">
                    “100% Recommended”
                  </h3>
                  <p className="white fs-15 mb-45 lh-20 fs-15">
                    Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                    Proin eleifend sit amet ligula et mattis. Morbi al iquam
                    vitae metus at aliquam. Etiam dui felis, tempus id ligula et
                    mattis. Morb
                  </p>
                  <div className="client-2-img d-flex align-items-center justify-content-lg-start justify-content-center">
                    <div className="img-div mr-30 pb-10">
                      <div className="client-image">
                        <img
                          src="img/testimonial/client2.jpg"
                          className=" rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="client-text-2 text-left mb-10">
                      <h6 className="client-name green fs-17 f-700">
                        Jessica David
                      </h6>
                      <p className="mb-0 fs-13 f-500 white">CEO, Abc Company</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="client-says text-center text-lg-left">
                  <ul className="stars-rate mb-25" data-starsactive="5">
                    <li className="text-lg-left text-center">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <h3 className="green mb-15 fs-24 f-700 lh-18 italic">
                    “They re Exactly What I Had in Mind”
                  </h3>
                  <p className="white fs-15 mb-45 lh-20 fs-15">
                    Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                    Proin eleifend sit amet ligula et mattis. Morbi al iquam
                    vitae metus at aliquam. Etiam dui felis, tempus id ligula et
                    mattis. Morb
                  </p>
                  <div className="client-2-img d-flex align-items-center justify-content-lg-start justify-content-center">
                    <div className="img-div mr-30 pb-10">
                      <div className="client-image">
                        <img
                          src="img/testimonial/client3.jpg"
                          className=" rounded-circle"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="client-text-2 text-left mb-10">
                      <h6 className="client-name green fs-17 f-700">
                        Jessica David
                      </h6>
                      <p className="mb-0 fs-13 f-500 white">CEO, Abc Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractTestimonials;
