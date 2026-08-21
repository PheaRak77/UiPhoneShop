import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products, { formatPrice, getProduct } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import {
  IconArrowLeft,
  IconCart,
  IconMinus,
  IconPlus,
  IconRefresh,
  IconShield,
  IconStar,
  IconTruck,
} from "../components/Icons";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id);
  const { addToCart } = useCart();

  const [color, setColor] = useState(product?.colors[0].name);
  const [storage, setStorage] = useState(product?.storage[0]);
  const [qty, setQty] = useState(1);

  const related = useMemo(
    () =>
      products
        .filter((p) => p.id !== product?.id)
        .sort((a, b) => {
          const aScore = (a.category === product?.category ? 1 : 0) + Number(a.featured) * 0.5;
          const bScore = (b.category === product?.category ? 1 : 0) + Number(b.featured) * 0.5;
          return bScore - aScore || b.rating - a.rating;
        })
        .slice(0, 4),
    [product?.id, product?.category]
  );

  if (!product) {
    return (
      <div className="container page notfound">
        <h1 className="notfound-code">404</h1>
        <h2>Phone not found</h2>
        <p>That model doesn't exist (anymore). Browse the full lineup instead.</p>
        <Link to="/shop" className="btn btn-primary">
          Back to shop
        </Link>
      </div>
    );
  }

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;
  const options = { color, storage, qty };

  return (
    <div className="container page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IconArrowLeft size={16} /> Back
        </button>
        <span>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
        </span>
      </nav>

      <div className="detail-grid">
        <div className="detail-media">
          {product.badge && <span className="badge">{product.badge}</span>}
          {discount > 0 && <span className="badge badge-sale">-{discount}%</span>}
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <span className="product-cat">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="rating-row">
            <span className="stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <IconStar
                  key={s}
                  size={16}
                  style={{ opacity: s <= Math.round(product.rating) ? 1 : 0.25 }}
                />
              ))}
            </span>
            <span>
              {product.rating} · {product.reviews.toLocaleString()} reviews
            </span>
          </div>

          <div className="detail-price">
            {formatPrice(product.price)}
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>

          <p className="detail-desc">{product.description}</p>

          <div className="opt">
            <span className="opt-label">
              Color — <strong>{color}</strong>
            </span>
            <div className="swatches">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  className={`swatch${color === c.name ? " active" : ""}`}
                  style={{ background: c.hex }}
                  onClick={() => setColor(c.name)}
                  title={c.name}
                  aria-label={`Color ${c.name}`}
                />
              ))}
            </div>
          </div>

          <div className="opt">
            <span className="opt-label">
              Storage — <strong>{storage}</strong>
            </span>
            <div className="chips">
              {product.storage.map((s) => (
                <button
                  key={s}
                  className={`chip${storage === s ? " active" : ""}`}
                  onClick={() => setStorage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="qty-row">
            <div className="qty-stepper">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <IconMinus size={16} />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => Math.min(9, q + 1))} aria-label="Increase quantity">
                <IconPlus size={16} />
              </button>
            </div>
            <span className="stock-note">In stock — ships within 24h</span>
          </div>

          <div className="detail-cta">
            <button className="btn btn-primary btn-lg" onClick={() => addToCart(product, options)}>
              <IconCart size={18} /> Add to cart
            </button>
            <button
              className="btn btn-dark btn-lg"
              onClick={() => {
                addToCart(product, options);
                navigate("/cart");
              }}
            >
              Buy now
            </button>
          </div>

          <ul className="trust-list">
            <li>
              <IconTruck size={18} /> Free express delivery, tracked & insured
            </li>
            <li>
              <IconShield size={18} /> 2-year PhoneVerse warranty included
            </li>
            <li>
              <IconRefresh size={18} /> 30-day free returns, no questions asked
            </li>
          </ul>
        </div>
      </div>

      <section className="section-tight">
        <h2 className="section-title">Full specifications</h2>
        <div className="spec-card">
          {product.specs.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <span className="spec-label">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">You might also like</h2>
          <Link to="/shop" className="link-arrow">
            View all phones
          </Link>
        </div>
        <div className="product-grid">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
