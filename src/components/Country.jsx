import style from "./Country.module.css";

export function Country(props) {
  return (
    <>
      <img src={props.flag} alt="Flag" />
      <div>Country: {props.country}</div>
      <div className={style.population}>
        <p>Population:</p>
        <p>{props.population}</p>
      </div>
      <div className={style.region}>
        <p>Region:</p>
        <p>{props.region}</p>
      </div>
      <div className={style.capital}>
        <p>Capital:</p>
        <p>{props.capital}</p>
      </div>
    </>
  );
}
