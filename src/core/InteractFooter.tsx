import React from "react";

const InteractFooter = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row mb-sm-50 mb-xs-00">
          <div className="col-lg-4 z-5">
            <div className="contact-area relative h-100 mr-lg-20 mr-md-00">
              <div className="footer-logo mb-35">
                <img
                  src="/img/logo/logo_footer.png"
                  alt="Interact Logo"
                />
              </div>
              <div className="contact-options mb-35">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt green"></i>4221 Melrose
                    Street,Yakima, Washington
                  </li>
                  <li>
                    <i className="fas fa-phone green"></i>(1) 234 456 89
                  </li>
                  <li>
                    <i className="fas fa-envelope green"></i>info@example.com
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4">
            <div className="footer-links pt-85 pt-md-50 mb-sm-70">
              <h5 className="green f-700 mb-35">Quick Links</h5>
              <ul className="links-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4">
            <div className="footer-links pt-85 pt-md-50 mb-sm-70">
              <h5 className="green f-700 mb-35">Our Services</h5>
              <ul className="links-list">
                <li>
                  <a href="#">Investment planning</a>
                </li>
                <li>
                  <a href="#">Financial Planning</a>
                </li>
                <li>
                  <a href="#">Business Management</a>
                </li>
                <li>
                  <a href="#">Mutual Funds</a>
                </li>
                <li>
                  <a href="#">Markets Research</a>
                </li>
                <li>
                  <a href="#">Business Consulting</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footer-links pt-85 pt-md-50 mb-50">
              <h5 className="green f-700 mb-35">Need Help?</h5>
              <ul className="links-list">
                <li>
                  <a href="#">FAQS</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Get a Quote</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="copyright pt-25 pb-25">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <p className="mb-0 white">
                © Copyrights 2019 Bizz All rights reserved
              </p>
            </div>
            <div className="col-xl-4 text-right">
              <a
                href="#"
                className="btn scroll-btn f-right flex-center z-25 opacity-0"
              >
                <i className="fas fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default InteractFooter;
