"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function CountryInfo({ params }) {
  console.log(params.id, "params");
  const [country, setCountry] = useState({});
  const darkMode = true;

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${params.id}`
        );
        setCountry(res.data[0]);
      } catch (error) {
        alert(error);
      }
    };

    fetchCountryData();
  }, [params]);

  return (
    <div className={`${darkMode ? "light-background" : "dark-background"}`}>
      <div className={`infoC`}>
        <div
          className={` more-info ${
            darkMode ? "light-elements" : "dark-elements"
          }`}
        >
          <div className="img">
            <img src={country?.flags?.png} alt="img" />
          </div>
          <div
            className={`info ${darkMode ? "light-elements" : "dark-elements"}`}
          >
            <h3 className={`${darkMode ? "light-text" : "dark-text"}`}>
              {country.name?.common}
            </h3>
            <div className={`${darkMode ? "light-text" : "dark-text"}`}>
              population: {country.population}
            </div>
            <div className={`${darkMode ? "light-text" : "dark-text"}`}>
              Region: {country.region}{" "}
            </div>
            <div className={`${darkMode ? "light-text" : "dark-text"}`}>
              capital: {country.capital}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
