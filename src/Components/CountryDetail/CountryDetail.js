import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryInfo from '../CountryInfo/CountryInfo';
import './CountryDetail.css';

const CountryDetail = () => {
    let {countryName} = useParams();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

     
    return (
        <div className="detail">
           
          {
            countries.map(country => <CountryInfo country ={country}></CountryInfo>)
          }
            
        </div>
    );
};

export default CountryDetail;