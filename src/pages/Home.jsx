import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import {
  IconArrowRight,
  IconCard,
  IconCheck,
  IconHeadset,
  IconRefresh,
  IconShield,
  IconTruck,
} from "../components/Icons";

const features = [
  {
    icon: <IconTruck size={22} />,
    title: "Free express shipping",
    text: "Order by 4pm and your new phone is on your doorstep within 24 hours — free, tracked and insured.",
  },
  {
    icon: <IconShield size={22} />,
    title: "2-year warranty",
    text: "Every phone is covered for two full years. Cracked, soaked or just unlucky? We repair or replace it.",
  },
  {
    icon: <IconRefresh size={22} />,
    title: "30-day returns",
    text: "Changed your mind? Send it back within 30 days for a full refund — no questions, no restocking fees.",
  },
  {
    icon: <IconHeadset size={22} />,
    title: "Real human support",
    text: "Our phone nerds answer in under two minutes, day or night. Chat, call or email — whatever suits you.",
  },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <>
      <Hero />

      {/* Featured phones */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Hand-picked for you</span>
              <h2 className="section-title">Featured phones</h2>
            </div>
            <Link to="/shop" className="link-arrow">
              View all phones <IconArrowRight size={16} />
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="section section-tight">
        <div className="container">
          <div className="promo">
            <div className="promo-copy">
              <span className="promo-chip">Trade-in program</span>
              <h2>
                Trade in your old phone.
                <br />
                Save up to <span className="grad-text">$400</span>.
              </h2>
              <p>
                Any brand, any condition. Get an instant quote, ship your old device for
                free, and we knock the value straight off your new phone.
              </p>
              <Link to="/shop" className="btn btn-light">
                Start trading <IconArrowRight size={16} />
              </Link>
            </div>
            <div className="promo-media">
              <img src="/images/phone-red.png" alt="Crimson smartphone available with trade-in" />
            </div>
          </div>
        </div>
      </section>

      {/* Why shop with us */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow">Why PhoneVerse</span>
            <h2 className="section-title">A better way to buy a phone</h2>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-tight">
        <div className="container">
          <div className="newsletter">
            <span className="orb orb-a" />
            <span className="orb orb-b" />
            <span className="eyebrow">Deal alerts</span>
            <h2 className="section-title">Never miss a price drop</h2>
            <p className="newsletter-sub">
              Join 40,000+ subscribers. One short email when prices fall — no spam, ever.
            </p>
            {subscribed ? (
              <p className="newsletter-success">
                <span className="check-circle">
                  <IconCheck size={16} />
                </span>
                You're in! Watch your inbox for the next drop.
              </p>
            ) : (
              <form className="newsletter-form" onSubmit={subscribe}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            )}
            <p className="newsletter-note">
              <IconCard size={14} /> Subscribers get early access to flash sales.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
