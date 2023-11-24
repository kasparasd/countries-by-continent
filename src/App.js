import { useEffect, useState } from 'react';
import './App.css';
import { Region } from './components/region/Region';


function App() {

const [data, setData] = useState([])
const [isError, setIsError] = useState(false)


  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(resData=>setData(resData))
    .catch(err => setIsError(true))
  }, [])

  let regions = [];

  for (let i = 0; i < data.length; i++) {
    if(!regions.includes(data[i].region))
    regions.push(data[i].region);
    
  }

  const [countryNameInput, setCountryName] = useState('');

  function handleCountryName(name){
    setCountryName(name)
  }


  return (
    <>
    <label htmlFor="countryNameInput">Country Name</label>
    <input  value={countryNameInput} id="countryNameInput" onChange={(ev)=>handleCountryName(ev.target.value)} type="text" name="countryName" required />
    <div>
     {regions.map((region, idx)=><Region key={idx} countryNameInput={countryNameInput} region={region} countries={data.filter(country=>country.region === region)}/>)}
    </div>
    </>
  );
}

export default App;
