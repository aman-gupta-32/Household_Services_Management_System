import React, { use, useState } from "react";
import shoppingCart from "../../assets/shopping-cart.png";
import { useEffect } from "react";
import { addBookings, getAllServices } from "../../services/CustomerService";

import { useNavigate } from "react-router-dom";

function AddToCart() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [serviceProviderName, setServiceProviderName] = useState("");
  const [price,setPrice] = useState("");
  const [spId, setSpId] = useState("");

  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    bookingSlot: "",
    date: "",
    servicesId: "",
    customersId: localStorage.getItem("userId"),
    status: "PENDING",
    sname:"",
    spname:"",
    price:"",
    spId:"",
    
  });

  useEffect(() => {
    console.log("Updated Booking Data:", bookingData);
  }, [bookingData]);

  useEffect(() => {
    console.log("Updated selectedServiceId:", selectedServiceId);
  }, [selectedServiceId]);

  /* const handleConfirm = async () => {
    setBookingData((bookingData) => ({
      const updatedBooking = {
      ...bookingData,
      booking_slot: selectedSlot,
      date: selectedDate,
      services_id: selectedServiceId,
      }
  }));

    await addBooking (selectedBookingObject);
    alert("Booking done successfully!");
    //console.log(e.target.name);
  };  */

  const handleConfirm = () => {
    console.log(localStorage.getItem("userId"));
    const updatedBooking = {
      ...bookingData,
      bookingSlot: selectedSlot,
      date: selectedDate,
      servicesId: selectedServiceId,
      customersId: localStorage.getItem("userId"),
      sname: serviceName,
      spname: serviceProviderName,
      price: price,
      spId: spId
    };

    setBookingData(updatedBooking);
    let storedBookings =
      JSON.parse(localStorage.getItem("bookingData")) || [];

      if (!Array.isArray(storedBookings)) {
        storedBookings = [storedBookings];
      }
    storedBookings.push(updatedBooking);
    localStorage.setItem("bookingData", JSON.stringify(storedBookings));
    alert("Booking added to cart!");
    navigate("/cart");

    /*try {
      await addBookings(updatedBooking);
      alert("Booking done successfully!");
      navigate("/cart")
    } catch (error) {
      console.error("Error adding booking:", error);
      alert("There was an error making the booking.");
    }*/
  };

  useEffect(() => {
    const fetchServices = async () => {
      console.log("In the use effect");
      const data = await getAllServices();
      setServices(data);
    };
    fetchServices();
  }, []);

  const col = {
    float: "left",
    width: "32%",
    margin: "10px",
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary" style={{ marginBottom: "50px" }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.wackybuttons.com/designcodes/0/110/1102098.png"
              alt="Homify"
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>

      <div className="row" style={{ boxSizing: "border-box", margin: "10px" }}>
        <div className="column" style={col}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">Featured</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
        </div>

        {services.map((service) => (
          <div className="column" style={col} key={service.sid}>
            <div
              className="card text-center p-4 shadow"
              style={{ width: "18rem", cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target={`#dateModal-${service.sid}`}
              //onClick={() => setSelectedServiceId(service.sid)}
            >
              <h5 className="card-title">{service.sname}</h5>
              <p>Price: {service.price}</p>
              <p className="card-text">
                {selectedDate && selectedSlot
                  ? `Selected: ${selectedDate} , Slot: ${selectedSlot}`
                  : "Click to choose a date and slot"}
                {/*`Service Id: ${service.sid}`*/}
              </p>
            </div>

            <div
              className="modal fade"
              id={`dateModal-${service.sid}`}
              tabIndex="-1"
              aria-labelledby={`dateModalLabel-${service.sid}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id={`dateModalLabel-${service.sid}`}
                    >
                      Schedule a date and slot
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <label htmlFor="dateSelect" className="form-label">
                      Select a Date:
                    </label>
                    <select
                      className="form-select"
                      id="dateSelect"
                      name="date"
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setServiceName(service.sname);
                        setServiceProviderName(service.spname);
                        setPrice(service.price);
                        setSpId(service.spId);
                      }}
                      //onChange={(e) => handleChange(e)}
                      value={selectedDate}
                    >
                      <option value="">-- Select a Date --</option>
                      <option value="2025-02-10">Feb 10, 2025</option>
                      <option value="2025-02-11">Feb 11, 2025</option>
                      <option value="2025-02-12">Feb 12, 2025</option>
                      <option value="2025-02-13">Feb 13, 2025</option>
                    </select>

                    <label
                      htmlFor="slotSelect"
                      className="form-label"
                      style={{ marginTop: "15px" }}
                    >
                      Select a Slot:
                    </label>
                    <select
                      className="form-select"
                      id="slotSelect"
                      name="slot"
                      onChange={(e) => {
                        setSelectedSlot(e.target.value);
                        setSelectedServiceId(() => service.sid);
                      }}
                      value={selectedSlot}
                    >
                      <option value="">-- Select a Slot --</option>
                      <option value="1">Slot 1</option>
                      <option value="2">Slot 2</option>
                      <option value="3">Slot 3</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleConfirm}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="column" style={col}>
          <div
            className="card mb-3"
            style={{ maxWidth: "500px", textAlign: "center" }}
          >
            <div className="row g-0">
              <div className="card-body">
                <a
                  href="/cart"
                  style={{ display: "inline", textDecoration: "none" }}
                >
                  <img
                    src={shoppingCart}
                    alt="shopping"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
                <p style={{ fontWeight: "bold" }}>No Items in your cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
