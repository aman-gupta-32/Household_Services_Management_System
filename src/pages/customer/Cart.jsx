import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBookings } from "../../services/CustomerService";

function Cart() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookingData = localStorage.getItem("bookingData");
    console.log(bookings);
    if (storedBookingData) {
      const parsedData = JSON.parse(storedBookingData);
      console.log(parsedData);
      //setBookings([parsedData]);
      setBookings(Array.isArray(parsedData) ? parsedData : [parsedData]);
    }
  }, []);

  const handleCheckout = async () => {
    if (!bookings) {
      alert("No items in cart");
      return;
    }

    //const bookingsToSubmit = bookings.map(({ price, spname,sname, ...rest }) => rest);

    const bookingsToSubmit = {
      ...bookings[0],
      bookingSlot: bookings[0].bookingSlot.toString(),
      customersId: bookings[0].customersId.toString(),
      servicesId: bookings[0].servicesId.toString(),
      date: bookings[0].date,
      status: bookings[0].status
    };
    

    console.log(bookingsToSubmit);

    try {
      await addBookings(bookingsToSubmit);
      alert("Booking successfully added!");
      //localStorage.removeItem("bookingData"); // Clear the cart after successful booking
      navigate("/confirmation");
    } catch (error) {
      console.error("Error adding booking:", error);
      alert("There was an error processing your booking.");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <br />
      <h3>Your bookings</h3>

      <br />
      <br />

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Provider Name</th>
            <th scope="col">Date</th>
            <th scope="col">Slot</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{booking.sname}</td>
              <td>{booking.spname}</td>
              <td>{booking.date}</td>
              <td>{booking.bookingSlot}</td>
              <td>{booking.price}</td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td></td>

            <td></td>
            <td></td>
            <td></td>
            <th>Total price</th>
            <td>455</td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        class="btn btn-primary"
        style={{ marginRight: "10px" }}
        onClick={() => navigate("/addtocart")}
      >
        Add Service
      </button>

      <button type="button" class="btn btn-primary" onClick={handleCheckout}>
        Confirm
      </button>
    </div>
  );
}

export default Cart;
