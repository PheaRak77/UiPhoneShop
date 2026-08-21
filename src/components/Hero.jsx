import { Link } from "react-router-dom";
import { IconArrowRight, IconBolt, IconStar } from "./Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">
            <IconBolt size={14} /> New drop — Nova X15 Pro now in stock
          </span>
          <h1>
            Next-gen phones.
            <br />
            <span className="grad-text">Down-to-earth prices.</span>
          </h1>
          <p className="hero-sub">
            Flagship power, gorgeous displays and cameras that never miss — hand-picked,
            tested and delivered to your door within 24 hours. Upgrade season starts here.
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop now <IconArrowRight size={18} />
            </Link>
            <Link to="/shop" className="btn btn-ghost btn-lg">
              View deals
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>120+</strong>
              <span>Phone models</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Express delivery</span>
            </div>
            <div>
              <strong>2 years</strong>
              <span>Warranty included</span>
            </div>
          </div>
        </div>

        <div className="hero-showcase">
          <img
            src="/images/hero-phone.png"
            alt="Nova X15 Pro flagship smartphone with gradient display"
            className="hero-img"
          />
          <div className="floating-card fc-rating">
            <span className="fc-icon">
              <IconStar size={16} />
            </span>
            <span className="fc-col">
              <strong>4.9/5</strong>
              <small>2,314 reviews</small>
            </span>
          </div>
          <div className="floating-card fc-price">
            <span className="fc-col">
              <small>Nova X15 Pro</small>
              <strong>
                $1,199 <s>$1,299</s>
              </strong>
            </span>
          </div>
          <span className="floating-chip chip-5g">5G</span>
        </div>
      </div>

      <div className="brand-strip">
        <div className="container brands">
          <span>APPLE</span>
          <span>SAMSUNG</span>
          <span>GOOGLE</span>
          <span>XIAOMI</span>
          <span>ONEPLUS</span>
          <span>SONY</span>
          <span>HONOR</span>
          <span>NOTHING</span>
        </div>
      </div>
    </section>
  );
}
