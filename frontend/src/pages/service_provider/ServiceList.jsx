import ServiceCard from "../../components/ServiceCard";

// src/components/ServiceList.js
import React, { useEffect, useState } from "react";

import {
  getServices,
  updateServiceProvider,
  updateServiceProviderServices,
} from "../../services/ServiceProviderService";
import { data, redirect } from "react-router-dom";

function ServiceList({ providerId }) {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      console.log("In the use effect");
      const data = await getServices();
      setServices(data);
    };
    fetchServices();
  }, []);

  const handleSelect = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service.id)
        ? prevSelected.filter((id) => id !== service.id)
        : [...prevSelected, service.id]
    );
  };

  /*
  const handleSubmit = async () => {
    //alert("What are you doin?")
   // redirect('localhost:3000/dashboard');
    await updateServiceProviderServices(providerId, selectedServices);
    alert("Services saved successfully!");
  };  */

  const handleSubmit = async () => {
    const selectedServiceObjects = services
      .filter((service) => selectedServices.includes(service.id))
      .map((service) => ({
        id: service.id,
        name: service.name,
        price: service.price,
      }));

    await updateServiceProviderServices(providerId, selectedServiceObjects);
    alert("Services saved successfully!");
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "grey", height: "50px" }}>
        Choose services you want to provide
      </h1>
      <div className="row" style={{ boxSizing: "border-box", margin: "10px" }}>
        {services.map((service) => (
          <div
            key={service.id}
            className="column"
            style={{ float: "left", width: "32%", margin: "10px" }}
          >
            <ServiceCard
              service={service}
              onSelect={handleSelect}
              isSelected={selectedServices.includes(service.id)}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-secondary" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default ServiceList;
