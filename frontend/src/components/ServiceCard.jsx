/*function ServiceCard() {
  return (
    <div>
      <div class="card mb-3" style={{ maxWidth: "540px", margin: "50px" }}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
*/// src/components/ServiceCard.js


import React from 'react';

const ServiceCard = ({ service, onSelect, isSelected }) => {
    const cardStyle = {
        maxWidth: "540px",
        margin: "50px",
        border: isSelected ? "2px solid blue" : "1px solid gray"
    };

    return (
        <div>
            <div className="card mb-3" style={cardStyle} onClick={() => onSelect(service)}>
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Price: ${service.price}</p>
                    <p className="card-text">{service.description}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">Last updated {service.lastUpdated} mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;



