

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
//import 'bootstrap/dist/css/bootstrap.min.css';

const providersData = [
  // Sample service provider data
  {
    category: 'Plumbing',
    contact: 'John Doe',
    bookings: 10,
    status: 'Active',
    rating: 4.5,
    totalEarnings: '$1000',
  },
  // Add more service provider data here
];

const NavBarServiceProviders = ({ onSearch, onFilter }) => {
  return (
   
      <div className="row mb-3">
      <div className="col" id="navbarSupportedContent">
        <form className="d-flex ms-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by contact"
            aria-label="Search"
            onChange={e => onSearch(e.target.value)}
          />
          <select className="form-select me-2" onChange={e => onFilter('rating', e.target.value)}>
            <option value="">Filter by Ratings</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
         
          <select className="form-select" onChange={e => onFilter('category', e.target.value)}>
            <option value="">Filter by Category</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </form>
      </div>
      </div>
    
   
  );
};

const ServiceProvider = () => {
  const [providers, setProviders] = useState(providersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [earningsFilter, setEarningsFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProviders(term, ratingFilter, earningsFilter, categoryFilter);
  };

  const handleFilter = (type, value) => {
    if (type === 'rating') {
      setRatingFilter(value);
      filterProviders(searchTerm, value, earningsFilter, categoryFilter);
    } 
    else if (type === 'category') {
      setCategoryFilter(value);
      filterProviders(searchTerm, ratingFilter, earningsFilter, value);
    }
  };

  const filterProviders = (searchTerm, ratingFilter, categoryFilter) => {
    let filtered = providersData.filter(provider =>
      provider.contact.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!ratingFilter || provider.rating >= parseInt(ratingFilter)) &&
      (!categoryFilter || provider.category.toLowerCase().includes(categoryFilter.toLowerCase()))
    );
    setProviders(filtered);
  };

  return (
    <div>
      <NavBar/>
    <div className="container mt-4">
      <NavBarServiceProviders onSearch={handleSearch} onFilter={handleFilter} />
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Category</th>
              <th>Contact</th>
              <th>Bookings</th>
              <th>Status</th>
              <th>Rating</th>
              <th>Total Earnings</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider, index) => (
              <tr key={index}>
                <td>{provider.category}</td>
                <td>{provider.contact}</td>
                <td>{provider.bookings}</td>
                <td>{provider.status}</td>
                <td>{provider.rating}</td>
                <td>{provider.totalEarnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ServiceProvider;

