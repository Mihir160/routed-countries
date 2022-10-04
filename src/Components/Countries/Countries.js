import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries =  useLoaderData()
    return (
        <div>
            <h1 className='text-3xl font-bold mt-12'>All Countries: {countries.length}</h1>
           <div className='grid lg:grid-cols-4 mt-12'>
           {
                countries.map(country => <li><Link className='text-1xl font-medium' key={country.cca3} to={`/country/${country.name.common}`}>{country.name.common}</Link></li>)
            }
           </div>
        </div>
    );
};

export default Countries;