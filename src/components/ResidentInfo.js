import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ residentUrl }) => {

    const [ character, setCharacter ] = useState({});
  
    useEffect(() => {
         axios.get(residentUrl)
            .then(res => {
                setCharacter(res.data);
            })
    }, [residentUrl])

    // console.log(character);

    return (
        <div className='card'>
            <div className="img">
                 <img src={character.image} alt="Photography" />
            </div>
            <div className="inf-per">
                <h4>{character.name}</h4>
                <p><b>{character.status}</b></p>
                <p>
                    <b>Origin:</b> 
                    <br /> 
                    {character.origin?.name}
                </p>
                <p><b>Episodes appears: </b>{character.episode?.length}</p>  
            </div>
                     
        </div>
    );
};

export default ResidentInfo;