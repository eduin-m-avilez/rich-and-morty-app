import axios from 'axios';
import React, { useState } from 'react';

const SearchLocation = ({setLocation}) => {
    const [ typeId, setTypeId ] = useState("");

    const typeSearch = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res => {
        setLocation(res.data);
      })
    }

    return (
        <div>
            <input type="text" placeholder='Type a Location Id' onChange={e => setTypeId(e.target.value)} value={typeId}/>
            <button onClick={typeSearch}>Search</button>
        </div>
    );
};

export default SearchLocation;