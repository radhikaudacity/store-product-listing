export const fetchProducts = async () => {
  const BASE = import.meta.env.VITE_API_BASE;
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};
