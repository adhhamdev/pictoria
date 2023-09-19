"use client"
import { useState } from "react";
import { ArrowsUpDownIcon, BarsArrowUpIcon, BarsArrowDownIcon, ClockIcon } from '@heroicons/react/24/solid'


const Toolbar = () => {
    const [sort, setSort] = useState('latest');
    return (
        <div className="Toolbar">
            <div className="tool">
                <ArrowsUpDownIcon />
                <div className="sort">
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Popular</option>
                    </select>
                </div>
            </div>
            <form>
                <input type="search" name="search" pattern="Search for anythin..." tabIndex={0} required  />
                <button>Search</button>
            </form>
        </div>
    );
};

export default Toolbar;