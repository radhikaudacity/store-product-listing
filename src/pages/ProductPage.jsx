import { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import Loader from '../components/UI/Loader';
import ErrorState from '../components/UI/ErrorState.jsx';
import EmptyState from '../components/UI/EmptyState.jsx';
import ProductFilters from '../components/ProductFilters.jsx';
import { useProducts } from '../hooks/useProducts.js';
import { useFavourites } from '../hooks/useFavourites.js';

const ProjectPage = () => {
  const { products, error, loading, retry } = useProducts();
  const { favourites, toggleFavourite, isFavourite } = useFavourites();
  const [search, setSearch] = useState('');
  const [showFavOnly, setShowFavOnly] = useState();
  const [selectedCategory, setSelectedCategory] = useState('all categories');

  const filteredProducts = (products || []).filter(
    ({ id, title, category }) => {
      const matchesSearch = title.toLowerCase().includes(search.toLowerCase());

      const matchesFavourite = !showFavOnly || favourites.includes(id);

      const matchesCategory = selectedCategory === category;

      return (
        matchesSearch &&
        matchesFavourite &&
        (selectedCategory === 'all categories' ? [] : matchesCategory)
      );
    },
  );
  const showEmptyState = !loading && !error && filteredProducts.length === 0;

  const uniqueCategories = (data = []) => [
    ...new Set(data.map((item) => item.category)),
  ];

  return (
    <main className='api-project'>
      <ProductFilters
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showFavOnly={showFavOnly}
        setShowFavOnly={setShowFavOnly}
        filteredProducts={filteredProducts}
        categories={uniqueCategories(products)}
      />

      {showEmptyState && <EmptyState />}
      {loading && <Loader />}
      {error && <ErrorState message={error} onRetry={retry} />}

      <section className='product-grid'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavourite={isFavourite(product.id)}
            onToggleFavourite={() => toggleFavourite(product.id)}
          />
        ))}
      </section>
    </main>
  );
};

export default ProjectPage;
