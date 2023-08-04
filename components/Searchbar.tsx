"use client";
import React, { useState } from 'react'
import SearchBrand from './SearchBrand'

type Props = {}

const Searchbar = (props: Props) => {
  const [brand, setBrand] = useState('');
  const handleSearch = () => {

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchBrand 
                brand={brand}
                setBrand={setBrand}
            />
        </div>
    </form>
  )
}

export default Searchbar