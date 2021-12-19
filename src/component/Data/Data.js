import React from 'react';
import './Data.css';

const Data = (props) => {
    const {name,flags,population,maps,coatOfArms,region,languages} = props.info;
    return (
        <div className='dataContainer'>
                <div className="data">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <span>Country Name : <b>{name.common}</b></span>
                            <p>Region : {region}</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <i>Flag : </i> <img src={flags.svg} alt="" />
                            <i>CoatOfArms : </i><img src={coatOfArms.svg} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <small>Population : {population}</small>
                            <p>Language : {languages.swe}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Data;

/*maps googleMaps openStreetMaps region languages */