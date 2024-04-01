import { ArrowsUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { inter } from "@/lib/fonts";

const Toolbar = ({sort, setSort, setListData, setError, setIsLoading, setTotalPages, unsplash}) => {

  const handleSearch = async (ev) => {
    ev.preventDefault();
    const query = ev.target.search.value.trim();
    const res = await unsplash.search.getPhotos({ query, perPage: 30 });
    if (res.status === 200) {
      const list = res.response?.results ?? [];
      const total = res.response?.total ?? 0;
      setError(null);
      setListData({ results: list, total });
      setTotalPages(Math.ceil(total / 30));
    } else {
      setError(`${res.status} ${res.errors}`);
    }
    setIsLoading(false);
  };

  return (
    <nav className="Toolbar">
      <div className="tool">
        <ArrowsUpDownIcon aria-hidden="true" />
        <div className="sort">
          {['latest', 'oldest', 'popular'].map((option) => (
            <div className="sortOption" key={option}>
              <input
                type="radio"
                name="sort"
                id={option}
                value={option}
                checked={sort === option}
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSearch} className="search-bar">
        <MagnifyingGlassIcon aria-hidden="true" width={40} />
        <input
          id="search"
          type="search"
          placeholder="Search for any images..."
          style={inter.style}
          aria-label="Search for any images"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Toolbar;