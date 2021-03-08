import React from 'react';

const CountryInfo = (props) => {
        console.log(props);
        const {name, capital, area, region, subregion, population, } = props.country;
    return (
        <div>
          <h1> Country Name: {name}</h1>
          <h1> Capital: {capital}</h1>
          <h1> Area : {area}</h1>
          <h1> Region : {region}</h1>
          <h1> Sub Region : {subregion}</h1>
          <h1> Population : {population}</h1>
        </div>
    );
};

export default CountryInfo;