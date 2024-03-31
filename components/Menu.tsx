"use client"
import React, { useState } from 'react';
import { drinksData } from '@/drinksData';
import Image from 'next/image';

type DrinkModel = {
  id: number;
  category: string;
  drinks: {
    id: number;
    name: string;
    image: string;
    price: string;
  }[];
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value === '' ? null : event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <>
      <section className='w-full h-full flex'>
        <div className='w-full h-full'>
          <div className='flex justify-center text-[3rem] w-full h-full items-center'>
            <h2 className='font-bold '>MENU</h2>
          </div>
          <div className='w-full h-full'>
            <div className="flex flex-col md:flex-row justify-center m-4 p-4 gap-2 md:gap-4">
              <select title="categories" onChange={handleCategoryChange} className='mt-4 p-2 border bg-black rounded-md '>
                <option value=''>All Drinks</option>
                {drinksData.map((drinks: DrinkModel) => (
                  <option key={drinks.id} value={drinks.category}>
                    {drinks.category}
                  </option>
                ))}
              </select>
              <input
                type='text'
                placeholder='Search drinks...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='mt-4 p-2 border border-gray-300 rounded-md bg-black'
              />
            </div>
            {drinksData.map((drinks: DrinkModel) => {
              const filteredDrinks = drinks.drinks.filter(
                (drink) =>
                  (!searchTerm || drink.name.toLowerCase().includes(searchTerm)) ||
                  (!searchTerm || drink.price.toLowerCase().includes(searchTerm))
              );

              if (!selectedCategory || (selectedCategory && drinks.category === selectedCategory && filteredDrinks.length > 0)) {
                return (
                  <div key={drinks.id}>
                    {filteredDrinks.length > 0 && <h3 className='font-bold text-xl text-center my-12 '>{drinks.category}</h3>}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-3 md:gap-6 mx-2 lg:mx-20'>
                      {filteredDrinks.map((drink) => (
                        <div key={drink.id} id={drink.id.toString()} className='bg-slate-900 rounded-md h-80 w-50 p-2 shadow-md shadow-slate-800'>
                          <div className='h-60 w-full bg-white object-contain flex items-center justify-center overflow-hidden rounded-t-lg mb-2'>
                            <Image src={ drink.image } alt="drinks" width={ 290 } height={ 150} className='object-contain rounded-lg' loading='lazy'/>
                          </div>
                          <div className='w-full flex justify-center items-center  h-[17%] mt-3'>
                            <h2 className='font-medium text-base text-amber-500'>{ drink.name }: <span className='text-white'>{ drink.price}</span></h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
            {drinksData
              .flatMap((drinks: DrinkModel) => drinks.drinks)
              .filter(
                (drink) =>
                  (!searchTerm || drink.name.toLowerCase().includes(searchTerm)) ||
                  (!searchTerm || drink.price.toLowerCase().includes(searchTerm))
              ).length === 0 && <div className='text-center col-span-5 h-60 w-full flex flex-col justify-center items-center text-2xl font-semibold my-36 gap-4'>
                  <>
                    <Image src="/undraw.svg" alt="missing" width={ 250 } height={ 250 } />
                    <h2> No drinks found </h2>
                  </>
                 </div> }
          </div>
        </div>
      </section>
    </>
  );

}
