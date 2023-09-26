"use client"
import { useState } from "react";
import { ArrowsUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { inter } from "@/utils/fonts";

const Toolbar = () => {
    const [sort, setSort] = useState('latest');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchTerm);
    }
    return (
        <div className="Toolbar">
            <div className="tool">
                <ArrowsUpDownIcon />
                <div className="sort">
                    <div className="sortOption">
                        <input type="radio" name="sort" id="latest" value="latest" checked={sort === 'latest'} onChange={e => setSort(e.target.value)} />
                        <label htmlFor="latest">Latest</label>
                    </div>
                    <div className="sortOption">
                        <input type="radio" name="sort" id="oldest" value="oldest" checked={sort === 'oldest'} onChange={e => setSort(e.target.value)} />
                        <label htmlFor="oldest">Oldest</label>
                    </div>
                    <div className="sortOption">
                        <input type="radio" name="sort" id="popular" value="popular" checked={sort === 'popular'} onChange={e => setSort(e.target.value)} />
                        <label htmlFor="popular">Popular</label>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSearch} className="search-bar">
                <MagnifyingGlassIcon width={40} />
                <input
                    id="search"
                    type="search"
                    placeholder="Search for any images..."
                    style={inter.style}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Toolbar;