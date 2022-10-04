import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0]
    console.log(country)
    return (
        <div className='grid grid-cols-1 justify-items-center mt-12'>
            <img className='' src={country.flags.png} alt="" />
            <h1 className='mt-8 text-3xl font-bold'>{country.name.common}</h1>
            <p className='font-medium'>Capital: {country.capital[0]}</p>
            <img className='object-contain h-48 w-96' src={country.coatOfArms.png} alt="" />
            <p>coatOfArms</p>
            <h2 className='font-bold'>Population: {country.population}</h2>
            <h4>Region: {country.region}</h4>
        </div>
    );
};

export default Country;