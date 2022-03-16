import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
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
      <h1>{location.name}</h1>

      <div className="residents">
        <ResidentList residents={location.residents}/>
      </div>
    </div>
  );
}

export default App;
