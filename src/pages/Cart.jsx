import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import {
  IconArrowRight,
  IconCart,
  IconCheck,
  IconMinus,
  IconPlus,
  IconShield,
  IconTrash,
  IconTruck,
} from "../components/Icons";

export default function Cart() {
  const { items, subtotal, updateQty, removeItem, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (placed) {
    return (
      <div className="container page">
        <div className="order-success">
          <span className="success-circle">
            <IconCheck size={30} />
          </span>
          <h1>Order placed!</h1>
          <p>
            Thank you — your order is confirmed and will arrive within 24 hours. A receipt
            is on its way to your inbox.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link to="/shop" className="btn btn-primary">
              Keep shopping <IconArrowRight size={16} />
            </Link>
            <Link to="/" className="btn btn-outline">
              Back home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container page">
        <div className="empty-state">
          <span className="empty-icon">
            <IconCart size={44} />
          </span>
          <h1>Your cart is empty</h1>
          <p>Browse the lineup and find your next phone — deals refresh every week.</p>
          <Link to="/shop" className="btn btn-primary">
            Browse phones <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container page">
      <div className="page-head">
        <span className="eyebrow">Almost yours</span>
        <h1>Your cart</h1>
        <p className="page-sub">
          {items.length} item{items.length > 1 ? "s" : ""} · free express shipping on everything
        </p>
      </div>

      <div className="cart-grid">
        <div>
          {items.map((item) => (
            <div className="cart-item" key={item.key}>
              <Link to={`/product/${item.id}`} className="thumb">
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <span className="cart-item-meta">
                  {item.color} · {item.storage}
                </span>
                <div className="qty-stepper small">
                  <button onClick={() => updateQty(item.key, -1)} aria-label="Decrease quantity">
                    <IconMinus size={14} />
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.key, 1)} aria-label="Increase quantity">
                    <IconPlus size={14} />
                  </button>
                </div>
              </div>
              <div className="cart-item-side">
                <strong>{formatPrice(item.price * item.qty)}</strong>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.key)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <IconTrash size={18} />
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-outline btn-sm" onClick={clearCart}>
            <IconTrash size={16} /> Clear cart
          </button>
        </div>

        <aside className="summary-card">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">
              FREE <s>$19</s>
            </span>
          </div>
          <div className="summary-row">
            <span>Estimated tax (8%)</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button className="btn btn-primary btn-lg btn-block" onClick={() => { setPlaced(true); clearCart(); }}>
            Checkout · {formatPrice(total)}
          </button>
          <div className="summary-trust">
            <span>
              <IconTruck size={15} /> Arrives in 24h
            </span>
            <span>
              <IconShield size={15} /> 2-year warranty
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
