import React from "react";

const InteractServices = () => {
  return (
    <section
      className="service-3 pt-95"
      data-overlay="9"
      style={{ backgroundImage: "url('img/bg/bg_blgng.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="fancy-head text-center relative z-5 mb-45">
              <h5 className="line-head mb-15 ">
                <span className="line before "></span>
                Our Services
                <span className="line after"></span>
              </h5>
              <h1 className="white">What We Offer for You</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 text-center">
            <div className="service-list-3 shadow-2 transition-4 img-lined z-5">
              <div className="icon-bg-white flex-center z-10">
                <img src="img/service/2.png" className="" alt="" />
              </div>
              <div className="service-text-3 transition-4 mt-15 z-10">
                <h4 className="f-700 mb-10">Financial Planning</h4>
                <p className="mb-20">Lorem ipsum dolor sit amet, consectetur</p>
                <a
                  href="services-details.html"
                  className="btn btn-border-blue mb-30"
                >
                  Readmore<i className="fas fa-long-arrow-alt-right ml-15"></i>
                </a>
                <span className="bg-green undeline-3"></span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 text-center">
            <div className="service-list-3 shadow-2 transition-4 img-lined z-5">
              <div className="icon-bg-white flex-center z-10">
                <img src="img/service/1.png" className="" alt="" />
              </div>
              <div className="service-text-3 transition-4 mt-15 z-10">
                <h4 className="f-700 mb-10">Investment Planning</h4>
                <p className="mb-20">
                  Phasellus tristique gravida consequat Nunc{" "}
                </p>
                <a
                  href="services-details.html"
                  className="btn btn-border-blue mb-30"
                >
                  Readmore<i className="fas fa-long-arrow-alt-right ml-15"></i>
                </a>
                <span className="bg-green undeline-3"></span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 text-center">
            <div className="service-list-3 shadow-2 transition-4 img-lined z-5">
              <div className="icon-bg-white z-10 flex-center">
                <img src="img/service/3.png" className="" alt="" />
              </div>
              <div className="service-text-3 mt-15 z-10">
                <h4 className="f-700 mb-10">Business Management</h4>
                <p className="mb-20">
                  Quisque vestibulum, elit eget facilisis luctus
                </p>
                <a
                  href="services-details.html"
                  className="btn btn-border-blue mb-30"
                >
                  Readmore<i className="fas fa-long-arrow-alt-right ml-15"></i>
                </a>
                <span className="bg-green undeline-3"></span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 text-center">
            <div className="service-list-3 shadow-2 transition-4 img-lined z-5">
              <div className="icon-bg-white z-10  flex-center">
                <img src="img/service/6.png" className="" alt="" />
              </div>
              <div className="service-text-3 mt-15 z-10">
                <h4 className="f-700 mb-10">Business Consulting</h4>
                <p className="mb-20">Donec in rhoncus lorem tincidunt neque</p>
                <a
                  href="services-details.html"
                  className="btn btn-border-blue mb-30"
                >
                  Readmore<i className="fas fa-long-arrow-alt-right ml-15"></i>
                </a>
                <span className="bg-green undeline-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractServices;
