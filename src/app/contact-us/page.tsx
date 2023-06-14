import InteractClients from "@/core/InteractClients";
import React from "react";

const InteractContactUs = () => {
  return (
    <>
      {/* immer banner start */}
      <section
        className="inner-banner pt-80 pb-95"
        style={{ backgroundImage: "url('img/banner/inner-banner.jpg')" }}
        data-overlay="7"
      >
        <div className="container">
          <div className="row z-5 align-items-center">
            <div className="col-md-8 text-center text-md-left">
              <h1 className="f-700 green">Contact Us</h1>
              <span className="green-line bg-green d-none d-md-inline-block"></span>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <nav aria-label="breadcrumb" className="banner-breadcump">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="fas fa-home fs-12 mr-5"></i>Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us area start */}
      <section className="contact-options pt-95 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="fancy-head text-left text-md-center relative z-5 mb-40 ">
                <h5 className="line-head mb-15 ">
                  <span className="line before d-none d-md-block"></span>
                  Contact us
                  <span className="line after"></span>
                </h5>
                <h1 className="">Contact Details</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex mb-sm-30">
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <i className="fas fa-phone-volume green"></i>
                  </div>
                </div>
                <div className="icon-box-content">
                  <h5 className="f-700 fs-19 mb-10">Phone</h5>
                  <p>Phone: (+123) 456-789</p>
                  <p>Mob: (+123) 987-654</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-flex">
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <i className="far fa-envelope green"></i>
                  </div>
                </div>
                <div className="icon-box-content">
                  <h5 className="f-700 fs-19 mb-10">Email</h5>
                  <p>Info@example.com</p>
                  <p>suspport@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-flex  mt-md-30">
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <i className="fas fa-map-marker-alt green"></i>
                  </div>
                </div>
                <div className="icon-box-content">
                  <h5 className="f-700 fs-19 mb-10">Address</h5>
                  <p>4221 Melrose Street, Yakima, Washington</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us area end */}

      {/* Contact form area end */}
      <section
        className="contact-form  bg-light-white pt-100 pb-100"
        style={{ backgroundImage: "url('img/bg/bg-abt.jpg')" }}
        data-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="fancy-head text-center relative z-5 mb-40">
                <h5 className="line-head mb-15 ">
                  <span className="line before "></span>
                  Send us a message
                  <span className="line after"></span>
                </h5>
                <h1 className="mb-5">Get in Touch with Us</h1>
                <p className="small-p">
                  Pellentesque tempor ornare mal esuada. Mauris vel metus vel
                  urna interdum
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form action="#" className="relative z-5 mt-10">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group relative mb-30 mb-sm-20">
                      <input
                        type="text"
                        className="form-control input-lg input-white shadow-5"
                        id="name"
                        placeholder="Name"
                      />
                      <i className="far fa-user transform-v-center"></i>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group relative mb-30 mb-sm-20">
                      <input
                        type="email"
                        className="form-control input-lg input-white shadow-5"
                        id="email"
                        placeholder="Email"
                      />
                      <i className="far fa-envelope transform-v-center"></i>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group relative mb-30 mb-sm-20">
                      <input
                        type="text"
                        className="form-control input-lg input-white shadow-5"
                        id="phone"
                        placeholder="Phone number"
                      />
                      <i className="fas fa-mobile-alt transform-v-center"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group relative mb-30 mb-sm-20">
                      <textarea
                        className="form-control input-white shadow-5"
                        name="message"
                        id="message"
                        cols={30}
                        rows={7}
                        placeholder="Your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center mt-30">
                    <a href="#" className="btn btn-square  blob-small">
                      SUBMIT
                      <i className="fas fa-long-arrow-alt-right ml-20"></i>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact form area end */}

      {/* Experience Cta start */}
      <section
        className="experience-cta pt-100 pb-100"
        style={{ backgroundImage: "url('img/bg/bg-2.jpg')" }}
        data-overlay="9"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 z-5 text-center text-lg-left">
              <div className="exp-cta pr-50 pr-lg-00">
                <h1 className="white f-700 mb-10">
                  <span className="green">25 Years</span> of Experience in the{" "}
                  <span className="green">Industry</span>
                </h1>
                <p className="white mb-55 mb-md-30 pr-60 pr-md-00">
                  Quisque enim ipsum, commodo et venenatis rutrum, luctus in
                  enim. Quisque dapibus
                </p>
                <a href="#" className="btn btn-square ">
                  Our Services
                  <i className="fas fa-long-arrow-alt-right ml-20"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-md-60">
              <div className="row no-gutters">
                <div className="col-sm-6 text-center">
                  <div className="each-count-up shade z-5">
                    <h2 className="fs-40 f-900 green mb-20 mt-5">
                      <span className="counter">3000</span>+
                    </h2>
                    <p className="uppercase white mb-0">Satisfied Customers</p>
                  </div>
                </div>
                <div className="col-sm-6 text-center">
                  <div className="each-count-up z-5">
                    <h2 className="fs-40 f-900 green mb-20 mt-5">
                      <span className="counter">250</span>+
                    </h2>
                    <p className="uppercase white mb-0">Awards Winner</p>
                  </div>
                </div>
                <div className="col-sm-6 text-center">
                  <div className="each-count-up z-5">
                    <h2 className="fs-40 f-900 green mb-20 mt-5">
                      <span className="counter">350</span>+
                    </h2>
                    <p className="uppercase white mb-0">Professionals</p>
                  </div>
                </div>
                <div className="col-sm-6 text-center">
                  <div className="each-count-up z-5 shade">
                    <h2 className="fs-40 f-900 green mb-20 mt-5">
                      <span className="counter">5300</span>+
                    </h2>
                    <p className="uppercase white mb-0">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Cta end */}

      {/* Client logos area start */}
      <InteractClients />
      {/* Client logos area end */}

      {/* cta area start */}
      <section
        className="cta pt-50 pb-50"
        style={{ backgroundImage: "url('img/bg/bg_cta.jpg')" }}
        data-overlay="9"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 mb-md-20 text-center text-lg-left">
              <h3 className="z-5 white f-700 lh-18 wow fadeInLeft">
                What type of challenge are you facing?
                <span className="green italic">Let’s talk</span>
              </h3>
            </div>
            <div className="col-xl-8 col-lg-7 text-center text-lg-right z-5">
              <a
                href="#"
                className="btn btn-square-white mr-20 mr-xs-00 d-block d-sm-inline-block mb-xs-15 wow fadeInUp"
              >
                <i className="fas fa-envelope mr-15"></i>info@example.com
              </a>
              <a
                href="tel:1234567890"
                className="btn btn-square-green d-block d-sm-inline-block blob-small wow fadeInUp"
              >
                <i className="fas fa-phone mr-15"></i>+1 234 567 890
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* cta area end */}
    </>
  );
};

export default InteractContactUs;
