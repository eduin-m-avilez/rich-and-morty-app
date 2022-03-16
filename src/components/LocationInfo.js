import React from 'react';

const LocationInfo = ( { location } ) => {
    return (
        <div>
            <h2>{location.name}</h2>
            <div className="description">
                <>
                <p><b>Type: </b>{location.type}</p>
                </>
                <>
                <p><b>Dimension: </b>{location.dimension}</p>
                </>
                <>
                <p><b>Population: </b>{location.residents?.length}</p>
                </>
            </div>
        </div>
    );
};

export default LocationInfo;