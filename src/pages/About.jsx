import { Link } from "react-router-dom";
import { IconArrowRight, IconBolt, IconCard, IconHeadset, IconPin, IconShield } from "../components/Icons";

const stats = [
  { value: "2019", label: "Founded in a garage" },
  { value: "240k+", label: "Phones delivered" },
  { value: "4.9/5", label: "Average rating" },
  { value: "98%", label: "Orders in under 24h" },
];

const values = [
  {
    icon: <IconBolt size={22} />,
    title: "Obsessed with devices",
    text: "We test every phone we sell for two weeks — battery drain, camera walkabouts, drop tests. If it doesn't impress us, it doesn't go on the shelf.",
  },
  {
    icon: <IconShield size={22} />,
    title: "Honest pricing",
    text: "The price you see is the price you pay. No activation fees, no fake 'was $2000' strikethroughs, no fine print gymnastics.",
  },
  {
    icon: <IconHeadset size={22} />,
    title: "Humans, not bots",
    text: "Our support team are the same people who unbox and test the phones. Ask them anything — including which phone NOT to buy.",
  },
];

export default function About() {
  return (
    <div className="container page">
      <div className="page-head page-head-center">
        <span className="eyebrow">Our story</span>
        <h1>
          We started PhoneVerse because buying a phone
          <span className="grad-text"> felt like a chore.</span>
        </h1>
        <p className="page-sub">
          Confusing contracts, pushy sales floors, prices that change at checkout. We built
          the store we always wanted: pick a phone, pay a fair price, get it tomorrow.
        </p>
      </div>

      <div className="stats-band">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="feature-grid">
        {values.map((v) => (
          <div className="feature-card" key={v.title}>
            <span className="feature-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>

      <div className="visit-card">
        <div className="visit-copy">
          <span className="eyebrow">Come say hi</span>
          <h2 className="section-title">Visit our flagship store</h2>
          <p>
            Try every phone side by side, trade in your old device on the spot, and grab a
            coffee while we transfer your data — free with any visit.
          </p>
          <p className="visit-address">
            <IconPin size={18} /> 88 Circuit Avenue, Tech District, New York · Open daily 9am–9pm
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn btn-primary">
              Shop online instead <IconArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <IconCard size={16} /> Book an appointment
            </Link>
          </div>
        </div>
        <div className="visit-media">
          <img src="/images/phone-fold.png" alt="Foldable smartphone on display in our store" />
        </div>
      </div>
    </div>
  );
}
