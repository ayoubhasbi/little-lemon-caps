import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container px-lg-5 py-5">
        <div className="row gy-5 gy-md-0">
          <div className="footer__img col-6 col-md-3">
            <img src={logo} style={{ width: "170px" }} />
          </div>
          <div className="navigation-item col-6 col-md-3">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservations</a>
              </li>
              <li>
                <a href="#">Order online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div className="contact col-6 col-md-3">
            <ul>
              <li>
                <a href="#">Adress</a>
              </li>
              <li>
                <a href="#">+2126***********</a>
              </li>
              <li>
                <a href="#">ayoub@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="social-media col-6 col-md-3">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
