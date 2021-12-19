import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,flags} = props.country;
    const Add = props.addCountry;
    return (
        <div className='country'>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5>{name.common}</h5>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={flags.svg} alt="flag-img" className='d-block mx-auto' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <button className='btn btn-primary d-block mx-auto' onClick={()=>Add(props.country)}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Country;