import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
import SearchLocation from './components/SearchLocation';

function App() {
  const [ location, setLocation ] = useState({})

  useEffect(() => {
    const ramdon = Math.floor( Math.random()*126)+1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdon}`)
      .then(res => {
        setLocation(res.data)
        
      })
  }, [])
  console.log(location);
  return (
    <div className="App">
      
      <div className="intro"></div>
      <div className="title">
        <h1>Rick and Morty Wiki</h1>
      </div>

      <div className="search">
        <SearchLocation setLocation={setLocation}/>
      </div>

      <div className="info">
        <LocationInfo location={location}/>
      </div>

      <div className="residents">
        <h2>Residents</h2>
        <ResidentList residents={location.residents}/>
      </div>

      <div className="footer">
        <p><b>Designed by Edwin Avilez</b></p>
      </div>

    </div>
  );
}

export default App;
