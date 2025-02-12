import React from 'react';
import NavBar from '../components/NavBar';
//import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
    { name: 'Service 1', price: '₹1000' },
    { name: 'Service 2', price: '₹1500' },
    { name: 'Service 3', price: '₹2000' }
];

const ServicesList = () => {
    return (
        <div>
         <NavBar/>
         <br></br>
         <br/>   
        <div className="container mt-6" >
            <h2 className="mb-4" style={{marginLeft:"40%"}}>Our Services</h2>
            <div className="container d-flex justify-content-center mt-5">
            <div className="list-group w-50">
                {services.map((service, index) => (
                    <div key={index} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{service.name}</h5>
                            <small>{service.price}</small>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};

export default ServicesList;
