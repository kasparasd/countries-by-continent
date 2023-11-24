import { CountriesInContinent } from "../countriesInContinent/CountriesInContinent";
import style from "./Region.module.css";
export function Region({ region, countries }) {
  return (
    <>
      <div className={style.region}>{region}</div>
      <CountriesInContinent countries={countries} />
    </>
  );
}
