import React  from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'




const Country = (props) => {
    const {name, flag, }  =  props.country;
    const history = useHistory();
    const handleClick = (name) => {
        const url = `/country/${name}`
        history.push(url)
    }
  
    return (
        <div className="country-div">
            <h1>Country Name : {name}</h1>
            <img src={flag} alt=""/>
            <br/>
            <Link to={`/country/${name}`}>Show Detail of Country</Link>
            <br/>
            <button onClick={() => handleClick(name)}>Show Country Info </button> 
          
        </div>
    );
};

export default Country;