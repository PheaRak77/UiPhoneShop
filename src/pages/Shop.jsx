import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import products, { categories } from "../data/products";
import { IconBox, IconSearch } from "../components/Icons";

const sorts = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Highest rated" },
];

export default function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating);
    }
    return list;
  }, [query, category, sort]);

  return (
    <div className="container page">
      <div className="page-head">
        <span className="eyebrow">The full lineup</span>
        <h1>Shop all phones</h1>
        <p className="page-sub">
          {filtered.length} {filtered.length === 1 ? "phone" : "phones"} · every device
          tested, warrantied and shipped in 24h
        </p>
      </div>

      <div className="shop-toolbar">
        <div className="search-box">
          <IconSearch size={18} />
          <input
            type="search"
            placeholder="Search phones or brands…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search phones"
          />
        </div>
        <select
          className="input sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
        >
          {sorts.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="chips" role="tablist" aria-label="Filter by category">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            className={`chip${category === c ? " active" : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <IconBox size={48} />
          <h3>No phones found</h3>
          <p>
            Nothing matches “{query}”. Try another search or clear the filters.
          </p>
          <button
            className="btn btn-dark"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
