"use client";

import { Combobox, Transition } from '@headlessui/react'
import { SearchBrandProps } from '@/types'
import React, { useState, Fragment } from 'react'
import Image from 'next/image';
import { brands } from '@/constants';

const SearchBrand = ({ brand, setBrand }: SearchBrandProps) => {
  const [query, setQuery] = useState('');
  const filterBrands = (): string[] => {
    return brands.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")))
  }
  const filteredBrands = query === "" ? brands : filterBrands();

  return (
    <div className='search-brand'>
        <Combobox value={brand} onChange={setBrand}>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image src="/car-logo.svg" width={20} height={20} alt="Car Logo" />
                </Combobox.Button>
                <Combobox.Input
                    className="search-brand__input"
                    placeholder="Volkswagen"
                    displayValue={(brand: string) => brand}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                        {
                            filteredBrands.map(item => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => `relative search-brand__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                            {item}
                                            </span>
                                            {selected ? (
                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                            ></span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchBrand