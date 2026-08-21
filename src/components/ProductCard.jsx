import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import { IconCart, IconStar } from "./Icons";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-media" aria-label={product.name}>
        {product.badge && <span className="badge">{product.badge}</span>}
        {discount > 0 && <span className="badge badge-sale">-{discount}%</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-body">
        <div className="product-meta">
          <span className="product-cat">{product.category}</span>
          <span className="product-rating">
            <IconStar size={13} /> {product.rating}
          </span>
        </div>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <p className="product-short">{product.short}</p>
        <div className="product-foot">
          <div className="price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>
          <button
            className="btn btn-primary btn-icon"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            title="Add to cart"
          >
            <IconCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
