import React from "react";

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop: "100px"}}>
      <div className="footer-container">
        <span>
          <b>Fisk University</b>
        </span>
        <p className="footer-description">
        Fisk University is ranked #6 among historically black universities, according to U.S. News and World Report, and is the oldest institution of higher learning in Nashville, Tennessee. Fisk’s outstanding faculty and students continue to enhance the University’s international reputation for academic excellence. Our scholars continue to make strides in all areas of the industry from Social Justice to the sciences. A Fisk education prepares our students to become beacons in servicing the community and well-rounded leaders and scholars in their respective fields. Fisk offers more than 20+ undergraduate and graduate programs in Biology, Chemistry, Physics, Clinical Psychology with a bridge Masters to Ph.D. programs through a partnership with Vanderbilt University.
        </p>
      </div>
      <div className="footer-container">
        <span>
          <b>About Us</b>
        </span>
        <p className="footer-description">Careers</p>
		<p className="footer-description">Our Team</p>
		<p className="footer-description">Our Partners</p>
		<p className="footer-description">Join Us</p>
		<p className="footer-description">Our Mission</p>
    <p className="footer-description">Research</p>
      </div>
      <div className="footer-container">
        <span>
          <b>Contact Us</b>
        </span>
        <p className="footer-description">
        222 W.E.B. DuBois Hall
        </p>
		<p className="footer-description">Fisk University</p>
		<p className="footer-description">1000 17th Avenue N </p>
		<p className="footer-description">Nashville, TN ,37208</p>
		<p className="footer-description">Phone: 615-329-8804</p>
		<p className="footer-description">Fax: 615-329-8804</p>
      </div>
    </footer>
  );
};

export default Footer;
