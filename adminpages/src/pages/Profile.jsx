import React from 'react';
import Img1 from '../images/OIP (5).jpeg'
import NavBar from '../components/NavBar';
const AdminProfile = () => {
  return (

    <div>
        <NavBar/>
        <br/>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Profile</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Profile Picture */}
        <img
          src={Img1}
          alt="Admin Profile"
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px' }}
        />
        
        <div>
          {/* Basic Info */}
          <h2>MustKnow</h2>
          <p><strong>Email:</strong> findit@task.com</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><b>Address:</b>11, Mayfair Road, Opp Icesketing Rink, Ballygunge, Kolkata</p>
        </div>
      </div>
      
     

      {/* Tasks or Responsibilities */}
      <section>
        <h2>Responsibilities</h2>
        <ul>
          <li>Oversee daily operations and ensure everything runs smoothly.</li>
          <li>Manage and support team members to achieve their goals.</li>
          <li>Coordinate with other departments to streamline processes.</li>
          <li>Develop and implement administrative policies and procedures.</li>
        </ul>
      </section>
    </div>
    </div> 
  );
};

export default AdminProfile;
