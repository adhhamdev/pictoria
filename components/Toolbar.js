import { useState } from "react";
import { ArrowsUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { inter } from "@/utils/fonts";

const Toolbar = () => {
  const [sort, setSort] = useState('latest');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <nav className="toolbar">
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for any images"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Toolbar;