"use client";
import Search from "@/Components/Search";
import Select from "@/Components/Select";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const darkMode = false;
  const allCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    allCountries();
  }, []);

  const getCountryByRegion = async (regionName) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/region/${regionName}`
    );
    setData(res.data);
  };

  const getCountryByName = async (input) => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${input}`);
    setData(res.data);
  };

  return (
    <div>
      <div className={`bodyy  `}>
        <Search onSearch={getCountryByName} />
        <Select onSelect={getCountryByRegion} />
        <div className={`grid  `}>
          {data.map((country) => (
            <>
              <div
                className={`card ${
                  darkMode ? "dark-background" : "light-background"
                } `}
              >
                <div
                  className={`${
                    darkMode ? "dark-background" : "light-background"
                  }`}
                >
                  <Link href={`/${country.name.common}`}>
                    <div className="img  ">
                      <img src={country.flags.png} alt="img" />
                    </div>
                  </Link>
                </div>
                <div
                  className={`info ${
                    darkMode ? "dark-background" : "light-background"
                  }   `}
                >
                  <h3
                    className={`${
                      darkMode ? "dark-background" : "light-background"
                    }   `}
                  >
                    {country.name.common}
                  </h3>
                  <div>population:{country.population}</div>
                  <div>Region: {country.region} </div>
                  <div>capital: {country.capital} </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
