import { useState } from "react";
import { CountriesInContinent } from "../countriesInContinent/CountriesInContinent";
import style from "./Region.module.css";
export function Region({ region, countries, countryName }) {
  const [regionHaveCountries, setRegionHaveCountries] = useState(true);

  function noCountriesInRegion(bool) {
    setRegionHaveCountries(bool);
  }

  return (
    <>
      {regionHaveCountries ? (
        <>
          <div className={style.region}>{region}</div>
          <CountriesInContinent
            noCountriesInRegion={noCountriesInRegion}
            countryName={countryName}
            countries={countries}
          />
        </>
      ) : (
        <CountriesInContinent
          noCountriesInRegion={noCountriesInRegion}
          countryName={countryName}
          countries={countries}
        />
      )}
    </>
  );
}
