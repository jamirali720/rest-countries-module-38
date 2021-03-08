import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
            const url = 'https://restcountries.eu/rest/v2/all';
            fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])
    return (
        <div className="App">
            <h1>Country Number : {countries.length}</h1>
            {
                countries.map((country, alpha2Code) => <Country country={country} key={alpha2Code}></Country>)
            }
            
        </div>
    );
};

export default Home;