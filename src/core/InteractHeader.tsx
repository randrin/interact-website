import React from "react";

const InteractHeader = () => {
  return (
    <>
      <header className="transperant-head transition-4 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-5 col-sm-4 col-5">
              <div className="logo transition-4">
                <a href="/">
                  <img
                    src="/img/logo/logo.png"
                    className="transition-4"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-7 col-sm-8 col-7">
              <div className="icon-links d-flex align-items-center">
                <a href="#" className="shop-icon d-none d-sm-block">
                  <i className="fas fa-shopping-basket"></i>
                  <span className="count">2</span>
                </a>
                <a
                  href="#"
                  className="search-icon d-none d-sm-block"
                  data-toggle="modal"
                  data-target="#searchModal"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="/contact-us"
                  className="btn btn-round d-none d-sm-block blob-small"
                >
                  CONTACT US
                </a>
              </div>
              <div className="menu-links">
                <nav className="main-menu white">
                  <ul>
                    <li className="active">
                      <a href="index-2.html">
                        Home <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="index-2.html">Home Page V1</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Page V2</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Page V3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about-us.html">
                        About Us <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="team.html" className="sub-2">
                            Our Team
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="team.html">Our Team V1</a>
                            </li>
                            <li>
                              <a href="team-2.html">Our Team V2</a>
                            </li>
                            <li>
                              <a href="team-3.html">Our Team V3</a>
                            </li>
                            <li>
                              <a href="team-detail.html">Team Single</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="clients.html">Partners</a>
                        </li>
                        <li>
                          <a href="career.html" className="sub-2">
                            Career
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="career.html">Career</a>
                            </li>
                            <li>
                              <a href="career-details.html">Career Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="services.html" className="sub-2">
                            Service
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="services.html">Service V1</a>
                            </li>
                            <li>
                              <a href="services-2.html">Service V2</a>
                            </li>
                            <li>
                              <a href="services-details.html">Service Detail</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="portfolio-grid-3.html">
                        Portfolio <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="portfolio-grid-3.html">Portfolio Col 3</a>
                        </li>
                        <li>
                          <a href="portfolio-grid-4.html">Portfolio Col 4</a>
                        </li>
                        <li>
                          <a href="portfolio-masonty.html">Portfolio Masonry</a>
                        </li>
                        <li>
                          <a href="portfolio-details.html">Portfolio Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Blog <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a
                            href="blog-listing-standared.html"
                            className="sub-2"
                          >
                            Blog Listing
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="blog-listing-standared-2.html">
                                Blog Standared{" "}
                              </a>
                            </li>
                            <li>
                              <a href="blog-listing-standared-left.html">
                                Blog Standared Sidebar Left
                              </a>
                            </li>
                            <li>
                              <a href="blog-listing-nosidebar.html">
                                Blog Standared No Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-listing-masonty.html">
                                Blog Masonry
                              </a>
                            </li>
                            <li>
                              <a href="blog-listing-grid.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog-listing-grid-sidebar.html">
                                Blog Grid Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-listing-grid-2.html">Blog Grid 2</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="blog-details-image.html" className="sub-2">
                            Blog Details
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="blog-details-image.html">
                                Blog Detail Image
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-slider.html">
                                Blog Detail Slider
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-video.html">
                                Blog Detail Video
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-no-sidebar.html">
                                Blog Detail No Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Pages <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="pricing-1.html" className="sub-2">
                            Pricing
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="pricing-1.html">Price V1</a>
                            </li>
                            <li>
                              <a href="pricing-2.html">Price V2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="signup.html">Signup</a>
                        </li>
                        <li>
                          <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="404.html">Error</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="thank-you.html">Thank You Page</a>
                        </li>
                        <li>
                          <a href="terms.html">Terms & Policy</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="search-popup modal fade"
        id="searchModal"
        role="dialog"
        aria-labelledby="searchModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form action="#">
                <div className="form-group relative">
                  <input
                    type="text"
                    className="form-control input-search"
                    id="search"
                    placeholder="Search here..."
                  />
                  <i className="fas fa-search transform-v-center"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
        <i
          className="fas fa-times close-search-modal"
          data-dismiss="modal"
          aria-label="Close"
        ></i>
      </div>
    </>
  );
};

export default InteractHeader;
