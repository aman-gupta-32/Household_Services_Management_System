
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar.jsx';
import { getServiceProviders } from '../../services/AdminService.js';
import {getdeletesp} from '../../services/AdminService.js'
const ManageServiceProvider = () => {
  const [loading, setLoading] = useState(true);
  const [serviceProviders, setServiceProviders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServiceProviders();
        setServiceProviders(data);
        console.log(data);
       // setFilteredServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const removesp = async (id) => {

    try{
      const data = await getdeletesp(id);
      if(data.message == "Deleted service provider details"){
        window.alert("deleted sucessfully");
        fetchData();
      }
    }catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NavBar /><br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>TotalJobs</th>
              <th>Total Earnings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {serviceProviders.map((service) => (
              <tr key={service.name}>
                <td>{service.name}</td>
                <td>{service.exp}</td>
                <td>{service.earnings}</td>
                <td><button type="button" className="btn btn-danger" onClick={()=>removesp(service.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    // </div>
  );
};

export default ManageServiceProvider;
