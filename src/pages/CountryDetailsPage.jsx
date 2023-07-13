import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const CountryDetailsPage = () => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  console.log(alpha3Code);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${alpha3Code.toUpperCase()}`
        );
        const countryData = response.data;
        setCountry(countryData);
      } catch (error) {
        console.log("Error fetching country data:", error);
        console.log("Response:", error.response);
      }
    };
  
    fetchCountryData();
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  const { name, capital, area, borders } = country;

  return (
    <div>
      <h1>{name.common}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area} km²</p>

      <h2>Borders:</h2>
      <ul>
        {borders.map(border => (
          <li key={border}>
            <Link to={`/countries/${border}`}>
              {border}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetailsPage;