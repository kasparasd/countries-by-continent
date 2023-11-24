import style from "./CountriesInContinent.module.css";
import { Country } from "../Country";
import { useEffect, useState } from "react";

export function CountriesInContinent({
  countries,
  countryName,
  noCountriesInRegion,
}) {
  let countryList = [];
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.name.common.toLowerCase().includes(countryName.toLowerCase())) {
      countryList.push(country);
    }

    for (const key in country.name.nativeName) {
      const names = country.name.nativeName[key];

      for (const key in names) {
        if (
          names[key].toLowerCase().includes(countryName.toLowerCase()) &&
          !countryList.includes(country)
        ) {
          countryList.push(country);
        }
      }
    }
  }

  function checkForCountries() {
    if (countryList.length === 0) {
      noCountriesInRegion(false);
    } else noCountriesInRegion(true);
  }

  useEffect(() => {
    checkForCountries();
  }, [countryName]);

  return (
    <div className={style.grid}>
      {countryList.map((country, idx) => (
        <div key={idx} className={style.oneCountry}>
          <Country
            capital={country.capital}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            country={country.name.common}
          />
        </div>
      ))}
    </div>
  );
}
