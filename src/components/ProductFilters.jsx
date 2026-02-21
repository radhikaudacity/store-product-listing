import toTitleCase from '../utils/format';
const ProductFilters = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  showFavOnly,
  setShowFavOnly,
  filteredProducts,
  categories,
}) => {
  return (
    <section className='api-hero'>
      <h1>Store Product Listing</h1>
      <p>
        Demonstrates API fetch, search, filter, favourites, error handling and
        UI state handling using React.
      </p>
      <div className='wrapper'>
        <input
          type='text'
          placeholder='Search items...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {['All Categories', ...categories].map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {toTitleCase(category)}
            </option>
          ))}
        </select>
      </div>

      <div className='fav-toggle'>
        <button
          className={showFavOnly ? 'active' : ''}
          onClick={() => setShowFavOnly((prev) => !prev)}
        >
          {showFavOnly ? 'Showing Favourites ❤️' : 'Show Favourites ❤️'}
        </button>
        <p>
          Found {filteredProducts.length}{' '}
          {filteredProducts.length == 1 ? 'item.' : 'items.'}
        </p>
      </div>
    </section>
  );
};

export default ProductFilters;
