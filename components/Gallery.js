"use client"
import { useState, useEffect } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Toolbar from './Toolbar';
import ImageCard from '@/components/ImageCard';

const Gallery = ({ unsplash, children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState({ results: [], total: 0 });
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState('latest');
  
  const fetchData = async () => {
    setIsLoading(true);
    if (!unsplashAccessKey) {
      throw new Error('Unsplash API key is missing or invalid');
    }
    try {
      const res = await unsplash.photos.list({ page, perPage: 30, orderBy: sort});
      if (res.status === 200) {
        const list = res.response?.results ?? [];
        const total = res.response?.total ?? 0;
        setError(null);
        setListData({ results: list, total });
        setTotalPages(Math.ceil(total / 30));
      } else {
        throw new Error(`${res.status} ${res.errors[0]}`);
      }
      setIsLoading(false);

    } catch(err) {
      setError(err)
    }
  };
  
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sort]);

  const handleFirstPage = () => {
    setPage(1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  return (
    <div className="gallery">
      <Toolbar sort={sort} setSort={setSort} setListData={setListData} setTotalPages={setTotalPages} setError={setError} setIsLoading={setIsLoading} unsplash={unsplash} />
      {error && <h1 className="error">{error.message}</h1>}
      {!error && isLoading ? (
        children
      ) : (
        <div className="list">
          {listData.results.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
      {!error && (
        <div className="paginator">
          <button
            title="First Page"
            onClick={handleFirstPage}
            disabled={page === 1}
          >
            <ChevronDoubleLeftIcon alt="First Page" />
          </button>
          <button
            title="Previous"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            <ArrowLeftCircleIcon alt="Previous" />
          </button>
          <div className="page">
            <p className="pgNo">{page}</p>
            <small>Page</small>
          </div>
          <button
            title="Next"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            <ArrowRightCircleIcon alt="Next" />
          </button>
          <button
            className="next"
            title="Last Page"
            onClick={handleLastPage}
            disabled={page === totalPages}
          >
            <ChevronDoubleRightIcon alt="Last Page" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;