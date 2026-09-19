'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import SearchData from './search-data/search-data';
import { useSearchModalStore } from './store/useSearchStore';

const Search = () => {
  const { isOpen, toggleSearchModal } = useSearchModalStore();

  const variants = {
    open: {
      width: '100vw',
      height: '100vh',
      borderRadius: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      width: 0,
      height: 0,
      borderRadius: '50%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <button onClick={toggleSearchModal}>
        <Image
          width={34}
          height={34}
          alt="search"
          src="/images/search.svg"
          className="lg:mr-24 mt-2"
        />
      </button>

      <motion.div
        className="fixed top-0 left-0 bg-white z-50"
        variants={variants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {isOpen && <SearchData />}
      </motion.div>
    </>
  );
};

export default Search;
