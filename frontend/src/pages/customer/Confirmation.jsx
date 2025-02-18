import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceProviderDetails } from "../../services/ServiceProviderService";

function Confirmation() {
  const navigate = useNavigate();

  const [bookingsInfo, setBookingsInfo] = useState([]);

  const [contact, setContact] = useState("");

  useEffect(() => {
    const storedBookingData = localStorage.getItem("bookingData");
    if (storedBookingData) {
      const parsedData = JSON.parse(storedBookingData);
      setBookingsInfo(Array.isArray(parsedData) ? parsedData : [parsedData]);
    }
  }, []);

  useEffect(() => {
    const fetchContactDetails = async () => {
      if (bookingsInfo.length > 0) {
        console.log(bookingsInfo[0].spId);
        const data = await getServiceProviderDetails(bookingsInfo[0].spId);
        setContact(data.phone_no);
        console.log(contact);
      }
    };

    fetchContactDetails();
  }, [bookingsInfo]);

  const handleClick = ()=>{
    localStorage.removeItem("bookingData");

    navigate("/payment");


  }

  return (
    <div>
      <h1>Your bookings are done!!!</h1>
      <br />
      <br />
      <h3>Contact Details</h3>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Provider Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {bookingsInfo.map((bookingsInfo, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{bookingsInfo.sname}</td>
              <td>{bookingsInfo.spname}</td>
              <td>{contact}</td>
              <td>{bookingsInfo.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        class="btn btn-primary"
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
}

export default Confirmation;
