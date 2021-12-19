import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Country from './component/Country/Country';
import Data from './component/Data/Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  const [add, setAdd] = useState([]);

  useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data =>setCountry(data))
  },[])

  const CountryName = (country) =>
  {
    const countryname = [...cart,country];
    setAdd([...add,country]);
    setCart(countryname);
  }

  return (
    <div className="app">
      <div className="container">
      <h1>Country loaded : {country.length}</h1>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="container inner">
            {
              country.map(countrys => <Country country={countrys} key={countrys.cca3} addCountry={CountryName} ></Country> )
            }
            </div>
        </div>
        <div className='col-lg-6 col-md-6 col-12 right-side'>
            <div className="container inner">
                <Cart cart={cart}></Cart>
                <ul>
                {
                    add.map(nam => <Data info={nam} key={nam.cca2}></Data> )
                }
                </ul>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
