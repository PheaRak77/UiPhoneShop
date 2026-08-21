import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = useCallback((message) => {
    setToast({ id: Date.now(), message });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addToCart = useCallback(
    (product, { color, storage, qty = 1 } = {}) => {
      const chosenColor = color ?? product.colors[0].name;
      const chosenStorage = storage ?? product.storage[0];
      const key = `${product.id}-${chosenColor}-${chosenStorage}`;

      setItems((prev) => {
        const existing = prev.find((i) => i.key === key);
        if (existing) {
          return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
        }
        return [
          ...prev,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: chosenColor,
            storage: chosenStorage,
            qty,
          },
        ];
      });
      showToast(`${product.name} added to cart`);
    },
    [showToast]
  );

  const updateQty = useCallback((key, delta) => {
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(
    () => ({
      count: items.reduce((s, i) => s + i.qty, 0),
      subtotal: items.reduce((s, i) => s + i.price * i.qty, 0),
    }),
    [items]
  );

  const value = { items, count, subtotal, addToCart, updateQty, removeItem, clearCart, toast };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
