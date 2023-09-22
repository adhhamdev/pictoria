"use client"
import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js'
import { inter } from '@/utils/fonts';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Toolbar from './Toolbar';
import ImageCard from '@/components/ImageCard'

const Gallery = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState({ results: [], total: 0 });
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  let totalPages = Math.ceil(listData.total / 30);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
      if (!unsplashAccessKey) {
        throw new Error('Unsplash API key is missing or invalid');
      }
      const unsplash = createApi({ accessKey: unsplashAccessKey });
      const res = await unsplash.photos.list({ page, perPage: 30 });
      if (res.status == 200) {
        const list = res.response?.results ?? [];
        const total = res.response?.total ?? 0;
        setError(null);
        setListData({ results: list, total });
      } else {
        setError(`${res.status} ${res.errors[0]}`);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  const handleFirstPage = () => {
    setPage(1);
  }

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
      <Toolbar />
      {error && <h1 className="error" style={{fontFamily: inter.style.fontFamily}}>{error}</h1>}
      {!error &&
        isLoading ?
          children :
          <div className="list">
            {listData.results.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>}
        {!error && <div className="paginator">
        <button
          title="First Page"
          onClick={handleFirstPage}
          disabled={page === 1}
        >
          <ChevronDoubleLeftIcon />
        </button>
        <button
          title="Previous"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          <ArrowLeftCircleIcon />
        </button>
        <div className={`page`}>
          <p className="pgNo">{page}</p>
          <small>Page</small>
        </div>
        <button
          title="Next"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          <ArrowRightCircleIcon />
        </button>
        <button
          className={`next`}
          title="Last Page"
          onClick={handleLastPage}
          disabled={page === totalPages}
        >
          <ChevronDoubleRightIcon />
        </button>
      </div>}
    </div>
  );
};

export default Gallery;