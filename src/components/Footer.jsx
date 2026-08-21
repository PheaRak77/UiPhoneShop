import { Link } from "react-router-dom";
import { IconBolt, IconHeadset, IconMail, IconPhone, IconPin } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo logo-light">
            <span className="logo-mark">
              <IconBolt size={18} />
            </span>
            <span>
              Phone<span className="grad-text">Verse</span>
            </span>
          </Link>
          <p>
            The friendliest phone store on the internet. Every device is hand-tested,
            covered by a 2-year warranty and shipped within 24 hours.
          </p>
          <div className="pay-chips">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PAYPAL</span>
            <span>APPLE&nbsp;PAY</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/shop">All phones</Link>
          <Link to="/shop">Flagships</Link>
          <Link to="/shop">Foldables</Link>
          <Link to="/shop">Budget picks</Link>
          <Link to="/cart">Your cart</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Trade-in program</Link>
          <Link to="/about">Careers</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>Get in touch</h4>
          <p>
            <IconPin size={16} /> 88 Circuit Avenue, Tech District, NY 10001
          </p>
          <p>
            <IconPhone size={16} /> +1 (800) 555-0142
          </p>
          <p>
            <IconMail size={16} /> hello@phoneverse.shop
          </p>
          <p>
            <IconHeadset size={16} /> Support 24/7 · Mon–Sun
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} PhoneVerse. All rights reserved.</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
