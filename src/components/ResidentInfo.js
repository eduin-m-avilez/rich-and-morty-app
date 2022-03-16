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

    console.log(character);

    return (
        <div>
            {character.name}
        </div>
    );
};

export default ResidentInfo;