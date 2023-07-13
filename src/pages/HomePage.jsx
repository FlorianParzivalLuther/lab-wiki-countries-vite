import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        const countriesData = response.data;
        console.log(countriesData);
        setCountries(countriesData);
      } catch (error) {
        console.log("Error cannot fetch data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World!</h1>

      <div className="d-flex justify-content-center">
        <ul className="list-group" style={{ width: "70%" }}>
         
         
         
          {countries.map((country) => (
            <li key={country.alpha3Code}>
              <Link to={`/countries/${country.alpha3Code.toLowerCase()}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                />
                {country.name.common}
              </Link>
            </li>
          ))}


        </ul>
      </div>
    </div>
  );
};

export default HomePage;
