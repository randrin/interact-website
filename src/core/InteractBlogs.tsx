import React from "react";

const InteractBlogs = () => {
  return (
    <section className="blog-type-3 bg-light-white pt-95 pb-70">
      <div className="container">
        <div className="row align-items-end  mb-45">
          <div className="col-lg-7 col-md-12 text-center text-lg-left">
            <div className="fancy-head left-al">
              <h5 className="line-head mb-15">
                <span className="line before d-lg-none"></span>
                News & blogs
                <span className="line after"></span>
              </h5>
              <h1>Latest News & Blogs</h1>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 text-center text-lg-right">
            <a
              href="blog-listing-grid.html"
              className="btn btn-round-border mb-15 mt-md-20"
            >
              View All
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="blog-3-each mb-30 transition-4">
              <div className="blog-date text-left text-sm-center">
                <h2 className="green fs-46 f-700 mb-20">25</h2>
                <h6 className="black fs-15 f-700">MAR</h6>
              </div>
              <div className="blog-content">
                <h5 className="fs-19 f-700 mb-10">
                  <a href="blog-details-video.html">
                    Nullam porttitor nulla et risus tempor, eu aliquet dui
                    scel...
                  </a>
                </h5>
                <ul className="blog-by-detail">
                  <li>
                    <a href="#">By Admin </a>
                  </li>
                  <li>
                    <a href="#">Business </a>
                  </li>
                  <li>
                    <a href="#">11 Comments </a>
                  </li>
                </ul>
                <div className="hr-1 opacity-1 mt-10 mb-10"></div>
                <p className="mb-0">
                  Luisque dapibus lacus non pulvinar lobo rtis. Cras odio dolor,
                  pulvinar id ligula non, congue aliquam velit..{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-3-each mb-30 transition-4">
              <div className="blog-date text-left text-sm-center">
                <h2 className="green fs-46 f-700 mb-20">05</h2>
                <h6 className="black fs-15 f-700">APR</h6>
              </div>
              <div className="blog-content">
                <h5 className="fs-19 f-700 mb-10">
                  <a href="blog-details-video.html">
                    Maecenas bibendum leo a velit tristique, sed ornare ant...
                  </a>
                </h5>
                <ul className="blog-by-detail">
                  <li>
                    <a href="#">By Admin </a>
                  </li>
                  <li>
                    <a href="#">Business </a>
                  </li>
                  <li>
                    <a href="#">20 Comments </a>
                  </li>
                </ul>
                <div className="hr-1 opacity-1 mt-10 mb-10"></div>
                <p className="mb-0">
                  Luisque dapibus lacus non pulvinar lobo rtis. Cras odio dolor,
                  pulvinar id ligula non, congue aliquam velit..{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractBlogs;
