import React from "react";

const InteractRequestCall = () => {
  return (
    <section
      className="callback-area pt-95 pb-85"
      style={{ backgroundImage: "url('img/banner/banner_1.jpg')" }}
      data-overlay="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="fancy-head text-center relative z-5 mb-40 wow fadeInDown">
              <h5 className="line-head mb-15 white">
                <span className="line before bg-white"></span>
                Contact Us
                <span className="line after bg-white"></span>
              </h5>
              <h1 className="white">Request a Call Back</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <form action="#" className="relative z-5  wow fadeInUp">
              <div className="row">
                <div className="col-xl-10 col-lg-12">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group relative">
                        <input
                          type="text"
                          className="form-control input-white shadow-2"
                          id="name"
                          placeholder="Name"
                        />
                        <i className="far fa-user transform-v-center"></i>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group relative">
                        <input
                          type="email"
                          className="form-control input-white shadow-2"
                          id="email"
                          placeholder="Email"
                        />
                        <i className="far fa-envelope transform-v-center"></i>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group relative">
                        <input
                          type="text"
                          className="form-control input-white shadow-2"
                          id="phone"
                          placeholder="Phone number"
                        />
                        <i className="fas fa-mobile-alt transform-v-center"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-12">
                  <button className="btn btn-blue btn-block request-btn uppercase shadow-2">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractRequestCall;
