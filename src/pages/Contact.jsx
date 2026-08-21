import { useState } from "react";
import { IconCheck, IconHeadset, IconMail, IconPhone, IconPin } from "../components/Icons";

const channels = [
  {
    icon: <IconPhone size={20} />,
    title: "Call us",
    lines: ["+1 (800) 555-0142", "Mon–Sun, 8am–11pm EST"],
  },
  {
    icon: <IconMail size={20} />,
    title: "Email us",
    lines: ["hello@phoneverse.shop", "We reply within 4 hours"],
  },
  {
    icon: <IconPin size={20} />,
    title: "Visit us",
    lines: ["88 Circuit Avenue, Tech District", "New York, NY 10001"],
  },
  {
    icon: <IconHeadset size={20} />,
    title: "Live chat",
    lines: ["Bottom-right bubble on any page", "Average wait: under 2 minutes"],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Order help", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container page">
      <div className="page-head page-head-center">
        <span className="eyebrow">We're here to help</span>
        <h1>Talk to a real human</h1>
        <p className="page-sub">
          Questions about an order, a trade-in, or which phone fits your life? Reach out —
          no bots, no phone trees.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-channels">
          {channels.map((c) => (
            <div className="feature-card channel-card" key={c.title}>
              <span className="feature-icon">{c.icon}</span>
              <div>
                <h3>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form-card">
          {sent ? (
            <div className="order-success">
              <span className="success-circle">
                <IconCheck size={28} />
              </span>
              <h2>Message sent!</h2>
              <p>
                Thanks, {form.name.split(" ")[0] || "friend"} — we'll get back to you at{" "}
                <strong>{form.email}</strong> within 4 hours.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", topic: "Order help", message: "" });
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h2>Send us a message</h2>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="input"
                    placeholder="Alex Morgan"
                    value={form.name}
                    onChange={update}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic" className="input" value={form.topic} onChange={update}>
                  <option>Order help</option>
                  <option>Trade-in question</option>
                  <option>Product advice</option>
                  <option>Repair & warranty</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="input"
                  rows="5"
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={update}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
