import style from "./CountriesInContinent.module.css";
import { Country } from "../Country";

export function CountriesInContinent({ countries }) {
  return (
    <div className={style.grid}>
      {countries.map((country) => (
        <div className={style.oneCountry}>
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
