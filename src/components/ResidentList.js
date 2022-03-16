import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
    return (
        <div>
            {
                residents?.map(resident => (
                    <ResidentInfo residentUrl={resident} key={resident} />
                //     <div className="card" key={resident}>
                //         {resident}
                //     </div>
                 ))
            }

        </div>
    );
};

export default ResidentList;