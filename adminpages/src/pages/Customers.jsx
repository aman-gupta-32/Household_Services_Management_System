import React, { useState } from 'react';
import NavBar from '../components/NavBar';


const customersData = [
  // Sample customer data
  {
    customerName: 'Jane Smith',
    contact: '123-456-7890',
    address: '123 Main St, City, Country',
    serviceName: 'Plumbing',
    serviceStatus: 'Completed',
    servicePrice: '$100',
    paymentStatus: 'Paid',
  },
  // Add more customer data here
];

const NavBarCustomers = ({ onSearch, onFilter }) => {
  return (
    <div className="row mb-3">
         <div className="col">
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
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
          <select className="form-select" onChange={e => onFilter('serviceStatus', e.target.value)}>
            <option value="">Filter by Service Status</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
          </select>
        </form>
      </div>
      </div>

  );
};

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterCustomers(term, paymentFilter, serviceFilter);
  };

  const handleFilter = (type, value) => {
    if (type === 'paymentStatus') {
      setPaymentFilter(value);
      filterCustomers(searchTerm, value, serviceFilter);
    } else if (type === 'serviceStatus') {
      setServiceFilter(value);
      filterCustomers(searchTerm, paymentFilter, value);
    }
  };

  const filterCustomers = (searchTerm, paymentFilter, serviceFilter) => {
    let filtered = customersData.filter(customer =>
      customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!paymentFilter || customer.paymentStatus === paymentFilter) &&
      (!serviceFilter || customer.serviceStatus === serviceFilter)
    );
    setCustomers(filtered);
  };

  return (
    <div>
      <NavBar/><br/>
    <div style={{margin:"10px"}}>
      <NavBarCustomers onSearch={handleSearch} onFilter={handleFilter} />
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Service Name</th>
              <th>Service Status</th>
              <th>Service Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.customerName}</td>
                <td>{customer.contact}</td>
                <td>{customer.address}</td>
                <td>{customer.serviceName}</td>
                <td>{customer.serviceStatus}</td>
                <td>{customer.servicePrice}</td>
                <td>{customer.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>

);
};

export default Customers;
