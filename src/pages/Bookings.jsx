// import React, { useState } from 'react';
// import NavBar from '../components/NavBar';

// const bookingsData = [
//   // Sample bookings data
//   {
//     servicerName: 'John Doe',
//     category: 'Plumbing',
//     customerName: 'Jane Smith',
//     serviceStatus: 'Completed',
//     paymentStatus: 'Paid',
//     price: '$100',

//   },
//   // Add more bookings here
// ];

// const NavBarBookings = ({ onSearch, onFilter }) => {
//   return (
//       <div>
//        <div className="row mb-3">
//        <div className="col" id="navbarSupportedContent">
//         <form className="d-flex ms-auto">
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search by name"
//             aria-label="Search"
//             onChange={e => onSearch(e.target.value)}
//           />

//           <select className="form-select me-2" onChange={e => onFilter('paymentStatus', e.target.value)}>
//             <option value="">Filter by Payment Status</option>
//             <option value="paid">Paid</option>
//             <option value="pending">Pending</option>
//           </select>

//           <select className="form-select" onChange={e => onFilter('serviceStatus', e.target.value)}>
//             <option value="">Filter by Service Status</option>
//             <option value="completed">Completed</option>
//             <option value="in-progress">In Progress</option>
//           </select>
//         </form>
//       </div>
//       </div></div>
//   );
// };

// const Bookings = () => {
//   const [bookings, setBookings] = useState(bookingsData);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [paymentFilter, setPaymentFilter] = useState('');
//   const [serviceFilter, setServiceFilter] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     filterBookings(term, paymentFilter, serviceFilter);
//   };

//   const handleFilter = (type, value) => {
//     if (type === 'paymentStatus') {
//       setPaymentFilter(value);
//       filterBookings(searchTerm, value, serviceFilter);
//     } else if (type === 'serviceStatus') {
//       setServiceFilter(value);
//       filterBookings(searchTerm, paymentFilter, value);
//     }
//   };

//   const filterBookings = (searchTerm, paymentFilter, serviceFilter) => {
//     let filtered = bookingsData.filter(booking =>
//       booking.servicerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (!paymentFilter || booking.paymentStatus === paymentFilter) &&
//       (!serviceFilter || booking.serviceStatus === serviceFilter)
//     );
//     setBookings(filtered);
//   };

//   return (
//     <div>
//       <NavBar/><br/><br/>
//     <div style={{margin:"10px"}}>
//       <NavBarBookings onSearch={handleSearch} onFilter={handleFilter} />
//       <br/>
//       <br/>
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered table-hover">
//           <thead>
//             <tr>
//               <th>Servicer Name</th>
//               <th>Category</th>
//               <th>Customer Name</th>
//               <th>Service Status</th>
//               <th>Payment Status</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>{booking.servicerName}</td>
//                 <td>{booking.category}</td>
//                 <td>{booking.customerName}</td>
//                 <td>{booking.serviceStatus}</td>
//                 <td>{booking.paymentStatus}</td>
//                 <td>{booking.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Bookings;

/*
import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const bookingsData = [
  {
    servicerName: 'John Doe',
    category: 'Plumbing',
    customerName: 'Jane Smith',
    serviceStatus: 'Completed',
    paymentStatus: 'Paid',
    price: '$100',
  },
  // Add more bookings here
];

const NavBarBookings = ({ onSearch, onFilter }) => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              onChange={e => onSearch(e.target.value)}
            />
            <select className="form-select me-2" onChange={e => onFilter('paymentStatus', e.target.value)}>
              <option value="">Filter by Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            <select className="form-select" onChange={e => onFilter('serviceStatus', e.target.value)}>
              <option value="">Filter by Service Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const [bookings, setBookings] = useState(bookingsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterBookings(term, paymentFilter, serviceFilter);
  };

  const handleFilter = (type, value) => {
    if (type === 'paymentStatus') {
      setPaymentFilter(value);
      filterBookings(searchTerm, value, serviceFilter);
    } else if (type === 'serviceStatus') {
      setServiceFilter(value);
      filterBookings(searchTerm, paymentFilter, value);
    }
  };

  const filterBookings = (searchTerm, paymentFilter, serviceFilter) => {
    let filtered = bookingsData.filter(booking =>
      booking.servicerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!paymentFilter || booking.paymentStatus.toLowerCase() === paymentFilter.toLowerCase()) &&
      (!serviceFilter || booking.serviceStatus.toLowerCase() === serviceFilter.toLowerCase())
    );
    setBookings(filtered);
  };

  return (
    <div>
      <NavBar />
      <br/><br/>
      <div style={{ margin: "10px" }}>
        <NavBarBookings onSearch={handleSearch} onFilter={handleFilter} />
        <br/><br/>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Servicer Name</th>
                <th>Category</th>
                <th>Customer Name</th>
                <th>Service Status</th>
                <th>Payment Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.servicerName}</td>
                  <td>{booking.category}</td>
                  <td>{booking.customerName}</td>
                  <td>{booking.serviceStatus}</td>
                  <td>{booking.paymentStatus}</td>
                  <td>{booking.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { getAllBookings } from "../services/BookingsService";

const NavBarBookings = ({ onSearch, onFilter }) => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
            <select
              className="form-select me-2"
              onChange={(e) => onFilter("paymentStatus", e.target.value)}
            >
              <option value="">Filter by Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            <select
              className="form-select"
              onChange={(e) => onFilter("serviceStatus", e.target.value)}
            >
              <option value="">Filter by Service Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getAllBookings();
        console.log("response is here : " + response);
        setBookings(response);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterBookings(term, paymentFilter, serviceFilter);
  };

  const handleFilter = (type, value) => {
    if (type === "paymentStatus") {
      setPaymentFilter(value);
      filterBookings(searchTerm, value, serviceFilter);
    } else if (type === "serviceStatus") {
      setServiceFilter(value);
      filterBookings(searchTerm, paymentFilter, value);
    }
  };

  const filterBookings = (searchTerm, paymentFilter, serviceFilter) => {
    let filtered = bookings.filter(
      (booking) =>
        booking.servicerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!paymentFilter ||
          booking.paymentStatus.toLowerCase() ===
            paymentFilter.toLowerCase()) &&
        (!serviceFilter ||
          booking.serviceStatus.toLowerCase() === serviceFilter.toLowerCase())
    );
    setBookings(filtered);
  };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div style={{ margin: "10px" }}>
        <NavBarBookings onSearch={handleSearch} onFilter={handleFilter} />
        <br />
        <br />
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Service Provider Name</th>
                <th>Service Name</th>
                <th>Customer Name</th>
                <th>Service Status</th>
                {/*<th>Payment Status</th>*/}
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {console.log(bookings)}
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.spname}</td>
                  <td>{booking.sname}</td>
                  <td>{booking.cname}</td>
                  <td>{booking.sstatus}</td>
                  {/* <td>{booking.pstatus}</td> */}
                  <td>{booking.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
