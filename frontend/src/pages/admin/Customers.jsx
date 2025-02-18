

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { getAllCustomers } from "../../services/AdminService"; // Import the service

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers(); // Call the service function
        setCustomers(data);
      } catch (error) {
        console.error("Failed to fetch customers", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilter = (type, value) => {
    if (type === "paymentStatus") setPaymentFilter(value);
    if (type === "serviceStatus") setServiceFilter(value);
  };

  // Apply search and filters
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.cname.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!paymentFilter || customer.pstatus === paymentFilter) &&
      (!serviceFilter || customer.bstatus === serviceFilter)
  );

  return (
    <div>
      <NavBar />
      <br />
      <div style={{ margin: "10px" }}>
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
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.cname}</td>
                    <td>{customer.phNo}</td>
                    <td>{customer.address}</td>
                    <td>{customer.sname}</td>
                    <td>{customer.bstatus || "N/A"}</td>
                    <td>{customer.price}</td>
                    <td>{customer.pstatus || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
