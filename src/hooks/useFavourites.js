import { useState, useEffect } from 'react';

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(() => {
    try {
      const storedFavourites = localStorage.getItem('favourites');
      return storedFavourites ? JSON.parse(storedFavourites) : [];
    } catch {
      [];
    }
  });
  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const isFavourite = (id) => favourites.includes(id);

  return { favourites, toggleFavourite, isFavourite };
};
