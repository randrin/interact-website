import React from "react";

const InteractClients = () => {
  return (
    <section className="client-list bg-light-white pt-100 pb-70">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-xl-5 text-center text-lg-left">
            <div className="clients-left-part">
              <div className="fancy-head left-al">
                <h5 className="line-head mb-15">
                  <span className="line before d-lg-none"></span>
                  Our Clients
                  <span className="line after"></span>
                </h5>
                <h1 className="mb-15">Trusted by World’s Biggest Brands</h1>
              </div>
              <p className="mb-35 pr-45 pr-md-00">
                Quisque enim ipsum, commodo et venenatis rutrum, luctus in enim.
                Quisque dapibus lacus non pulvinar lobortis. Cras odio dolor.
              </p>
              <a href="clients.html" className="btn btn-square">
                View all<i className="fas fa-long-arrow-alt-right ml-20"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-md-60 offset-xl-1 offset-lg-0">
            <div className="row">
              <div className="col-sm-6">
                <div className="each-logo flex-center transition-4 mb-30">
                  <img src="img/clients/1_blk.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="each-logo flex-center transition-4 mb-30">
                  <img src="img/clients/2_blk.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="each-logo flex-center transition-4 mb-30">
                  <img src="img/clients/3_blk.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="each-logo flex-center transition-4 mb-30">
                  <img src="img/clients/4_blk.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="each-logo flex-center transition-4 mb-30">
                  <img src="img/clients/5_blk.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="each-logo flex-center transition-4 mb-30">
                  <img src="img/clients/6_blk.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractClients;
