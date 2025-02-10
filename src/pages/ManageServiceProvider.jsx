/*import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar.jsx'

const servicesData = [
  { name: 'John Doe', category: 'Plumbing', booked: 'Fix leak', accomplishment: 'Completed', rating: 4.5, feedback: 'Great job!', earnings: 200, date: '2025-01-01' },
  // Add more service history data here...
];

const ManageServiceProvider = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [earningsFilter, setEarningsFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterServices(e.target.value, earningsFilter, dateFilter, serviceFilter);
  };

  const handleEarningsFilter = (e) => {
    setEarningsFilter(e.target.value);
    filterServices(searchTerm, e.target.value, dateFilter, serviceFilter);
  };

  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
    filterServices(searchTerm, earningsFilter, e.target.value, serviceFilter);
  };

  const handleServiceFilter = (e) => {
    setServiceFilter(e.target.value);
    filterServices(searchTerm, earningsFilter, dateFilter, e.target.value);
  };

  const filterServices = (searchTerm, earningsFilter, dateFilter, serviceFilter) => {
    let filtered = servicesData.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!earningsFilter || service.earnings >= parseFloat(earningsFilter)) &&
      (!dateFilter || service.date === dateFilter) &&
      (!serviceFilter || service.category.toLowerCase().includes(serviceFilter.toLowerCase()))
    );
    setFilteredServices(filtered);
  };

  return (
    <div >
    <NavBar/><br>
    </br>
      <div style={{margin:"10px"}}>
      <div className="row mb-3">
         <div className="col">
            <input
              className="form-control"
              type="search"
              placeholder="Search service provider"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
        </div>

        <div className="col">
          <input
            className="form-control"
            type="number"
            placeholder="Filter by earnings"
            value={earningsFilter}
            onChange={handleEarningsFilter}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Filter by service category"
            value={serviceFilter}
            onChange={handleServiceFilter}
          />
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Service Booked</th>
            <th>Accomplishment</th>
            <th>Rating</th>
            <th>Feedback</th>
            <th>Total Earnings</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.category}</td>
              <td>{service.booked}</td>
              <td>{service.accomplishment}</td>
              <td>{service.rating}</td>
              <td>{service.feedback}</td>
              <td>{service.earnings}</td>
              <td>{service.date}</td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageServiceProvider;

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>
*/

































// import React, { useState } from 'react';

// import NavBar from '../components/NavBar.jsx'

// const servicesData = [
//   { name: 'John Doe', category: 'Plumbing', booked: 'Fix leak', accomplishment: 'Completed', rating: 4.5, feedback: 'Great job!', earnings: 200, date: '2025-01-01' },
// ];

// const ManageServiceProvider = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredServices, setFilteredServices] = useState(servicesData);
//   const [earningsFilter, setEarningsFilter] = useState('');
//   const [dateFilter, setDateFilter] = useState('');
//   const [serviceFilter, setServiceFilter] = useState('');

//   const [showToast, setShowToast] = useState(false); // State to control toast visibility

//   const handleDelete = () => {
//     // Show the toast when delete button is clicked
//     setShowToast(true);
//   };

//   const confirmDelete = () => {
//     // Handle the deletion logic
//     console.log('Item deleted');
//     setShowToast(false); // Hide the toast after deletion
//   };

//   const cancelDelete = () => {
//     // Handle cancel logic
//     console.log('Deletion canceled');
//     setShowToast(false); // Hide the toast
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     filterServices(e.target.value, earningsFilter, dateFilter, serviceFilter);
//   };

//   const handleEarningsFilter = (e) => {
//     setEarningsFilter(e.target.value);
//     filterServices(searchTerm, e.target.value, dateFilter, serviceFilter);
//   };

//   const handleDateFilter = (e) => {
//     setDateFilter(e.target.value);
//     filterServices(searchTerm, earningsFilter, e.target.value, serviceFilter);
//   };

//   const handleServiceFilter = (e) => {
//     setServiceFilter(e.target.value);
//     filterServices(searchTerm, earningsFilter, dateFilter, e.target.value);
//   };

//   const filterServices = (searchTerm, earningsFilter, dateFilter, serviceFilter) => {
//     let filtered = servicesData.filter(service =>
//       service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (!earningsFilter || service.earnings >= parseFloat(earningsFilter)) &&
//       (!dateFilter || service.date === dateFilter) &&
//       (!serviceFilter || service.category.toLowerCase().includes(serviceFilter.toLowerCase()))
//     );
//     setFilteredServices(filtered);
//   };

//   return (
//     <div >
//     <NavBar/><br>
//     </br>
//       <div style={{margin:"10px"}}>
//       <div className="row mb-3">
//          <div className="col">
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search service provider"
//               aria-label="Search"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//         </div>

//         <div className="col">
//           <input
//             className="form-control"
//             type="number"
//             placeholder="Filter by earnings"
//             value={earningsFilter}
//             onChange={handleEarningsFilter}
//           />
//         </div>

//         <div className="col">
//           <input
//             className="form-control"
//             type="text"
//             placeholder="Filter by service category"
//             value={serviceFilter}
//             onChange={handleServiceFilter}
//           />
//         </div>
//       </div>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Service Booked</th>
//             <th>Accomplishment</th>
//             <th>Rating</th>
//             <th>Feedback</th>
//             <th>Total Earnings</th>
//             <th>Date</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredServices.map((service, index) => (
//             <tr key={index}>
//               <td>{service.name}</td>
//               <td>{service.category}</td>
//               <td>{service.booked}</td>
//               <td>{service.accomplishment}</td>
//               <td>{service.rating}</td>
//               <td>{service.feedback}</td>
//               <td>{service.earnings}</td>
//               <td>{service.date}</td>
//               <td><button type="button" class="btn btn-danger"   onClick={handleDelete} >Delete</button></td>
              
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>{showToast && (
//               <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//               <div class="toast-body">
//               Hello, world! This is a toast message.
//               <div class="mt-2 pt-2 border-top">
//                   <button type="button" class="btn btn-primary btn-sm" onClick={confirmDelete} >Take action</button>
//                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast" onClick={cancelDelete}>Close</button>
//              </div>
//               </div>
//             </div>)}</div>
//     </div>
//     </div>
//   );
// };

// export default ManageServiceProvider;






import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import { getServiceProviders } from '../services/AdminService.js';

const ManageServiceProvider = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [earningsFilter, setEarningsFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServiceProviders();
        setServiceProviders(data);
        setFilteredServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    filterServices();
  }, [searchTerm, earningsFilter, dateFilter, serviceFilter, serviceProviders]);

  const filterServices = () => {
    let filtered = serviceProviders.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!earningsFilter || service.earnings >= parseFloat(earningsFilter)) &&
      (!dateFilter || service.date === dateFilter) &&
      (!serviceFilter || service.category.toLowerCase().includes(serviceFilter.toLowerCase()))
    );
    setFilteredServices(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NavBar /><br />
      <div style={{ margin: "10px" }}>
        <div className="row mb-3">
          <div className="col">
            <input
              className="form-control"
              type="search"
              placeholder="Search service provider"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="number"
              placeholder="Filter by earnings"
              value={earningsFilter}
              onChange={(e) => setEarningsFilter(e.target.value)}
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Filter by service category"
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
            />
          </div>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Service Booked</th>
              <th>Accomplishment</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Total Earnings</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.category}</td>
                <td>{service.booked}</td>
                <td>{service.accomplishment}</td>
                <td>{service.rating}</td>
                <td>{service.feedback}</td>
                <td>{service.earnings}</td>
                <td>{service.date}</td>
                <td><button type="button" className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServiceProvider;
