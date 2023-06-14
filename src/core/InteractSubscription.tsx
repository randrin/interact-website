import React from "react";

const InteractSubscription = () => {
  return (
    <section
      className="cta pt-60 pt-md-45 pb-60"
      style={{ backgroundImage: "url('img/bg/bg_cta.jpg')" }}
      data-overlay="9"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 mb-md-20 text-center text-lg-left">
            <h3 className="z-5 white f-700 lh-18 wow fadeInLeft">
              Subscribe Our Newsletter
            </h3>
            <p className="white z-5 wow fadeInLeft">
              Luisque dapibus lacus non pulvinar lobo.
            </p>
          </div>
          <div className="col-xl-7 col-lg-7 text-center text-lg-right z-5">
            <form
              action="#"
              className="newsform d-flex flex-column flex-sm-row z-5 wow fadeInRight"
            >
              <input
                className="form-control input-border mr-20"
                placeholder="Enter your email"
                type="email"
              />
              <a href="#" className="btn btn-square">
                subscribe
                <i className="fas fa-long-arrow-alt-right ml-15"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractSubscription;
