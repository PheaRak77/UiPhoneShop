import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { IconBolt, IconCart, IconClose, IconMenu, IconSearch } from "./Icons";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo-mark">
            <IconBolt size={18} />
          </span>
          <span>
            Phone<span className="grad-text">Verse</span>
          </span>
        </Link>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/shop" className="btn btn-primary btn-sm mobile-only" onClick={close}>
            Shop now
          </Link>
        </nav>

        <div className="nav-actions">
          <Link to="/shop" className="icon-btn" aria-label="Search phones">
            <IconSearch />
          </Link>
          <Link to="/cart" className="icon-btn cart-btn" aria-label="Open cart">
            <IconCart />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
          <Link to="/shop" className="btn btn-primary btn-sm desktop-only">
            Shop now
          </Link>
          <button
            className="icon-btn hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
